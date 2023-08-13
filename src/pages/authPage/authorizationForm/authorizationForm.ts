import Handlebars from 'handlebars';
import formButton from '../../../components/formButton';
import formInput from '../../../components/formInput';

function enter(e: Event) {
    e.preventDefault();
    alert('Вход на страницу');
}

export default function authorizationForm() {
    const template = Handlebars.compile(`
    <main>
        <form class='auth-page-form'>
            <div class='auth-page-form__wrapper'>
                <h3>Вход</h3>
                {{{loginInput}}}
                {{{passwordInput}}}
            </div>
            <div class='auth-page-form__wrapper'>
                {{{formButton}}}
                <a class="auth-page-form__bottom-link">Регистрация</a>
            </div>
        </form>
    </main>
    `);
    return template({
        formButton: formButton('Войти', 'login-from-submit', enter),
        loginInput: formInput('Логин', 'login', 'login-input', 'text', 'required'),
        passwordInput: formInput('Пароль', 'password', 'password-input', 'password', 'required'),
    });
}
