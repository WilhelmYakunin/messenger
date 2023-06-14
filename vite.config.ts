import { defineConfig } from 'vite';
import postcssNesting from 'postcss-nesting';

export const port: number = Number(process.env.PORT) || 3000;

export default defineConfig({
  server: {
    port: port,
  },
  preview: {
    port: port,
  },
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
  },
});
