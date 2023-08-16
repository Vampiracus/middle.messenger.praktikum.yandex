import ActionModal from '../../../../components/actionModal';
import FormInput from '../../../../components/formInput';
import FormButton from '../../../../components/formButton';
import './addUserModal.scss';

export default class AddUserModal extends ActionModal {
    constructor() {
        const kids = [
            new FormInput({
                labelText: 'Логин',
                name: 'login',
                id: 'addUserInput',
                type: 'text',
                additionalProperies: 'required',
                value: '',
            }),
            new FormButton({
                text: 'Добавить',
                id: 'addUserButton',
                callback: e => { e.preventDefault(); this.setProps({ active: false }); },
            }),
        ];
        super('Добавить пользователя', 'add-user-form', `
        {{{loginInput}}}
        {{{addButton}}}
        `, {
            loginInput: kids[0], addButton: kids[1],
        }, kids);
    }
}
