import Handlebars from 'handlebars';
import chatsPlug from './components/chatsPlug';
import './chattingArea.css';
import sendArea from './components/sendArea';
import messageArea from './components/messageArea';
import chatHead from './components/chatHead';

export default function chattingArea(messages: Array<Message>) {
    if (messages === undefined) {
        return chatsPlug();
    }

    const template = Handlebars.compile(`
    <div class='chattingArea'>
        {{{sendArea}}}
        {{{messagesArea}}}
        {{{chatOptions}}}
    </div>
    `);
    return template({
        sendArea: sendArea(),
        messagesArea: messageArea(messages),
        chatOptions: chatHead({ name: 'Вадим', }),
    });
}
