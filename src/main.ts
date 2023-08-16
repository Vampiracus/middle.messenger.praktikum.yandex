import './style.scss';
// import AuthPage from './pages/AuthPage';
// import { Error404Page, Error500Page } from './pages/errors';
import MainPage from './pages/MainPage';
// import ProfilePage from './pages/ProfilePage';

const app: Element | null = document.querySelector('#app');
if (app) {
    const content = new MainPage();
    app.appendChild(content.element);
}
