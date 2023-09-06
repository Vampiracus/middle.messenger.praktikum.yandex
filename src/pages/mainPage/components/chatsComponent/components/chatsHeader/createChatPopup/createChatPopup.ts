import ActionModal from '../../../../../../../components/actionModal';
import FormInput from '../../../../../../../components/formInput';
import FormButton from '../../../../../../../components/formButton';
import { validateChatName } from '../../../../../../../utils/validation';
import ChatsAPI from '../../../../../../../api/ChatsAPI';
import store from '../../../../../../../utils/Store';

export default class CreateChatPopup extends ActionModal {
    private _createChat(e: Event) {
        e.preventDefault();

        const validated = (this.children[0] as FormInput).validate();
        if (!validated) {
            return;
        }

        ChatsAPI.create({ title: this.children[0].props.inputProps.value })
            .then(xhr => JSON.parse(xhr.response))
            .then(() => {
                this.setProps({ active: false });
                ChatsAPI.read()
                    .then(xhr => JSON.parse(xhr.response))
                    .then(res => {
                        store.chats = res;
                    });
            });
    }

    constructor() {
        const kids = [
            new FormInput({
                labelText: 'Имя чата',
                validationFunction: validateChatName,
                inputProps: {
                    name: 'title',
                    id: 'chatTitleInput',
                    type: 'text',
                    additionalProperties: [['required', 'true']],
                    events: [],
                    value: '',
                },
            }),
            new FormButton({
                text: 'Добавить',
                id: 'setChatTitleButton',
            }),
        ];
        super('Добавить чат', 'create-chat-popup', `
        {{{titleInput}}}
        {{{createButton}}}
        `, {
            titleInput: kids[0],
            createButton: kids[1],
        }, kids);

        let events = [];
        if (this.children[1].props.events) events = this.children[1].props.events;
        this.children[1].setProps({
            ...this.children[1].props,
            events: [
                ...events,
                ['click', this._createChat.bind(this)],
            ],
        });
    }

    componentDidMount(): void {
    }
}
