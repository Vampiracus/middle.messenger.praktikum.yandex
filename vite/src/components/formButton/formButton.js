import Handlebars from "handlebars";
import './formButton.css';


export default function formButton(text, id, callback) {

    if (id !== undefined) {
        addEventListener("DOMContentLoaded", () => {
            document.body.querySelector('#' + id).addEventListener('click', callback);
        });
    }

    let template = Handlebars.compile(`
        <button class='formButton' id={{id}}>{{text}}</button>
    `);
    return template({text, id});
}