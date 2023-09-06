import EmptyAvatar from '../../../../../../../components/emptyAvatar';
import './chatItem.scss';
import ToBeReadBubble from './toBeReadBubble';
import Block from '../../../../../../../utils/Block';
import store from '../../../../../../../utils/Store';

interface IChat {
    chat: Chat,
    events?: Array<[string, EventListener]>,
}

export default class ChatItem extends Block<IChat> {
    private _setActive() {
        store.selectedChat = this.props.chat;
        this.addClass('chat-item__active');
        const removeCls = () => {
            this.removeClass('chat-item__active');
            store.OffSelectedChatChange(removeCls);
        };
        store.addOnSelectedChatChange(removeCls);
    }

    constructor(chat: Chat) {
        super({ chat }, 'div', [new EmptyAvatar(), new ToBeReadBubble({ messagesNumber: chat.unread_count })]);
        this.addClass('chat-item');

        const { events = [] } = this.props;
        this.setProps({
            ...this.props,
            events: [
                ...events,
                ['click', this._setActive.bind(this)],
            ],
        });
    }

    render() {
        const message: Message = this.props.chat.last_message ? this.props.chat.last_message : {
            user: {
                id: -1,
                first_name: '',
                second_name: '',
                display_name: '',
                login: '',
                phone: '',
                email: '',
                avatar: '',
            },
            time: '',
            content: '',
        };
        return Block.compile(`
        {{{avatar}}}
        <div class='chat-item__text'>
            <span class='chat-item__text__chatName'>{{chatName}}</span>
            <div><span class='chat-item__text__message'>{{chatMessage}}</span> </div>
        </div>
        <div class='chat-item__about'>
            {{lastMessageDate}}
            {{{toBeRead}}}
        </div>
        `, {
            chatName: this.props.chat.title,
            chatMessage: message.content,
            lastMessageDate: message.time,
            avatar: this.children[0],
            toBeRead: this.children[1],
        });
    }
}
