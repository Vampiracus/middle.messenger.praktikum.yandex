import './authorizationForm.css';
import Handlebars from "handlebars";
import popupContent from './../../../../components/popupContent';
import formButton from './../../../../components/formButton';
import formInput from './../../../../components/formInput'

function enter(e) {
    e.preventDefault();
    alert("Вход на страницу")
}

export default function authorizationForm() {
    let template = Handlebars.compile(`
    <form class='authPageForm'>
        <div class='authPageForm__wrapper'>
            <h3>Вход</h3>
            {{{loginInput}}}
            {{{passwordInput}}}
        </div>
        <div class='authPageForm__wrapper'>
            {{{formButton}}}
            <a class="authPageForm__bottomLink">Регистрация</a>
        </div>
    </form>
    `);
    return template({
        formButton: formButton('Войти', 'loginFromSubmit', enter),
        loginInput: formInput('Логин', 'login', 'loginInput', 'text', 'required'),
        passwordInput: formInput('Пароль', 'password', 'passwordInput', 'password', 'required')
    });
}
