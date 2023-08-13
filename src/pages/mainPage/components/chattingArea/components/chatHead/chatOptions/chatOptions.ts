import Handlebars from 'handlebars';
import dropOutMenu from './dropOutMenu';
import './chatOptions.scss';

export default function chatOptions() {
    const template = Handlebars.compile(`
    <div class='chat-options'>
        ...
    </div>
    {{{dropOutMenu}}}
    `);
    return template({
        dropOutMenu: dropOutMenu(),
    });
}
