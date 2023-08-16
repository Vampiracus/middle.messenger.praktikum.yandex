import FormButton from '../../../components/FormButton';
import FormInput from '../../../components/FormInput';
import Block from '../../../utils/Block';
import { validateLogin, validatePassword } from '../../../utils/validation';

interface Props {
    login: string,
    password: string
}

export default class AuthorizationForm extends Block<Props> {
    _enter(e: Event) {
        e.preventDefault();
        const login = (this.children[1] as FormInput).inputElement.value;
        const password = (this.children[2] as FormInput).inputElement.value;
        console.log({
            login, password,
        });
        if (!validateLogin(login) || !validatePassword(password)) return;
        console.log('Успешная валидация');
    }

    constructor() {
        const loginInput = new FormInput({
            labelText: 'Логин',
            name: 'login',
            id: 'login-input',
            type: 'text',
            additionalProperies: 'required',
            onBlur: () => {
                if (validateLogin(loginInput.props.value)) {
                    loginInput.setCorrect();
                } else {
                    loginInput.setIncorrect();
                }
            },
            value: '',
        });
        const passwordInput = new FormInput({
            labelText: 'Пароль',
            name: 'password',
            id: 'password-input',
            type: 'password',
            additionalProperies: 'required',
            onBlur: () => {
                if (validatePassword(passwordInput.props.value)) {
                    passwordInput.setCorrect();
                } else {
                    passwordInput.setIncorrect();
                }
            },
            value: '',
        });

        super({
            login: '', password: '',
        }, 'main', [
            new FormButton({
                text: 'Войти', id: 'login-from-submit',
            }),
            loginInput,
            passwordInput,
        ]);
    }

    componentDidMount(): void {
        this.children[0].setProps({
            ...this.children[0].props,
            callback: this._enter.bind(this),
        });
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
