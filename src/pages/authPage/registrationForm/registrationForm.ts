import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';
import Block from '../../../utils/Block';

function register() {
    alert('Регистрация');
}

interface Props {
    email: string,
    login: string,
    name: string,
    secondname: string,
    phone: string,
    password: string,
    passwordAgain: string,
}

export default class RegistrationForm extends Block<Props> {
    constructor() {
        super({
            email: '',
            login: '',
            name: '',
            secondname: '',
            phone: '',
            password: '',
            passwordAgain: '',
        }, 'main', [
            new FormButton({ text: 'Регистрация', id: 'register-button', callback: register }),
            new FormInput({
                labelText: 'Почта',
                name: 'email',
                id: 'registration-email-input',
                type: 'text',
                additionalProperies: 'required',
                value: '',
            }),
            new FormInput({
                labelText: 'Логин',
                name: 'login',
                id: 'registration-login-input',
                type: 'text',
                additionalProperies: 'required',
                value: '',
            }),
            new FormInput({
                labelText: 'Имя',
                name: 'first_name',
                id: 'registration-f-name-input',
                type: 'text',
                additionalProperies: 'required',
                value: '',
            }),
            new FormInput({
                labelText: 'Фамилия',
                name: 'second_name',
                id: 'registration-s-name-input',
                type: 'text',
                additionalProperies: 'required',
                value: '',
            }),
            new FormInput({
                labelText: 'Телефон',
                name: 'phone',
                id: 'registration-phone-input',
                type: 'text',
                additionalProperies: 'required',
                value: '',
            }),
            new FormInput({
                labelText: 'Пароль',
                name: 'password',
                id: 'registration-password-input',
                type: 'password',
                additionalProperies: 'required',
                value: '',
            }),
            new FormInput({
                labelText: 'Повторите пароль',
                name: 'password-again',
                id: 'registration-pasword-again-input',
                type: 'password',
                additionalProperies: 'required',
                value: '',
            }),
        ]);
    }

    render() {
        return Block.compile(`
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
        `, {
            formButton: this.children[0],
            emailInput: this.children[1],
            loginInput: this.children[2],
            nameInput: this.children[3],
            secondnameInput: this.children[4],
            phoneInput: this.children[5],
            passwordInput: this.children[6],
            passwordAgainInput: this.children[7],
        });
    }
}
