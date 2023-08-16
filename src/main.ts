import './style.scss';
// import AuthPage from './pages/authPage';
// import { Error404Page, Error500Page } from './pages/errors';
// import MainPage from './pages/mainPage';
import ProfilePage from './pages/profilePage';

const app: Element | null = document.querySelector('#app');
if (app) {
    const content = new ProfilePage();
    app.appendChild(content.element);
}
