import './chatsComponent.css';
import Handlebars from "handlebars";
import chatsHeader from './components/chatsHeader/chatsHeader';
import chatsList from './components/chatsList/chatsList';

const chats = [
    {
        name: 'Андрей',
        message: 'Изображение',
        iSentLast: false,
        lastMessageDate: '10:49',
        toBeRead: 2
    },
    {
        name: 'Киноклуб',
        message: 'стикер',
        iSentLast: true,
        lastMessageDate: '12:00',
        toBeRead: 0
    },
    {
        name: 'Илья',
        message: 'Друзья, у меня для вас особенный выпуск...',
        iSentLast: false,
        lastMessageDate: '15:12',
        toBeRead: 4
    },
    {
        name: 'Вадим',
        message: 'Круто!',
        lastMessageDate: 'Пт',
        iSentLast: true,
        toBeRead: 0
    },
    {
        name: 'тет-а-теты',
        message: 'И Human Interface Guidelines и Material...',
        lastMessageDate: 'Ср',
        iSentLast: false,
        toBeRead: 0
    },
    {
        name: '1, 2, 3',
        message: 'Миллионы россиян ежедневно проводят...',
        lastMessageDate: 'Пт',
        iSentLast: false,
        toBeRead: 0
    },
    {
        name: '',
        message: '',
        lastMessageDate: '',
        iSentLast: false,
        toBeRead: 0
    },
    {
        name: '',
        message: '',
        lastMessageDate: '',
        iSentLast: false,
        toBeRead: 0
    },
    {
        name: '',
        message: '',
        lastMessageDate: '',
        iSentLast: false,
        toBeRead: 0
    },
    {
        name: '',
        message: '',
        lastMessageDate: '',
        iSentLast: false,
        toBeRead: 0
    },
    {
        name: '',
        message: '',
        lastMessageDate: '',
        iSentLast: false,
        toBeRead: 0
    },
    {
        name: '',
        message: '',
        lastMessageDate: '',
        iSentLast: false,
        toBeRead: 0
    },
    {
        name: '',
        message: '',
        lastMessageDate: '',
        iSentLast: false,
        toBeRead: 0
    }
]

export default function chatsComponent() {
    let template = Handlebars.compile(`
        <div class='chatsComponent'>
            {{{chatsHeader}}}
            {{{chats}}}
        </div>
    `)
    return template({
        chatsHeader: chatsHeader(),
        chats: chatsList(chats),
    });
}