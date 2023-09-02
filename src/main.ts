import './style.scss';
import { AutPage, RegPage } from './pages/authPage';
import { Error404Page, Error500Page } from './pages/errors';
import MainPage from './pages/mainPage';
import { DataSettingsPage, ProfileMainPage, PasswordSettingPage } from './pages/profilePage';
import Router from './utils/Router';

const router = Router;
router
    .use(/^\/$/, AutPage)
    .use(/^\/sign-up$/, RegPage)
    .use(/^\/messages$/, MainPage)
    .use(/^\/settings$/, ProfileMainPage)
    .use(/^\/settings\/data$/, DataSettingsPage)
    .use(/^\/settings\/password$/, PasswordSettingPage)
    .use(/^\/500$/, Error500Page)
    .use(/^.*$/, Error404Page)
    .start();
