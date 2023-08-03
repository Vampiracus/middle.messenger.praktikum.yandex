import './arrowButton.css';
import imgSrc from '../../../public/arrow.png';
import Handlebars from 'handlebars';

export default function sendButton(id, callback) {

    if (id !== undefined) {
        addEventListener("DOMContentLoaded", () => {
            document.body.querySelector('#' + id).addEventListener('click', callback);
        });
    }

    let template = Handlebars.compile(`
    <button class='arrowButton' id={{id}}>
        <img src='{{imgSrc}}' alt="send"/>
    </button>
    `)

    return template({
        imgSrc,
        id
    })
}