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
            oldPassword: this.children[0].props.value,
            newPassword: this.children[1].props.value,
            newPasswordAgain: this.children[2].props.value,
        });
        const {
            newPassword, newPasswordAgain, oldPassword,
        } = this.props;
        console.log({
            newPassword, newPasswordAgain, oldPassword,
        });
        if (!validatePassword(oldPassword) || !validatePassword(newPassword)
        || newPassword !== newPasswordAgain) {
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
            name: 'oldPassword',
            id: 'oldPasswordInput',
            type: 'password',
            additionalProperies: 'required maxlength="40"',
            onBlur: () => {
                this.setProps({
                    ...this.props, newPassword: oldPasswordInput.props.value,
                });
                if (validatePassword(oldPasswordInput.props.value)) {
                    oldPasswordInput.setCorrect();
                } else {
                    oldPasswordInput.setIncorrect();
                }
            },
            value: '',
        });
        /* eslint-disable no-use-before-define */
        const passwordInput = new FormInput({
            labelText: 'Новый пароль',
            name: 'newPassword',
            id: 'newPasswordInput',
            type: 'password',
            additionalProperies: 'required maxlength="40"',
            onBlur: () => {
                this.setProps({
                    ...this.props, newPassword: passwordInput.props.value,
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
            labelText: 'Новый пароль (ещё раз)',
            name: 'newPasswordAgain',
            id: 'newPasswordAgainInput',
            type: 'password',
            additionalProperies: 'required maxlength="40"',
            onBlur: () => {
                this.setProps({
                    ...this.props, newPasswordAgain: passwordAgainInput.props.value,
                });
                if (passwordInput.props.value === passwordAgainInput.props.value) {
                    passwordAgainInput.setCorrect();
                } else {
                    passwordAgainInput.setIncorrect();
                }
            },
            value: '',
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
        this.children[3].element.addEventListener('click', this._save.bind(this));
    }
}
