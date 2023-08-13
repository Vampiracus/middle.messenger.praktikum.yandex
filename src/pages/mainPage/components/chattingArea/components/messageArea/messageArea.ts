import Handlebars from 'handlebars';
import message from './message';
import './messageArea.scss';

export default function messageArea(messages: Array<Message>) {
    const template = Handlebars.compile(`
    <main class='message-area'>
        {{{messages}}}
    </main>
    `);
    return template({
        messages: messages.reduce((prev, cur) => prev + message(cur), ''),
    });
}
