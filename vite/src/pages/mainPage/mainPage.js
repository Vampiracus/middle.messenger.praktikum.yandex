import './mainPage.css';
import Handlebars from "handlebars";
import chatsComponent from "./components/chatsComponent";
import chattingArea from './components/chattingArea/chattingArea';
import addUserModal from './components/addUserModal';
import popupContent from './../.../../../components/popupContent';
import deleteUserModal from './components/deleteUserModal';
import deleteChatModal from './components/deleteChatModal';

const messages = [
    {
        iSent: true,
        sentStatus: true,
        text: 'Круто!',
        time: '12:00',
    },
    {
        iSent: false,
        imgLink: './../../../public/camera.png',
        time: '11:56',
    },
    {
        iSent: false,
        text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\nХассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
        time: '11:56',
    },
]

export default function mainPage() {
    let template = Handlebars.compile(`
        {{{addUserModal}}}
        {{{deleteUserModal}}}
        {{{deleteChatModal}}}
        <div class='mainPage'>
            {{{chatsComponent}}}
            {{{chat}}}
        </div>
    `)
    return template({
        chatsComponent: chatsComponent(),
        chat: chattingArea(messages),
        //addUserModal: addUserModal(),
        //deleteUserModal: deleteUserModal(),
        deleteChatModal: deleteChatModal(),
    });
}