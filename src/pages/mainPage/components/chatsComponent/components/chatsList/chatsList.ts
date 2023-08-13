import Handlebars from 'handlebars';
import chatItem from './chatItem/chatItem';
import './chatsList.scss';

export default function chatsList(chats: Array<Chat>) {
    const template = Handlebars.compile(`
        <div class='chats-list'>
            {{{chats}}}
        </div>
    `);
    return template({
        chats: chats.reduce((prev, cur) => prev + chatItem(cur), ''),
    });
}
