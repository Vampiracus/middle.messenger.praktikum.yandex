import Handlebars from 'handlebars';
import './popupContent.scss';

export default function popupContent(content: string) {
    const template = Handlebars.compile(`
    <div class='popup-content popup-content_active'>
        <div class='popup-content__content'>
            {{{content}}}
        </div>
    </div>
    `);
    return template({ content });
}
