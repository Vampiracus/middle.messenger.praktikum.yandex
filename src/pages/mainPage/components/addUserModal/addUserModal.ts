import ActionModal from '../../../../components/actionModal';
import FormInput from '../../../../components/formInput';
import FormButton from '../../../../components/formButton';
import './addUserModal.scss';
import { validateLogin } from '../../../../utils/validation';

export default class AddUserModal extends ActionModal {
    constructor() {
        const kids = [
            new FormInput({
                labelText: 'Логин',
                validationFunction: validateLogin,
                inputProps: {
                    name: 'login',
                    id: 'addUserInput',
                    type: 'text',
                    additionalProperties: [['required', 'true']],
                    events: [],
                    value: '',
                },
            }),
            new FormButton({
                text: 'Добавить',
                id: 'addUserButton',
                events: [['click', e => { e.preventDefault(); this.setProps({ active: false }); }]],
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
