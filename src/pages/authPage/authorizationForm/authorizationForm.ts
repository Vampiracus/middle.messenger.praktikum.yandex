import FormButton from '../../../components/formButton';
import FormInput from '../../../components/formInput';
import Block from '../../../utils/Block';
import { validateLogin, validatePassword } from '../../../utils/validation';

interface Props {
    login: string,
    password: string
}

export default class AuthorizationForm extends Block<Props> {
    _enter(e: Event) {
        e.preventDefault();
        this.setProps({
            login: this.children[1].props.value,
            password: this.children[2].props.value,
        });
        const {
            login, password,
        } = this.props;
        console.log({
            login, password,
        });
        if (!validateLogin(login) || !validatePassword(password)) return;
        console.log('Успешная валидация');
    }

    componentDidUpdate(): boolean {
        return false;
    }

    constructor() {
        const loginInput = new FormInput({
            labelText: 'Логин',
            name: 'login',
            id: 'login-input',
            type: 'text',
            additionalProperies: 'required',
            onBlur: () => {
                this.setProps({
                    ...this.props, login: loginInput.props.value,
                });
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
                this.setProps({
                    ...this.props, password: passwordInput.props.value,
                });
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
                <a class="auth-page-form__bottom-link" href='/registration'>Регистрация</a>
            </div>
        </form>
        `, {
            formButton: this.children[0],
            loginInput: this.children[1],
            passwordInput: this.children[2],
        });
    }
}
