import Handlebars from "handlebars";
import formInput from "../../../../components/formInput";
import formButton from "../../../../components/formButton";

function register() {
    alert('Пример: неправильно введена почта');
    document.querySelector('#registrationEmailInput').previousElementSibling.classList += ' formInput__label_incorrect';
}

export default function registrationForm() {
    let template = Handlebars.compile(`
        <form class='authPageForm'>
            <div class='authPageForm__wrapper'>
                <h3>Регистрация</h3>
                {{{emailInput}}}
                {{{loginInput}}}
                {{{nameInput}}}
                {{{secondnameInput}}}
                {{{phoneInput}}}
                {{{passwordInput}}}
                {{{passwordAgainInput}}}
            </div>
            <div class='authPageForm__wrapper'>
                {{{formButton}}}
                <a class="authPageForm__bottomLink">Войти</a>
            </div>
        </form>
    `)
    return template({
        emailInput: formInput('Почта', 'email', 'registrationEmailInput', 'text', 'required'),
        loginInput: formInput('Логин', 'login', 'registrationLoginInput', 'text', 'required'),
        nameInput: formInput('Имя', 'first_name', 'registrationFNameInput', 'text', 'required'),
        secondnameInput: formInput('Фамилия', 'second_name', 'registrationSNameInput', 'text', 'required'),
        phoneInput: formInput('Телефон', 'phone', 'registrationPhoneInput', 'text', 'required'),
        passwordInput: formInput('Пароль', 'password', 'registrationPasswordInput', 'password', 'required'),
        passwordAgainInput: formInput('Повторите пароль', 'passwordAgagin', 'registrationPaswordAgainInput', 'password', 'required'),
        formButton: formButton('Регистрация', 'registerButton', register)
    });
}