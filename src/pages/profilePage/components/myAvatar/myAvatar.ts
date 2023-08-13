import './myAvatar.scss';
import Handlebars from 'handlebars';

export default function profilePage() {
    const template = Handlebars.compile(`
        <div class='my-avatar'>
            <img src='{{src}}' alt='мой аватар'>
            <input type='file' name='avatar' id='avatarInput'>
            <label for='avatarInput' class='my-avatar__change'>
                Поменять аватар
            </label>
        </div>
    `);
    return template({
        src: '/photoCamera.png',
    });
}
