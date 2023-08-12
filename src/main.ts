import './style.css';
//import authPage from "./pages/authPage";
//import {error404Page, error500Page} from "./pages/errors";
//import mainPage from './pages/mainPage';
import profilePage from "./pages/profilePage";

let app: Element | null = document.querySelector('#app');
if (app) {
    app.innerHTML = profilePage();
}
