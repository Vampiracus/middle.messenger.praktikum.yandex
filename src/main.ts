import './style.scss';
import { AutPage, RegPage } from './pages/authPage';
import { Error404Page, Error500Page } from './pages/errors';
import MainPage from './pages/mainPage';
import { DataSettingsPage, ProfileMainPage, PasswordSettingPage } from './pages/profilePage';
import Router from './utils/Router';
import AuthAPI from './api/AuthAPI';

Object.assign(window, { sentForUserInfo: true });

const router = Router;

const applicationName = 'MyChat';
router
    .use(/^\/$/, AutPage, `${applicationName}: Вход`)
    .use(/^\/sign-up$/, RegPage, `${applicationName}: Регистрация`)
    .use(/^\/messages$/, MainPage, `${applicationName}: Чаты`)
    .use(/^\/settings$/, ProfileMainPage, `${applicationName}: Профиль`)
    .use(/^\/settings\/data$/, DataSettingsPage, `${applicationName}: Данные профиля`)
    .use(/^\/settings\/password$/, PasswordSettingPage, `${applicationName}: Пароль`)
    .use(/^\/500$/, Error500Page)
    .use(/^.*$/, Error404Page)
    .start();

// Автоперенаправление на вход, если пользователь не авторизован, на главную -- если авторизован.
// План -- перенаправлять на самих страничках
// window.addEventListener('popstate', () => {
//     if (!(window as Window & typeof globalThis & {sentForUserInfo?: boolean}).sentForUserInfo) {
//         const curpath = window.location.pathname;
//         if (!(window as Window & typeof globalThis & {User?: Record<string, any>}).User) {
//             if (curpath !== '/sign-up' && curpath !== '/') {
//                 router.go('/');
//             }
//         } else if (curpath === '/sign-up' || curpath === '/') {
//             router.go('/messages');
//         }
//     }
// });

AuthAPI.putUserInfoIntoApplication();
