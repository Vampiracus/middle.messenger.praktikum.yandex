import chatsPlug from './components/chatsPlug';
import './chattingArea.css';
import Handlebars from "handlebars";
import sendArea from './components/sendArea/sendArea';
import messageArea from './components/messageArea';
import chatOptions from './components/chatOptions/chatOptions';

export default function chattingArea(messages) {
    if (messages === undefined){
        return chatsPlug();
    }

    let template = Handlebars.compile(`
    <div class='chattingArea'>
        {{{sendArea}}}
        {{{messagesArea}}}
        {{{chatOptions}}}
    </div>
    `)
    return template({
        sendArea: sendArea(),
        messagesArea: messageArea(messages),
        chatOptions: chatOptions({name: 'Вадим'})
    });
}