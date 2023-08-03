import './actionModal.css';
import Handlebars from "handlebars";
import popupContent from '../popupContent';

export default function actionModal(name, content, formClass) {
    let template = Handlebars.compile(popupContent(`
        <form class='actionModal {{formClass}}'>
            <h3> {{name}} </h3>
            {{{content}}}
        </form>
    `))
    return template({
        name,
        content,
        formClass
    });
}
