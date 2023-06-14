import loginPage from './src/pages/login';
import signupPage from './src/pages/signup';
import mainPage from './src/pages/main';
import userPage from './src/pages/user';
import notFoundPage from './src/pages/notFound.ts';
import { routes } from './src/routes';

const { pathname } = window.location;

switch (pathname) {
  case routes.main():
    mainPage();
    break;
  case routes.profile():
    userPage();
    break;
  case routes.login():
    loginPage();
    break;
  case routes.singup():
    signupPage();
    break;
  default:
    notFoundPage();
}
