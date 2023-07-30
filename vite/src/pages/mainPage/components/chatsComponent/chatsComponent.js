import './chatsComponent.css';
import Handlebars from "handlebars";

export default function chatsComponent() {
    let template = Handlebars.compile(`
        <div class='chatsComponent'>
            {{{chatsHeader}}}
            {{{chats}}}
        </div>
    `)
    return template({
        chatsHeader: 'Профиль. Поиск',
        chats: 'Чаты'
    });
}