import message from './message';
import './messageArea.css';
import Handlebars from "handlebars";

export default function messageArea(messages) {

    let template = Handlebars.compile(`
    <div class='messageArea'>
        {{{messages}}}
    </div>
    `)
    return template({
        messages: messages.reduce((prev, cur) => prev + message(cur), '')
    });
}
