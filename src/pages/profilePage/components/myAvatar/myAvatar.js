import './myAvatar.css';
import src from './../../../../../public/photoCamera.png';
import Handlebars from "handlebars";

export default function profilePage() {
    let template = Handlebars.compile(`
        <div class='myAvatar'>
            <img src='{{src}}' alt='мой аватар'>
            <div class='myAvatar__change'>
                Поменять аватар
            </div>
        </div>
    `)
    return template({
        src
    });
}
