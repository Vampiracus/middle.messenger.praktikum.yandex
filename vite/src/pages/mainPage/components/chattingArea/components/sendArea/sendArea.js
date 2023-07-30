import './sendArea.css';
import Handlebars from "handlebars";
import imgSrc from './../../../../../../../public/attach.png';
import mainPageInput from './../../../mainPageInput';
import sendButton from './sendButton/sendButton';

export default function sendArea() {

    function send() {
        alert('Отправка сообщения');
    }

    let template = Handlebars.compile(`
    <div class='sendArea'>
        <img src='{{imgSrc}}' alt="attach"/>
        <form class='sendArea__form'>
            {{{myMessageInput}}}
            {{{sendButton}}}
        </form>
    </div>
    `)

    return template({
        imgSrc,
        myMessageInput: mainPageInput(),
        sendButton: sendButton('sendMessageButton', send)
    })
}