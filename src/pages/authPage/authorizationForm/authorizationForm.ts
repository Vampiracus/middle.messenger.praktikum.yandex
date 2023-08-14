import FormButton from '../../../components/FormButton';
import FormInput from '../../../components/FormInput';
import Block from '../../../utils/Block';

function enter(e: Event) {
    e.preventDefault();
    alert('Вход на страницу');
}

interface Props {
    login: string,
    password: string
}

export default class AuthorizationForm extends Block<Props> {
    constructor() {
        super({ login: '', password: '' }, 'main', [
            new FormButton({ text: 'Войти', id: 'login-from-submit', callback: enter }),
            new FormInput({
                labelText: 'Логин',
                name: 'login',
                id: 'login-input',
                type: 'text',
                additionalProperies: 'required',
                value: '',
            }),
            new FormInput({
                labelText: 'Пароль',
                name: 'password',
                id: 'password-input',
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
                <h3>Вход</h3>
                {{{loginInput}}}
                {{{passwordInput}}}
            </div>
            <div class='auth-page-form__wrapper'>
                {{{formButton}}}
                <a class="auth-page-form__bottom-link">Регистрация</a>
            </div>
        </form>
        `, {
            formButton: this.children[0],
            loginInput: this.children[1],
            passwordInput: this.children[2],
        });
    }
}
