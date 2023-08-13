import Handlebars from 'handlebars';
import formInput from '../../../components/formInput';
import formButton from '../../../components/formButton';

function register() {
    alert('Регистрация');
}

export default function registrationForm() {
    const template = Handlebars.compile(`
        <main>
            <form class='auth-page-form'>
                <div class='auth-page-form__wrapper'>
                    <h3>Регистрация</h3>
                    {{{emailInput}}}
                    {{{loginInput}}}
                    {{{nameInput}}}
                    {{{secondnameInput}}}
                    {{{phoneInput}}}
                    {{{passwordInput}}}
                    {{{passwordAgainInput}}}
                </div>
                <div class='auth-page-form__wrapper'>
                    {{{formButton}}}
                    <a class="auth-page-form__bottom-link">Войти</a>
                </div>
            </form>
        <main>
    `);
    return template({
        emailInput: formInput('Почта', 'email', 'registration-email-input', 'text', 'required'),
        loginInput: formInput('Логин', 'login', 'registration-login-input', 'text', 'required'),
        nameInput: formInput('Имя', 'first_name', 'registration-f-name-input', 'text', 'required'),
        secondnameInput: formInput('Фамилия', 'second_name', 'registration-s-name-input', 'text', 'required'),
        phoneInput: formInput('Телефон', 'phone', 'registration-phone-input', 'text', 'required'),
        passwordInput: formInput('Пароль', 'password', 'registration-password-input', 'password', 'required'),
        passwordAgainInput: formInput('Повторите пароль', 'password-again', 'registration-pasword-again-input', 'password', 'required'),
        formButton: formButton('Регистрация', 'register-button', register),
    });
}
