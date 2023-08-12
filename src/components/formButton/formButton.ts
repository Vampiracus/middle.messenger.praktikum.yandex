import Handlebars from 'handlebars';
import './formButton.css';

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
        <button class='formButton' id={{id}}>{{text}}</button>
    `);
    return template({ text, id, });
}
