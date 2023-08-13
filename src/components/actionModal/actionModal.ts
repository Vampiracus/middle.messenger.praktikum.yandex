import './actionModal.scss';
import Handlebars from 'handlebars';
import popupContent from '../popupContent';

export default function actionModal(name: string, content: string, formClass: string) {
    const template = Handlebars.compile(popupContent(`
        <form class='action-modal {{formClass}}'>
            <h3> {{name}} </h3>
            {{{content}}}
        </form>
    `));
    return template({
        name,
        content,
        formClass,
    });
}
