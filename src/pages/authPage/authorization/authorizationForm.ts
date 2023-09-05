import FormButton from '../../../components/formButton';
import FormInput from '../../../components/formInput';
import MyA from '../../../components/myA/myA';
import Block from '../../../utils/Block';
import { validateLogin, validatePassword } from '../../../utils/validation';
import Router from '../../../utils/Router';
import AuthAPI from '../../../api/AuthAPI';

const router = Router;

interface Props {
    login: string,
    password: string
}

// eslint-disable-next-line no-use-before-define
function enter(this: AuthorizationForm, e: Event) {
    e.preventDefault();
    this.setProps({
        login: this.children[1].props.inputProps.value,
        password: this.children[2].props.inputProps.value,
    });
    const {
        login, password,
    } = this.props;
    console.log({
        login, password,
    });
    if (validateLogin(login) !== true || validatePassword(password) !== true) {
        console.log('Валидация не удалась');
        // return;
    }
    console.log('Успешная валидация');

    AuthAPI.logout().then(() => {
        AuthAPI.signin({
            login: this.props.login,
            password: this.props.password,
        })
            .then(xhr => xhr.response)
            .then(res => {
                if (res === 'OK') {
                    router.go('/messages');
                } else {
                    (this.children[1] as FormInput).setIncorrect();
                    (this.children[2] as FormInput).setIncorrect();
                }
                AuthAPI.putUserInfoIntoApplication();
            });
    });
}

export default class AuthorizationForm extends Block<Props> {
    componentDidUpdate(): boolean {
        return false;
    }

    constructor() {
        const loginInput = new FormInput({
            labelText: 'Логин',
            validationFunction: validateLogin,
            inputProps: {
                name: 'login',
                id: 'login-input',
                type: 'text',
                additionalProperties: [['required', 'true'], ['autofocus', 'true']],
                events: [
                    ['blur', () => {
                        this.setProps({
                            ...this.props, login: loginInput.props.inputProps.value,
                        });
                    }],
                ],
                value: '',
            },
        });
        const passwordInput = new FormInput({
            labelText: 'Пароль',
            validationFunction: validatePassword,
            inputProps: {
                name: 'password',
                id: 'password-input',
                type: 'password',
                additionalProperties: [['required', 'true']],
                events: [
                    ['blur', () => {
                        this.setProps({
                            ...this.props, password: passwordInput.props.inputProps.value,
                        });
                    }],
                ],
                value: '',
            },
        });

        super({
            login: '', password: '',
        }, 'main', [
            new FormButton({
                text: 'Войти',
                id: 'login-from-submit',
            }),
            loginInput,
            passwordInput,
            new MyA({
                text: 'Регистрация',
                classes: ['auth-page-form__bottom-link'],
                events: [
                    ['click', () => { router.go('/sign-up'); }],
                ],
            }),
        ]);
    }

    componentDidMount(): void {
        let events = [];
        if (this.children[0].props.events) events = this.children[0].props.events;
        this.children[0].setProps({
            ...this.children[0].props,
            events: [...events, ['click', enter.bind(this)]],
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
                {{{AToReg}}}
            </div>
        </form>
        `, {
            formButton: this.children[0],
            loginInput: this.children[1],
            passwordInput: this.children[2],
            AToReg: this.children[3],
        });
    }
}
