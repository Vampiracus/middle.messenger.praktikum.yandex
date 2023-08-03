import Handlebars from "handlebars";
import './style.css';
import authPage from "./pages/authPage";
import {error404Page, error500Page} from "./pages/errors/";
import mainPage from './pages/mainPage';
import profilePage from "./pages/profilePage";

document.querySelector('#app').innerHTML = profilePage();
