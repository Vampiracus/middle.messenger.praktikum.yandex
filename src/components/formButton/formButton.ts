import Handlebars from "handlebars";
import './formButton.css';


export default function formButton(
    text: string | undefined, 
    id: string | undefined,
    callback: EventListenerOrEventListenerObject | undefined
    ){

    if (id !== undefined && callback !== undefined) {
        addEventListener("DOMContentLoaded", () => {
            let button: Element | null = document.body.querySelector('#' + id);
            if (button) {
                button.addEventListener('click', callback);
            }
        });
    }

    let template = Handlebars.compile(`
        <button class='formButton' id={{id}}>{{text}}</button>
    `);
    return template({text, id});
}
