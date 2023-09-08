import AnAvatar from '../../../../../../../components/emptyAvatar';
import './chatItem.scss';
import ToBeReadBubble from './toBeReadBubble';
import Block from '../../../../../../../utils/Block';
import store from '../../../../../../../utils/Store';
import ChatsAPI from '../../../../../../../api/ChatsAPI';
import { timeToReadable } from '../../../../../../../utils/otherScripts';
import { avatarNormalized } from '../../../../../../../utils/fetchAPI';

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

        const onInit = () => {
            const onClosed = () => {
                store.offSocketInit(onInit);
                store.offSocketClosed(onClosed);
            };
            store.addOnSocketClosed(onClosed);

            store.curSocket?.addOnMessage(e => {
                let data = JSON.parse(e.data);
                if (data.type !== 'message') return;
                data = data as WSMessage;
                this.setProps({
                    chat: {
                        ...this.props.chat,
                        last_message: data,
                    },
                });
            });
        };
        store.addOnSocketInit(onInit);

        // Закрытие текущего сокета, если есть
        if (store.curSocket !== null) store.curSocket.close();
        ChatsAPI.getToken(this.props.chat.id)
            .then(token => {
                store.initSocket(this.props.chat, token);
            });
    }

    constructor(chat: Chat) {
        if (chat.last_message) {
            let msg = chat.last_message.content;
            if (msg.length > 20) {
                msg = `${msg.substring(0, 17)}...`;
            }
            chat.last_message.content = msg;
        }
        super({ chat }, 'div', [new AnAvatar(avatarNormalized(chat.avatar)), new ToBeReadBubble({ messagesNumber: chat.unread_count })]);
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
        message.time = timeToReadable(message.time);
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
