import Handlebars from 'handlebars';
import message from './message';
import './messageArea.css';

export default function messageArea(messages: Array<Message>) {
    const template = Handlebars.compile(`
    <main class='messageArea'>
        {{{messages}}}
    </main>
    `);
    return template({
        messages: messages.reduce((prev, cur) => prev + message(cur), ''),
    });
}
