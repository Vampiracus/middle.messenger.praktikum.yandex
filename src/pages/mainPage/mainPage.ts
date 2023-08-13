import './mainPage.scss';
import Handlebars from 'handlebars';
import chatsComponent from './components/chatsComponent';
import chattingArea, { MessageSentStatus } from './components/chattingArea';
// import addUserModal from './components/addUserModal';
// import deleteUserModal from './components/deleteUserModal';
// import deleteChatModal from './components/deleteChatModal';

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

export default function mainPage() {
    const template = Handlebars.compile(`
        {{{addUserModal}}}
        {{{deleteUserModal}}}
        {{{deleteChatModal}}}
        <div class='main-page'>
            {{{chatsComponent}}}
            {{{chat}}}
        </div>
    `);
    return template({
        chatsComponent: chatsComponent(),
        chat: chattingArea(messages),
        // addUserModal: addUserModal(),
        // deleteUserModal: deleteUserModal(),
        // deleteChatModal: deleteChatModal(),
    });
}