import Handlebars from 'handlebars';
import mainPageInput from '../../../mainPageInput/mainPageInput';
import './chatsHeader.scss';

export default function chatsHeader() {
    const template = Handlebars.compile(`
        <div class='chats-header'>
            <a class='chats-header__profileLink'>Профиль <strong>></strong></a>
            <form class='chats-header__searchForm'>
                {{{mainPageInput}}}
            </form>
        </div>
    `);
    return template({
        mainPageInput: mainPageInput('Поиск'),
    });
}
