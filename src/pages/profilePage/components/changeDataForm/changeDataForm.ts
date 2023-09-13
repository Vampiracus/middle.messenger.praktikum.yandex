/* eslint-disable camelcase */
import FormInput from '../../../../components/formInput';
import FormButton from '../../../../components/formButton';
import ProfileFormWrapper from '../profileFormWrapper';
import Block from '../../../../utils/Block';
import { validateEmail, validateLogin, validateName, validatePhone } from '../../../../utils/validation';
import UserAPI from '../../../../api/UserAPI';
import Router from '../../../../utils/Router';
import AuthAPI from '../../../../api/AuthAPI';
import store from '../../../../utils/Store';
import { userAvatarNormalized } from '../../../../utils/fetchAPI';

const router = Router;

interface IWrapper {
    template: string,
    implementation: Record<string, Block | string | undefined>,
}

export default class ChangeDataForm extends ProfileFormWrapper<UserWithoutIdAndAvatar> {
    private _save(e: Event) {
        e.preventDefault();
        this.setProps({
            ...this.props,
            email: this.children[0].props.inputProps.value,
            login: this.children[1].props.inputProps.value,
            first_name: this.children[2].props.inputProps.value,
            second_name: this.children[3].props.inputProps.value,
            display_name: this.children[4].props.inputProps.value,
            phone: this.children[5].props.inputProps.value,
        });
        const {
            email, login, first_name, second_name, phone, display_name,
        } = this.props;
        console.log({
            email, login, first_name, second_name, phone, display_name,
        });

        let validated: boolean = true;
        for (let i = 0; i < 6; i++) {
            validated = (this.children[i] as FormInput).validate() && validated;
        }
        if (!validated) {
            console.log('Валидация не удалась');
            return;
        }
        console.log('Успешная валидация');

        UserAPI.changeData({
            email,
            first_name,
            second_name,
            display_name,
            login,
            phone,
        })
            .then(res => userAvatarNormalized(res))
            .then(res => {
                if (res.id !== undefined) {
                    AuthAPI.putUserInfoIntoApplication(res);
                    router.go('/messages');
                }
            })
            .catch(err => { console.log(err); });
    }

    constructor() {
        const emailInput = new FormInput({
            labelText: 'Почта',
            validationFunction: validateEmail,
            inputProps: {
                name: 'email',
                id: 'profileEmailInput',
                type: 'text',
                additionalProperties: [['required', 'true'], ['autofocus', 'true']],
                events: [['blur', () => {
                    this.setProps({
                        ...this.props, email: emailInput.props.inputProps.value,
                    });
                }]],
                value: store.user.email,
            },
        });
        const loginInput = new FormInput({
            labelText: 'Логин',
            validationFunction: validateLogin,
            inputProps: {
                name: 'login',
                id: 'profileLoginInput',
                type: 'text',
                additionalProperties: [['required', 'true']],
                events: [['blur', () => {
                    this.setProps({
                        ...this.props, login: loginInput.props.inputProps.value,
                    });
                }]],
                value: store.user.login,
            },
        });
        const firstNameInput = new FormInput({
            labelText: 'Имя',
            validationFunction: validateName,
            inputProps: {
                name: 'first_name',
                id: 'profileNameInput',
                type: 'text',
                additionalProperties: [['required', 'true']],
                events: [['blur', () => {
                    this.setProps({
                        ...this.props, first_name: firstNameInput.props.inputProps.value,
                    });
                }]],
                value: store.user.first_name,
            },
        });
        const secondNameInput = new FormInput({
            labelText: 'Фамилия',
            validationFunction: validateName,
            inputProps: {
                name: 'second_name',
                id: 'profileSecondNameInput',
                type: 'text',
                additionalProperties: [['required', 'true']],
                events: [['blur', () => {
                    this.setProps({
                        ...this.props, second_name: secondNameInput.props.inputProps.value,
                    });
                }]],
                value: store.user.second_name,
            },
        });
        const displayNameInput = new FormInput({
            labelText: 'Имя в чате',
            validationFunction: validateName,
            inputProps: {
                name: 'display_name',
                id: 'profileChatNameInput',
                type: 'text',
                additionalProperties: [['required', 'true']],
                events: [['blur', () => {
                    this.setProps({
                        ...this.props, display_name: displayNameInput.props.inputProps.value,
                    });
                }]],
                value: store.user.display_name,
            },
        });
        const phoneInput = new FormInput({
            labelText: 'Телефон',
            validationFunction: validatePhone,
            inputProps: {
                name: 'phone',
                id: 'profilePhoneInput',
                type: 'text',
                additionalProperties: [['required', 'true']],
                events: [['blur', () => {
                    this.setProps({
                        ...this.props, phone: phoneInput.props.inputProps.value,
                    });
                }]],
                value: store.user.phone,
            },
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
        super(templateProps, { ...store.user }, kids);

        store.addOnUserChange(user => {
            this.children[0].setProps({
                inputProps: {
                    ...this.children[0].props.inputProps,
                    value: user.email,
                },
            });
            this.children[1].setProps({
                inputProps: {
                    ...this.children[1].props.inputProps,
                    value: user.login,
                },
            });
            this.children[2].setProps({
                inputProps: {
                    ...this.children[2].props.inputProps,
                    value: user.first_name,
                },
            });
            this.children[3].setProps({
                inputProps: {
                    ...this.children[3].props.inputProps,
                    value: user.second_name,
                },
            });
            this.children[4].setProps({
                inputProps: {
                    ...this.children[4].props.inputProps,
                    value: user.display_name,
                },
            });
            this.children[5].setProps({
                inputProps: {
                    ...this.children[5].props.inputProps,
                    value: user.phone,
                },
            });
        });
    }

    componentDidUpdate(): boolean {
        return false;
    }

    componentDidMount(): void {
        const { events = [] } = this.children[6].props;
        this.children[6].setProps({ events: [...events, ['click', this._save.bind(this)]] });
    }
}
