import Handlebars from 'handlebars';
import emptyAvatar from '../../../../../../../components/emptyAvatar';
import './chatItem.scss';
import toBeReadBubble from './toBeReadBubble';

export default function chatItem(chat: Chat) {
    const template = Handlebars.compile(`
        <div class='chat-item'>
            {{{avatar}}}
            <div class='chat-item__text'>
                <span class='chat-item__text__chatName'>{{chat.name}}</span>
                <div>{{me}} <span class='chat-item__text__message'>{{chat.message}}</span> </div>
            </div>
            <div class='chat-item__about'>
                {{chat.lastMessageDate}}
                {{{toBeRead}}}
                
            </div>
        </div>
    `);
    const me = (chat.iSentLast) ? 'Вы: ' : '';
    return template({
        avatar: emptyAvatar(),
        chat,
        me,
        toBeRead: toBeReadBubble(chat.toBeRead),
    });
}
