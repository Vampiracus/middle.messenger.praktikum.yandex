import EmptyAvatar from '../../../../../../../components/emptyAvatar';
import './chatItem.scss';
import ToBeReadBubble from './toBeReadBubble';
import Block from '../../../../../../../utils/Block';

interface IChat {
    chat: Chat
}

export default class ChatItem extends Block<IChat> {
    constructor(chat: Chat) {
        super({ chat }, 'div', [new EmptyAvatar(), new ToBeReadBubble({ messagesNumber: chat.toBeRead })]);
        this.addClass('chat-item');
        if (chat.isActive) {
            this.addClass('chat-item_active');
        }
    }

    render() {
        const me = (this.props.chat.iSentLast) ? 'Вы: ' : '';
        return Block.compile(`
        {{{avatar}}}
        <div class='chat-item__text'>
            <span class='chat-item__text__chatName'>{{chatName}}</span>
            <div>{{me}} <span class='chat-item__text__message'>{{chatMessage}}</span> </div>
        </div>
        <div class='chat-item__about'>
            {{lastMessageDate}}
            {{{toBeRead}}}
            
        </div>
        `, {
            chatName: this.props.chat.name,
            me,
            chatMessage: this.props.chat.message,
            lastMessageDate: this.props.chat.lastMessageDate,
            avatar: this.children[0],
            toBeRead: this.children[1],
        });
    }
}
