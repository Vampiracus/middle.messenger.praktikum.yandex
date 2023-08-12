import message from './message';
import './messageArea.css';
import Handlebars from "handlebars";

export default function messageArea(messages: Array<Message>) {

    let template = Handlebars.compile(`
    <main class='messageArea'>
        {{{messages}}}
    </main>
    `)
    return template({
        messages: messages.reduce((prev, cur) => prev + message(cur), '')
    });
}
