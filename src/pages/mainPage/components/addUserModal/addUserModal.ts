import ActionModal from '../../../../components/ActionModal';
import FormInput from '../../../../components/FormInput';
import FormButton from '../../../../components/FormButton';
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
        `, { loginInput: kids[0], addButton: kids[1] }, kids);
    }
}
