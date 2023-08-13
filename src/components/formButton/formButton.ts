import Handlebars from 'handlebars';
import './formButton.scss';

export default function formButton(
    text: string | undefined,
    id: string | undefined,
    callback: EventListenerOrEventListenerObject | undefined
) {
    if (id !== undefined && callback !== undefined) {
        document.addEventListener('DOMContentLoaded', () => {
            const button: Element | null = document.body.querySelector(`#${id}`);
            if (button) {
                button.addEventListener('click', callback);
            }
        });
    }

    const template = Handlebars.compile(`
        <button class='form-button' id={{id}}>{{text}}</button>
    `);
    return template({ text, id });
}
