import './myAvatar.css';
import Handlebars from "handlebars";

export default function profilePage() {
    let template = Handlebars.compile(`
        <div class='myAvatar'>1
        </div>
    `)
    return template({
    });
}