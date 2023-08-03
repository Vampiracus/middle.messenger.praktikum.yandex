import './sendArea.css';
import Handlebars from "handlebars";
import imgSrc from './../../../../../../../public/attach.png';
import mainPageInput from './../../../mainPageInput';
import arrowButton from './../../../../../../components/arrowButton';
import dropOutMenu from './dropOutMenuSend';

export default function sendArea() {

    function send() {
        alert('Отправка сообщения');
    }

    let template = Handlebars.compile(`
    <div class='sendArea'>
        {{{dropOutMenu}}}
        <img src='{{imgSrc}}' alt="attach"/>
        <form class='sendArea__form'>
            {{{myMessageInput}}}
            {{{sendButton}}}
        </form>
    </div>
    `)

    return template({
        dropOutMenu: dropOutMenu(),
        imgSrc,
        myMessageInput: mainPageInput(),
        sendButton: arrowButton('sendMessageButton', send)
    })
}