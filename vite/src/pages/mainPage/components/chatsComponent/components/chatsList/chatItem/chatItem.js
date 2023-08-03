import emptyAvatar from '../../../../../../../components/emptyAvatar';
import './chatItem.css';
import Handlebars from "handlebars";
import toBeRead from './toBeRead';

export default function chatItem(chat) {
    let template = Handlebars.compile(`
        <div class='chatItem'>
            {{{avatar}}}
            <div class='chatItem__text'>
                <span class='chatItem__text__chatName'>{{chat.name}}</span>
                <div>{{me}} <span class='chatItem__text__message'>{{chat.message}}</span> </div>
            </div>
            <div class='chatItem__about'>
                {{chat.lastMessageDate}}
                {{{toBeRead}}}
                
            </div>
        </div>
    `)
    let me = (chat.iSentLast) ? 'Вы: ' : '';
    return template({
        avatar: emptyAvatar(),
        chat,
        me,
        toBeRead: toBeRead(chat.toBeRead),
    });
}