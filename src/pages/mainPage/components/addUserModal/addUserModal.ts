import ActionModal from '../../../../components/ActionModal';
import FormInput from '../../../../components/FormInput';
import FormButton from '../../../../components/FormButton';
import './addUserModal.scss';

export default class AddUserModal extends ActionModal {
    constructor() {
        super('Добавить пользователя', 'add-user-form', '', [
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
                callback: () => { alert('Добавление пользователя'); },
            }),
        ]);
    }
}
