import './chatOptions.css';
import Handlebars from "handlebars";

export default function chatOptions(chatInfo) {

    let template = Handlebars.compile(`
    <div class='chatOptions'>
        Вадим
    </div>
    `)
    return template({
    });
}