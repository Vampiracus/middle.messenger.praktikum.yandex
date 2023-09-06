import ActionModal from '../../../../../../../../../components/actionModal';
import FormInput from '../../../../../../../../../components/formInput';
import FormButton from '../../../../../../../../../components/formButton';
import './deleteUserModal.scss';
import { validateLogin } from '../../../../../../../../../utils/validation';
import ChatsAPI from '../../../../../../../../../api/ChatsAPI';
import store from '../../../../../../../../../utils/Store';

export default class DeleteUserModal extends ActionModal {
    private _deleteUser(e: Event) {
        e.preventDefault();
        ChatsAPI.deleteUser(
            (this.children[0] as FormInput).props.inputProps.value,
            store.selectedChat.id
        )
            .then(res => {
                if (res !== 'OK') (this.children[0] as FormInput).setIncorrect();
                else this.setProps({ active: false });
            });
    }

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
            }),
        ];
        super('Удалить пользователя', 'delete-user-modal', `
        {{{loginInput}}}
        {{{deleteButton}}}
        `, {
            loginInput: kids[0], deleteButton: kids[1],
        }, kids);

        const { events = [] } = this.children[1].props;
        this.children[1].setProps({
            ...this.children[1].props,
            events: [
                ...events,
                ['click', this._deleteUser.bind(this)],
            ],
        });
    }
}
