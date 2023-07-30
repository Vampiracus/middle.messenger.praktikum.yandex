import './mainPage.css';
import Handlebars from "handlebars";
import chatsComponent from "./components/chatsComponent";

export default function mainPage() {
    let template = Handlebars.compile(`
        <div class='mainPage'>
            {{{chatsComponent}}}
            {{{chat}}}
        </div>
    `)
    return template({
        chatsComponent: chatsComponent(),
        chat: '<div>Здесь будет чат</div>'
    });
}