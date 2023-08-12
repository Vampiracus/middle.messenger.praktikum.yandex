import Handlebars from 'handlebars';
import dropOutMenu from './dropOutMenu';
import './chatOptions.css';

export default function chatOptions() {
    const template = Handlebars.compile(`
    <div class='chatOptions'>
        ...
    </div>
    {{{dropOutMenu}}}
    `);
    return template({
        dropOutMenu: dropOutMenu(),
    });
}
