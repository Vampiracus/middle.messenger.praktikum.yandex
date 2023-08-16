import ActionModal from '../../../../components/actionModal';
import FormInput from '../../../../components/formInput';
import FormButton from '../../../../components/formButton';
import './deleteUserModal.scss';

export default class DeleteUserModal extends ActionModal {
    constructor() {
        const kids = [
            new FormInput({
                labelText: 'Логин',
                name: 'login',
                id: 'deleteUserInput',
                type: 'text',
                additionalProperies: 'required',
                value: '',
            }),
            new FormButton({
                text: 'Удалить',
                id: 'deleteUserButton',
                callback:
                e => { e.preventDefault(); this.setProps({ active: false }); },
            }),
        ];
        super('Удалить пользователя', 'delete-user-modal', `
        {{{loginInput}}}
        {{{deleteButton}}}
        `, {
            loginInput: kids[0], deleteButton: kids[1],
        }, kids);
    }
}
