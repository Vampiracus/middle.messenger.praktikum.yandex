import FormInput from '../../../components/formInput';
import FormButton from '../../../components/formButton';
import Block from '../../../utils/Block';
import { validateEmail, validateLogin, validateName, validatePassword, validatePhone } from '../../../utils/validation';
import MyA from '../../../components/myA/myA';
import Router from '../../../utils/Router';
import AuthAPI from '../../../api/AuthAPI';

const router = Router;

interface Props {
    email: string,
    login: string,
    firstName: string,
    secondName: string,
    phone: string,
    password: string,
    passwordAgain: string,
}

export default class RegistrationForm extends Block<Props> {
    private _register(e: Event) {
        e.preventDefault();
        this.setProps({
            email: this.children[1].props.inputProps.value,
            login: this.children[2].props.inputProps.value,
            firstName: this.children[3].props.inputProps.value,
            secondName: this.children[4].props.inputProps.value,
            phone: this.children[5].props.inputProps.value,
            password: this.children[6].props.inputProps.value,
            passwordAgain: this.children[7].props.inputProps.value,
        });
        const {
            email, login, firstName, secondName, phone, password, passwordAgain,
        } = this.props;
        console.log({
            email, login, firstName, secondName, phone, password, passwordAgain,
        });
        let validated: boolean = true;
        for (let i = 1; i < 8; i++) {
            validated = (this.children[i] as FormInput).validate() && validated;
        }
        if (!validated) {
            console.log('Валидация не удалась');
            return;
        }
        console.log('Успешная валидация');

        AuthAPI.signup({
            email,
            first_name: firstName,
            second_name: secondName,
            login,
            password,
            phone,
        })
            .then(res => {
                if (!res.reason) {
                    router.go('/messages');
                    AuthAPI.putUserInfoIntoApplication();
                } else if (res.reason === 'Login already exists') {
                    (this.children[2] as FormInput).setIncorrect();
                }
            });
    }

    componentDidUpdate(): boolean {
        return false;
    }

    constructor() {
        const emailInput = new FormInput({
            labelText: 'Почта',
            validationFunction: validateEmail,
            inputProps: {
                name: 'email',
                id: 'registration-email-input',
                type: 'text',
                additionalProperties: [['required', 'true'], ['autofocus', 'true']],
                events: [['blur', () => {
                    this.setProps({
                        ...this.props, email: emailInput.props.inputProps.value,
                    });
                }]],
                value: '',
            },
        });
        const loginInput = new FormInput({
            labelText: 'Логин',
            validationFunction: validateLogin,
            inputProps: {
                name: 'login',
                id: 'registration-login-input',
                type: 'text',
                additionalProperties: [['required', 'true'], ['maxlength', '20']],
                events: [['blur', () => {
                    this.setProps({
                        ...this.props, login: loginInput.props.inputProps.value,
                    });
                }]],
                value: '',
            },
        });
        const firstNameInput = new FormInput({
            labelText: 'Имя',
            validationFunction: validateName,
            inputProps: {
                name: 'first_name',
                id: 'registration-f-name-input',
                type: 'text',
                additionalProperties: [['required', 'true']],
                events: [['blur', () => {
                    this.setProps({
                        ...this.props, firstName: firstNameInput.props.inputProps.value,
                    });
                }]],
                value: '',
            },
        });
        const secondNameInput = new FormInput({
            labelText: 'Фамилия',
            validationFunction: validateName,
            inputProps: {
                name: 'second_name',
                id: 'registration-s-name-input',
                type: 'text',
                additionalProperties: [['required', 'true']],
                events: [['blur', () => {
                    this.setProps({
                        ...this.props, secondName: secondNameInput.props.inputProps.value,
                    });
                }]],
                value: '',
            },
        });
        const phoneInput = new FormInput({
            labelText: 'Телефон',
            validationFunction: validatePhone,
            inputProps: {
                name: 'phone',
                id: 'registration-phone-input',
                type: 'text',
                additionalProperties: [['required', 'true']],
                events: [['blur', () => {
                    this.setProps({
                        ...this.props, phone: phoneInput.props.inputProps.value,
                    });
                }]],
                value: '',
            },
        });
        /* eslint-disable no-use-before-define */
        const passwordInput = new FormInput({
            labelText: 'Пароль',
            validationFunction: validatePassword,
            inputProps: {
                name: 'password',
                id: 'registration-password-input',
                type: 'password',
                additionalProperties: [['required', 'true'], ['maxlength', '40']],
                events: [['blur', () => {
                    this.setProps({
                        ...this.props, password: passwordInput.props.inputProps.value,
                    });
                    passwordAgainInput.validate();
                }]],
                value: '',
            },
        });
        /* eslint-enable no-use-before-define */
        const passwordAgainInput = new FormInput({
            labelText: 'Повторите пароль',
            validationFunction: (password: string) => {
                if (passwordInput.props.inputProps.value === password) return true;
                return 'Пароли не совпадают';
            },
            inputProps: {
                name: 'password-again',
                id: 'registration-pasword-again-input',
                type: 'password',
                additionalProperties: [['required', 'true'], ['maxlength', '40']],
                events: [['blur', () => {
                    this.setProps({
                        ...this.props, passwordAgain: passwordAgainInput.props.inputProps.value,
                    });
                }]],
                value: '',
            },
        });

        super({
            email: '',
            login: '',
            firstName: '',
            secondName: '',
            phone: '',
            password: '',
            passwordAgain: '',
        }, 'main', [
            new FormButton({
                text: 'Регистрация',
                id: 'register-button',
            }),
            emailInput,
            loginInput,
            firstNameInput,
            secondNameInput,
            phoneInput,
            passwordInput,
            passwordAgainInput,
            new MyA({
                text: 'Войти',
                classes: ['auth-page-form__bottom-link'],
                events: [
                    ['click', () => { router.go('/'); }],
                ],
            }),
        ]);
    }

    componentDidMount(): void {
        let events = [];
        if (this.children[0].props.events) events = this.children[0].props.events;
        this.children[0].setProps({
            ...this.children[0].props,
            events: [
                ...events,
                ['click', this._register.bind(this)],
            ],
        });
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
                {{{AToEntr}}}
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
            AToEntr: this.children[8],
        });
    }
}
