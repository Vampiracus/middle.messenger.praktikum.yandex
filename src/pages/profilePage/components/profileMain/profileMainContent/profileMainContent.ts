import './profileMainContent.scss';
import Handlebars from 'handlebars';

export default function profileMainContent(me: UserInfo) {
    const template = Handlebars.compile(`
    <div class='profile-main-content'>
        <span>{{me.name}}</span>
        <br/>
        <br/>
        <br/>
        <br/>
        <a>Изменить данные</a>
        <a>Изменить пароль</a>
        <a style='color: red; text-shadow: 1px 1px black'>Выйти из аккаунта</a>
    </div>
    `);
    return template({
        me,
    });
}
