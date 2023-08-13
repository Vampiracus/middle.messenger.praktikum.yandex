import './sendArea.scss';
import Handlebars from 'handlebars';
import mainPageInput from '../../../mainPageInput';
import arrowButton from '../../../../../../components/arrowButton';
import dropOutMenu from './dropOutMenuSend';

export default function sendArea() {
    function send() {
        alert('Отправка сообщения');
    }

    const template = Handlebars.compile(`
    <div class='send-area'>
        {{{dropOutMenu}}}
        <img src='{{imgSrc}}' alt="attach"/>
        <form class='send-area__form'>
            {{{myMessageInput}}}
            {{{sendButton}}}
        </form>
    </div>
    `);

    return template({
        dropOutMenu: dropOutMenu(),
        imgSrc: '/attach.png',
        myMessageInput: mainPageInput('Введите сообщение'),
        sendButton: arrowButton('sendMessageButton', send),
    });
}
