import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';
import Block from '../../../utils/Block';
import { validateEmail, validateLogin, validateName, validatePassword, validatePhone } from '../../../utils/validation';

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
            email: this.children[1].props.value,
            login: this.children[2].props.value,
            firstName: this.children[3].props.value,
            secondName: this.children[4].props.value,
            phone: this.children[5].props.value,
            password: this.children[6].props.value,
            passwordAgain: this.children[7].props.value,
        });
        const {
            email, login, firstName, secondName, phone, password, passwordAgain,
        } = this.props;
        console.log({
            email, login, firstName, secondName, phone, password, passwordAgain,
        });
        if (!validateEmail(email) || !validateLogin(login) || !validateName(firstName)
        || !validateName(secondName) || !validatePhone(phone) || !validatePassword(password)
        || password !== passwordAgain) return;
        console.log('Успешная валидация');
    }

    componentDidUpdate(): boolean {
        return false;
    }

    constructor() {
        const emailInput = new FormInput({
            labelText: 'Почта',
            name: 'email',
            id: 'registration-email-input',
            type: 'text',
            additionalProperies: 'required autofocus',
            onBlur: () => {
                this.setProps({
                    ...this.props, email: emailInput.props.value,
                });
                if (validateEmail(emailInput.props.value)) {
                    emailInput.setCorrect();
                } else {
                    emailInput.setIncorrect();
                }
            },
            value: '',
        });
        const loginInput = new FormInput({
            labelText: 'Логин',
            name: 'login',
            id: 'registration-login-input',
            type: 'text',
            additionalProperies: 'required maxlength="20"',
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
        const firstNameInput = new FormInput({
            labelText: 'Имя',
            name: 'first_name',
            id: 'registration-f-name-input',
            type: 'text',
            additionalProperies: 'required',
            onBlur: () => {
                this.setProps({
                    ...this.props, firstName: firstNameInput.props.value,
                });
                if (validateName(firstNameInput.props.value)) {
                    firstNameInput.setCorrect();
                } else {
                    firstNameInput.setIncorrect();
                }
            },
            value: '',
        });
        const secondNameInput = new FormInput({
            labelText: 'Фамилия',
            name: 'second_name',
            id: 'registration-s-name-input',
            type: 'text',
            additionalProperies: 'required',
            onBlur: () => {
                this.setProps({
                    ...this.props, secondName: secondNameInput.props.value,
                });
                if (validateName(secondNameInput.props.value)) {
                    secondNameInput.setCorrect();
                } else {
                    secondNameInput.setIncorrect();
                }
            },
            value: '',
        });
        const phoneInput = new FormInput({
            labelText: 'Телефон',
            name: 'phone',
            id: 'registration-phone-input',
            type: 'text',
            additionalProperies: 'required',
            onBlur: () => {
                this.setProps({
                    ...this.props, phone: phoneInput.props.value,
                });
                if (validatePhone(phoneInput.props.value)) {
                    phoneInput.setCorrect();
                } else {
                    phoneInput.setIncorrect();
                }
            },
            value: '',
        });
        /* eslint-disable no-use-before-define */
        const passwordInput = new FormInput({
            labelText: 'Пароль',
            name: 'password',
            id: 'registration-password-input',
            type: 'password',
            additionalProperies: 'required maxlength="40"',
            onBlur: () => {
                this.setProps({
                    ...this.props, password: passwordInput.props.value,
                });
                if (validatePassword(passwordInput.props.value)) {
                    passwordInput.setCorrect();
                } else {
                    passwordInput.setIncorrect();
                }
                if (passwordInput.props.value === passwordAgainInput.props.value) {
                    passwordAgainInput.setCorrect();
                } else {
                    passwordAgainInput.setIncorrect();
                }
            },
            value: '',
        });
        /* eslint-enable no-use-before-define */
        const passwordAgainInput = new FormInput({
            labelText: 'Повторите пароль',
            name: 'password-again',
            id: 'registration-pasword-again-input',
            type: 'password',
            additionalProperies: 'required maxlength="40"',
            onBlur: () => {
                this.setProps({
                    ...this.props, passwordAgain: passwordAgainInput.props.value,
                });
                if (passwordInput.props.value === passwordAgainInput.props.value) {
                    passwordAgainInput.setCorrect();
                } else {
                    passwordAgainInput.setIncorrect();
                }
            },
            value: '',
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
                text: 'Регистрация', id: 'register-button',
            }),
            emailInput,
            loginInput,
            firstNameInput,
            secondNameInput,
            phoneInput,
            passwordInput,
            passwordAgainInput,
        ]);
    }

    componentDidMount(): void {
        this.children[0].setProps({
            ...this.children[0].props,
            callback: this._register.bind(this),
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
                <a class="auth-page-form__bottom-link" href='/authorization'>Войти</a>
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
