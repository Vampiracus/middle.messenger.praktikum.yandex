import './arrowButton.css';
import Handlebars from 'handlebars';

export default function sendButton(id: string, callback: EventListenerOrEventListenerObject | undefined) {

    if (id !== undefined && callback !== undefined) {
        addEventListener("DOMContentLoaded", () => {
            let button: Element | null = document.body.querySelector('#' + id);
            if (button)
                button.addEventListener('click', callback);
        });
    }

    let template = Handlebars.compile(`
    <button class='arrowButton' id={{id}}>
        <img src='{{imgSrc}}' alt="send"/>
    </button>
    `)

    return template({
        imgSrc: '/arrow.png',
        id
    })
}
