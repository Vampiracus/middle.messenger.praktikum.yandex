import './arrowButton.scss';
import Handlebars from 'handlebars';

export default function sendButton(
    id: string,
    callback: EventListenerOrEventListenerObject | undefined
) {
    if (id !== undefined && callback !== undefined) {
        document.addEventListener('DOMContentLoaded', () => {
            const button: Element | null = document.body.querySelector(`#${id}`);
            if (button) button.addEventListener('click', callback);
        });
    }

    const template = Handlebars.compile(`
    <button class='arrow-button' id={{id}}>
        <img src='{{imgSrc}}' alt="send"/>
    </button>
    `);

    return template({
        imgSrc: '/arrow.png',
        id,
    });
}
