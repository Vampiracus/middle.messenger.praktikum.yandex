import ProfileFormWrapper from '../ProfileFormWrapper';
import Block from '../../../../utils/Block';
import FormInput from '../../../../components/FormInput';
import FormButton from '../../../../components/FormButton';

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
    constructor() {
        const kids = [
            new FormInput({
                labelText: 'Старый пароль',
                name: 'oldPassword',
                id: 'oldPasswordInput',
                type: 'password',
                additionalProperies: 'required',
                value: '',
            }),
            new FormInput({
                labelText: 'Новый пароль',
                name: 'newPassword',
                id: 'newPasswordInput',
                type: 'password',
                additionalProperies: 'required',
                value: '',
            }),
            new FormInput({
                labelText: 'Новый пароль (ещё раз)',
                name: 'newPasswordAgain',
                id: 'newPasswordAgainInput',
                type: 'password',
                additionalProperies: 'required',
                value: '',
            }),
            new FormButton({
                text: 'Сохранить',
                id: 'submitPasswordButton',
                callback: () => { alert('Сохранение данных о пароле'); },
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
}
