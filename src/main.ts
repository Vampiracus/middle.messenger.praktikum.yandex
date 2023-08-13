import './style.scss';
// import authPage from './pages/authPage';
import { Error404Page, Error500Page } from './pages/errors';
// import mainPage from './pages/mainPage';
// import profilePage from './pages/profilePage';

const app: Element | null = document.querySelector('#app');
if (app) {
    const content = new Error500Page();
    app.appendChild(content.element);
}
