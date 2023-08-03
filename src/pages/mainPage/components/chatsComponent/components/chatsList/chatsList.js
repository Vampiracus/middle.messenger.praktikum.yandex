import chatItem from './chatItem/chatItem';
import './chatsList.css';
import Handlebars from "handlebars";

export default function chatsList(chats) {
    
    let template = Handlebars.compile(`
        <div class='chatsList'>
            {{{chats}}}
        </div>
    `)
    return template({
        chats: chats.reduce((prev, cur) => {
            return prev += chatItem(cur);
        }, '')
    });
}
