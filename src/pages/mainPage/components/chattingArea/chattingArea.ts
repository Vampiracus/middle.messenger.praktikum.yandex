import './chattingArea.scss';
import MessageArea, { MessageSentStatus } from './components/messageArea';
import Block from '../../../../utils/Block';
import SendArea from './components/sendArea';
import ChatHead from './components/chatHead';
import ChatsPlug from './components/chatsPlug';

const messages: Array<Message> = [
    {
        sentStatus: MessageSentStatus.RECEIVED,
        text: 'Круто!',
        time: '12:00',
    },
    {
        sentStatus: MessageSentStatus.SENT_TO_ME,
        imgLink: './../../../public/camera.png',
        time: '11:56',
    },
    {
        sentStatus: MessageSentStatus.SENT_TO_ME,
        text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\nХассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
        time: '11:56',
    },
];

const activeChat = { name: 'Вадим' };

export default class ChattingArea extends Block<{}> {
    constructor() {
        super({}, 'div', [new ChatsPlug(), new SendArea(), new MessageArea(messages), new ChatHead(activeChat)]);
        this.addClass('chatting-area');
    }

    render() {
        if (activeChat.name === '') {
            return Block.compile('{{{chatsPlug}}}', { chatsPlug: this.children[0] });
        }
        // flex-direction: column-reverse
        return Block.compile(`
        {{{sendArea}}}
        {{{messagesArea}}}
        {{{chatOptions}}}
        `, {
            sendArea: this.children[1],
            messagesArea: this.children[2],
            chatOptions: this.children[3],
        });
    }
}
