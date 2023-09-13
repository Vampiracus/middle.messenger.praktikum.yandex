import ActionModal from '../../../../../../../../../components/actionModal';
import FormInput from '../../../../../../../../../components/formInput';
import FormButton from '../../../../../../../../../components/formButton';
import './addUserModal.scss';
import { validateLogin } from '../../../../../../../../../utils/validation';
import ChatsAPI from '../../../../../../../../../api/ChatsAPI';
import store from '../../../../../../../../../utils/Store';

export default class AddUserModal extends ActionModal {
    private _addUser(e: Event) {
        e.preventDefault();
        ChatsAPI.addUser(
            (this.children[0] as FormInput).props.inputProps.value,
            store.selectedChat.id
        )
            .then(res => {
                if (res !== 'OK') (this.children[0] as FormInput).setIncorrect();
                else this.setProps({ active: false });
            })
            .catch(err => { console.log(err); });
    }

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
            }),
        ];
        super('Добавить пользователя', 'add-user-form', `
        {{{loginInput}}}
        {{{addButton}}}
        `, {
            loginInput: kids[0], addButton: kids[1],
        }, kids);

        const { events = [] } = this.children[1].props;
        this.children[1].setProps({
            ...this.children[1].props,
            events: [
                ...events,
                ['click', this._addUser.bind(this)],
            ],
        });
    }
}
