import ProfileFormWrapper from '../profileFormWrapper';
import Block from '../../../../utils/Block';
import FormInput from '../../../../components/formInput';
import FormButton from '../../../../components/formButton';
import { validatePassword } from '../../../../utils/validation';

interface IWrapper {
    template: string,
    implementation: Record<string, Block | string | undefined>,
}
interface Props {
    oldPassword: string,
    newPassword: string,
    newPasswordAgain: string,
}

export default class ChangePasswordForm extends ProfileFormWrapper<Props> {
    private _save(e: Event) {
        e.preventDefault();
        this.setProps({
            ...this.props,
            oldPassword: this.children[0].props.inputProps.value,
            newPassword: this.children[1].props.inputProps.value,
            newPasswordAgain: this.children[2].props.inputProps.value,
        });
        const {
            oldPassword, newPassword, newPasswordAgain,
        } = this.props;
        console.log({
            oldPassword, newPassword, newPasswordAgain,
        });
        let validated: boolean = true;
        for (let i = 0; i < 3; i++) {
            validated = (this.children[i] as FormInput).validate() && validated;
        }
        if (!validated) {
            console.log('Валидация не удалась');
            return;
        }
        console.log('Успешная валидация');
    }

    componentDidUpdate(): boolean {
        return false;
    }

    constructor() {
        const oldPasswordInput = new FormInput({
            labelText: 'Старый пароль',
            validationFunction: validatePassword,
            inputProps: {
                name: 'oldPassword',
                id: 'oldPasswordInput',
                type: 'password',
                additionalProperties: [['required', 'true'], ['maxlength', '40']],
                events: [['blur', () => {
                    this.setProps({
                        ...this.props, newPassword: oldPasswordInput.props.inputProps.value,
                    });
                }]],
                value: '',
            },
        });
        /* eslint-disable no-use-before-define */
        const passwordInput = new FormInput({
            labelText: 'Новый пароль',
            validationFunction: validatePassword,
            inputProps: {
                name: 'newPassword',
                id: 'newPasswordInput',
                type: 'password',
                additionalProperties: [['required', 'true'], ['maxlength', '40']],
                events: [['blur', () => {
                    this.setProps({
                        ...this.props, newPassword: passwordInput.props.inputProps.value,
                    });
                    passwordAgainInput.validate();
                }]],
                value: '',
            },
        });
        /* eslint-enable no-use-before-define */
        const passwordAgainInput = new FormInput({
            labelText: 'Новый пароль (ещё раз)',
            validationFunction: (word: string): boolean | string => {
                if (word === passwordInput.props.inputProps.value) {
                    return true;
                }
                return 'Пароли не совпадают';
            },
            inputProps: {
                name: 'newPasswordAgain',
                id: 'newPasswordAgainInput',
                type: 'password',
                additionalProperties: [['required', 'true'], ['maxlength', '40']],
                events: [['blur', () => {
                    this.setProps({
                        ...this.props, newPasswordAgain: passwordAgainInput.props.inputProps.value,
                    });
                }]],
                value: '',
            },
        });
        const kids = [
            oldPasswordInput,
            passwordInput,
            passwordAgainInput,
            new FormButton({
                text: 'Сохранить',
                id: 'submitPasswordButton',
            }),
        ];
        const templateProps: IWrapper = {
            template: `
            <form class='change-data-form'>
                <h2>Изменить пароль</h2>
                {{{oldPasswordInput}}}
                {{{newPasswordInput}}}
                {{{newPasswordAgainInput}}}
                <br/>
                {{{submitPasswordButton}}}
            </form>
            `,
            implementation: {
                oldPasswordInput: kids[0],
                newPasswordInput: kids[1],
                newPasswordAgainInput: kids[2],
                submitPasswordButton: kids[3],
            },
        };
        const props = {
            oldPassword: '',
            newPassword: '',
            newPasswordAgain: '',
        };
        super(templateProps, props, kids);
    }

    componentDidMount(): void {
        const { events = [] } = this.children[3].props;
        this.children[3].setProps({ events: [...events, ['click', this._save.bind(this)]] });
    }
}
