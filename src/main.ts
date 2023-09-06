import './style.scss';
import { AutPage, RegPage } from './pages/authPage';
import { Error404Page, Error500Page } from './pages/errors';
import MainPage from './pages/mainPage';
import { DataSettingsPage, ProfileMainPage, PasswordSettingPage } from './pages/profilePage';
import Router from './utils/Router';
import AuthAPI from './api/AuthAPI';
import ChatsAPI from './api/ChatsAPI';

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

AuthAPI.putUserInfoIntoApplication();

ChatsAPI.putChatsIntoApplication();
