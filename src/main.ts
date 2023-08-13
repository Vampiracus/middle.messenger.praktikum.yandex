import './style.scss';
// import authPage from './pages/authPage';
// import {error404Page, error500Page} from './pages/errors';
// import mainPage from './pages/mainPage';
import profilePage from './pages/profilePage';

const app: Element | null = document.querySelector('#app');
if (app) {
    app.innerHTML = profilePage();
}
