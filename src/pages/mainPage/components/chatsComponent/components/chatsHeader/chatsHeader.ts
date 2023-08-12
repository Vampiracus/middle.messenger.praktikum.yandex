import Handlebars from 'handlebars';
import mainPageInput from '../../../mainPageInput/mainPageInput';
import './chatsHeader.css';

export default function chatsHeader() {
    const template = Handlebars.compile(`
        <div class='chatsHeader'>
            <a class='chatsHeader__profileLink'>Профиль <strong>></strong></a>
            <form class='chatsHeader__searchForm'>
                {{{mainPageInput}}}
            </form>
        </div>
    `);
    return template({
        mainPageInput: mainPageInput('Поиск'),
    });
}
