import './style.scss';
import AuthPage from './pages/authPage';
import { Error404Page /* Error500Page */ } from './pages/errors';
import MainPage from './pages/mainPage';
import ProfilePage from './pages/profilePage';

const app: Element | null = document.querySelector('#app');
const auth = new AuthPage();
const err404 = new Error404Page();
const main = new MainPage();
const profile = new ProfilePage();

Object.assign(globalThis, {
    toAuth: () => {
        app!.innerHTML = '';
        app!.appendChild(auth.element);
    },
    toMain: () => {
        app!.innerHTML = '';
        app!.appendChild(main.element);
    },
    toProf: () => {
        app!.innerHTML = '';
        app!.appendChild(profile.element);
    },
});

if (app) {
    app.appendChild(err404.element);
}
