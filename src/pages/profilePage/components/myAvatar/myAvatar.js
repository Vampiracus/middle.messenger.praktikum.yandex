import './myAvatar.css';
import src from './../../../../../public/photoCamera.png';
import Handlebars from "handlebars";

export default function profilePage() {
    let template = Handlebars.compile(`
        <div class='myAvatar'>
            <img src='{{src}}' alt='мой аватар'>
            <input type='file' name='avatar' id='avatarInput'>
            <label for='avatarInput' class='myAvatar__change'>
                Поменять аватар
            </label>
        </div>
    `)
    return template({
        src
    });
}
