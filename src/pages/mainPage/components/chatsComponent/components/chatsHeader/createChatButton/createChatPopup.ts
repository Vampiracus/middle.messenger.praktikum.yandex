import ActionModal from '../../../../../../../components/actionModal';
import FormInput from '../../../../../../../components/formInput';
import FormButton from '../../../../../../../components/formButton';
import { validateChatName } from '../../../../utils/validation'; // НАПИСАТЬ

export default class DeleteUserModal extends ActionModal {
    constructor() {
        const kids = [
            new FormInput({
                labelText: 'Логин',
                validationFunction: validateLogin,
                inputProps: {
                    name: 'login',
                    id: 'deleteUserInput',
                    type: 'text',
                    additionalProperties: [['required', 'true']],
                    events: [],
                    value: '',
                },
            }),
            new FormButton({
                text: 'Удалить',
                id: 'deleteUserButton',
                events: [['click', e => { e.preventDefault(); this.setProps({ active: false }); }]],
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
