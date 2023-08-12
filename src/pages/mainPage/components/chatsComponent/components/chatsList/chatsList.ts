import Handlebars from 'handlebars';
import chatItem from './chatItem/chatItem';
import './chatsList.css';

export default function chatsList(chats: Array<Chat>) {
    const template = Handlebars.compile(`
        <div class='chatsList'>
            {{{chats}}}
        </div>
    `);
    return template({
        chats: chats.reduce((prev, cur) => prev + chatItem(cur), ''),
    });
}
