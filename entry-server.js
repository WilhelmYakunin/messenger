import fs from 'fs';
import path from 'path';
import express from 'express';
import { dirname } from 'path';
import { createServer as createViteServer } from 'vite';

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
  });
  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    const url = req.originalUrl;

    try {
      // 1. Read index.html
      let template = fs.readFileSync(
        path.resolve(dirname(), 'index.html'),
        'utf-8'
      );

      // 2. Применяем Vite HTML трансформации. Это заинжектит Vite HMR client, и
      //    также применит HTML трансформации из Vite плагинов, например, global preambles
      //    из @vitejs/plugin-react-refresh
      template = await vite.transformIndexHtml(url, template);

      // 3. Загружаем the server entry. vite.ssrLoadModule автоматически трансформирует
      //    ваш ESM исходный код для использования в Node.js! Здесь не нужен никакой бандлер,
      //    и предоставит эффективную инвалидацию, похожую на HMR.
      const { render } = await vite.ssrLoadModule('/src/entry-server.js');

      // 4. render the app HTML. Это предполагает entry-server.js's exported `render`
      //    function calls appropriate framework SSR APIs,
      //    e.g. ReactDOMServer.renderToString()
      const appHtml = await render(url);

      // 5. Инжектим the app-rendered HTML в шаблон.
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      // 6. Посылаем the rendered HTML обратно клиенту.
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      // Если возникла какая-то ошибка, позволяем Vite fix the stracktrace so it maps back to
      // your actual source code.
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(3000);
}

createServer();
