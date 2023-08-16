import FormInput from '../../../../components/formInput';
import FormButton from '../../../../components/formButton';
import ProfileFormWrapper from '../profileFormWrapper';
import Block from '../../../../utils/Block';
import { validateEmail, validateLogin, validateName, validatePhone } from '../../../../utils/validation';

interface IWrapper {
    template: string,
    implementation: Record<string, Block | string | undefined>,
}

export default class ChangeDataForm extends ProfileFormWrapper<UserInfo> {
    private _save(e: Event) {
        e.preventDefault();
        this.setProps({
            ...this.props,
            email: this.children[0].props.value,
            login: this.children[1].props.value,
            firstName: this.children[2].props.value,
            secondName: this.children[3].props.value,
            displayName: this.children[4].props.value,
            phone: this.children[5].props.value,
        });
        const {
            email, login, firstName, secondName, phone, displayName,
        } = this.props;
        console.log({
            email, login, firstName, secondName, phone, displayName,
        });
        if (!validateEmail(email) || !validateLogin(login) || !validateName(firstName)
        || !validateName(secondName) || !validateName(displayName) || !validatePhone(phone)) {
            console.log('Валидация не удалась');
            return;
        }
        console.log('Успешная валидация');
    }

    constructor(me: UserInfo) {
        const emailInput = new FormInput({
            labelText: 'Почта',
            name: 'email',
            id: 'profileEmailInput',
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
            value: me.email,
        });
        const loginInput = new FormInput({
            labelText: 'Логин',
            name: 'login',
            id: 'profileLoginInput',
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
            value: me.login,
        });
        const firstNameInput = new FormInput({
            labelText: 'Имя',
            name: 'first_name',
            id: 'profileNameInput',
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
            value: me.firstName,
        });
        const secondNameInput = new FormInput({
            labelText: 'Фамилия',
            name: 'second_name',
            id: 'profileSecondNameInput',
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
            value: me.secondName,
        });
        const displayNameInput = new FormInput({
            labelText: 'Имя в чате',
            name: 'display_name',
            id: 'profileChatNameInput',
            type: 'text',
            additionalProperies: 'required',
            onBlur: () => {
                this.setProps({
                    ...this.props, displayName: displayNameInput.props.value,
                });
                if (validateName(displayNameInput.props.value)) {
                    displayNameInput.setCorrect();
                } else {
                    displayNameInput.setIncorrect();
                }
            },
            value: me.firstName,
        });
        const phoneInput = new FormInput({
            labelText: 'Телефон',
            name: 'phone',
            id: 'profilePhoneInput',
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
            value: me.phone,
        });

        const kids = [
            emailInput,
            loginInput,
            firstNameInput,
            secondNameInput,
            displayNameInput,
            phoneInput,
            new FormButton({
                text: 'Сохранить',
                id: 'submitProfileDataButton',
            }),
        ];
        const templateProps: IWrapper = {
            template: `
            <form class='change-data-form''>
                <h2>Изменить данные</h2>
                {{{emailInput}}}
                {{{loginInput}}}
                {{{nameInput}}}
                {{{secondNameInput}}}
                {{{chatNameInput}}}
                {{{phoneInput}}}
                <br/>
                {{{submitProfileDataButton}}}
            </form>
            `,
            implementation: {
                emailInput: kids[0],
                loginInput: kids[1],
                nameInput: kids[2],
                secondNameInput: kids[3],
                chatNameInput: kids[4],
                phoneInput: kids[5],
                submitProfileDataButton: kids[6],
            },
        };
        super(templateProps, me, kids);
    }

    componentDidUpdate(): boolean {
        return false;
    }

    componentDidMount(): void {
        this.children[6].element.addEventListener('click', this._save.bind(this));
    }
}
