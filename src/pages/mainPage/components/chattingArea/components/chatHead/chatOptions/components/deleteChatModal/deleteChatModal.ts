import './deleteChatModal.scss';
import ActionModal from '../../../../../../../../../components/actionModal';
import FormButton from '../../../../../../../../../components/formButton';
import ChatsAPI from '../../../../../../../../../api/ChatsAPI';
import store, { emptyChat } from '../../../../../../../../../utils/Store';

export default class DeleteChatModal extends ActionModal {
    private _deleteChat(e: Event) {
        e.preventDefault();
        ChatsAPI.delete(store.selectedChat.id)
            .then(res => {
                if (!res.reason) {
                    this.setProps({ active: false });
                    ChatsAPI.putChatsIntoApplication();
                    store.selectedChat = emptyChat;
                }
            })
            .catch(err => { console.log(err); });
    }

    constructor() {
        const kids = [
            new FormButton({
                text: 'Отменить',
                id: 'deleteChatCancelButton',
                events: [['click', e => { e.preventDefault(); this.setProps({ active: false }); }]],
            }),
            new FormButton({
                text: 'Удалить',
                id: 'delete-chat-button',
            }),
        ];
        super('Удалить чат', 'delete-chat-modal', `
        <span>Это действие нельзя отменить</span>
        {{{cancelButton}}}
        {{{deleteButton}}}
        `, {
            cancelButton: kids[0], deleteButton: kids[1],
        }, kids);

        const { events = [] } = this.props;
        this.children[1].setProps({
            events: [
                ...events,
                ['click', this._deleteChat.bind(this)],
            ],
        });
    }
}
