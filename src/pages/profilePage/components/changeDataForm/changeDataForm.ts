import FormInput from '../../../../components/FormInput';
import FormButton from '../../../../components/FormButton';
import ProfileFormWrapper from '../ProfileFormWrapper';
import Block from '../../../../utils/Block';

interface IWrapper {
    template: string,
    implementation: Record<string, Block | string | undefined>,
}

export default class ChangeDataForm extends ProfileFormWrapper<UserInfo> {
    constructor(me: UserInfo) {
        const kids = [
            new FormInput({
                labelText: 'Почта',
                name: 'email',
                id: 'profileEmailInput',
                type: 'text',
                additionalProperies: 'required',
                value: me.email,
            }),
            new FormInput({
                labelText: 'Логин',
                name: 'login',
                id: 'profileLoginInput',
                type: 'text',
                additionalProperies: 'required',
                value: me.login,
            }),
            new FormInput({
                labelText: 'Имя',
                name: 'first_name',
                id: 'profileNameInput',
                type: 'text',
                additionalProperies: 'required',
                value: me.firstName,
            }),
            new FormInput({
                labelText: 'Фамилия',
                name: 'second_name',
                id: 'profileSecondNameInput',
                type: 'text',
                additionalProperies: 'required',
                value: me.secondName,
            }),
            new FormInput({
                labelText: 'Имя в чате',
                name: 'display_name',
                id: 'profileChatNameInput',
                type: 'text',
                additionalProperies: 'required',
                value: me.name,
            }),
            new FormInput({
                labelText: 'Телефон',
                name: 'phone',
                id: 'profilePhoneInput',
                type: 'text',
                additionalProperies: 'required',
                value: me.phone,
            }),
            new FormButton({
                text: 'Сохранить',
                id: 'submitProfileDataButton',
                callback: () => { alert('Сохранение данных профиля'); },
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
}
