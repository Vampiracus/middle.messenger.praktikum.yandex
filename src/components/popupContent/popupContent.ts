import Handlebars from "handlebars";
import './popupContent.css';

export default function popupContent(content: string) {
    let template = Handlebars.compile(`
    <div class='popupContent popupContent_active'>
        <div class='popupContent__content'>
            {{{content}}}
        </div>
    </div>
    `);
    return template({content});
}
