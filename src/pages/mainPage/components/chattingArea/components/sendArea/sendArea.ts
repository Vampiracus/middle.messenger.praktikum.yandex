import ArrowButton from '../../../../../../components/ArrowButton';
import Block from '../../../../../../utils/Block';
import MainPageInput from '../../../MainPageInput/MainPageInput';
import DropOutMenuSend from './DropOutMenuSend/DropOutMenuSend';
import './sendArea.scss';

function send() {
    alert('Отправка сообщения');
}

export default class SendArea extends Block {
    constructor() {
        super({}, 'div', [
            new DropOutMenuSend(),
            new MainPageInput({ placeholder: 'Введите сообщение', name: 'message' }),
            new ArrowButton({ id: 'sendMessageButton', callback: send }),
        ]);
        this.addClass('send-area');
    }

    render() {
        return Block.compile(`
        {{{dropOutMenu}}}
        <img src='{{imgSrc}}' alt="attach"/>
        <form class='send-area__form'>
            {{{myMessageInput}}}
            {{{sendButton}}}
        </form>
        `, {
            dropOutMenu: this.children[0],
            imgSrc: '/attach.png',
            myMessageInput: this.children[1],
            sendButton: this.children[2],
        });
    }
}
