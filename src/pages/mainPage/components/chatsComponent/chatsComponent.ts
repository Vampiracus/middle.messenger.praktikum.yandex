import './chatsComponent.scss';
import Block from '../../../../utils/Block';
import ChatsHeader from './components/chatsHeader';
import ChatsList from './components/chatsList';

// const chats: Array<Chat> = [
//     {
//         name: 'Андрей',
//         message: 'Изображение',
//         iSentLast: false,
//         lastMessageDate: '10:49',
//         toBeRead: 2,
//         isActive: false,
//     },
//     {
//         name: 'Киноклуб',
//         message: 'стикер',
//         iSentLast: true,
//         lastMessageDate: '12:00',
//         toBeRead: 0,
//         isActive: false,
//     },
//     {
//         name: 'Илья',
//         message: 'Друзья, у меня для вас особенный выпуск...',
//         iSentLast: false,
//         lastMessageDate: '15:12',
//         toBeRead: 4,
//         isActive: false,
//     },
//     {
//         name: 'Вадим',
//         message: 'Круто!',
//         lastMessageDate: 'Пт',
//         iSentLast: true,
//         toBeRead: 0,
//         isActive: true,
//     },
//     {
//         name: 'тет-а-теты',
//         message: 'И Human Interface Guidelines и Material...',
//         lastMessageDate: 'Ср',
//         iSentLast: false,
//         toBeRead: 0,
//         isActive: false,
//     },
//     {
//         name: '1, 2, 3',
//         message: 'Миллионы россиян ежедневно проводят...',
//         lastMessageDate: 'Пт',
//         iSentLast: false,
//         toBeRead: 0,
//         isActive: false,
//     },
//     {
//         name: '',
//         message: '',
//         lastMessageDate: '',
//         iSentLast: false,
//         toBeRead: 0,
//         isActive: false,
//     },
//     {
//         name: '',
//         message: '',
//         lastMessageDate: '',
//         iSentLast: false,
//         toBeRead: 0,
//         isActive: false,
//     },
//     {
//         name: '',
//         message: '',
//         lastMessageDate: '',
//         iSentLast: false,
//         toBeRead: 0,
//         isActive: false,
//     },
//     {
//         name: '',
//         message: '',
//         lastMessageDate: '',
//         iSentLast: false,
//         toBeRead: 0,
//         isActive: false,
//     },
//     {
//         name: '',
//         message: '',
//         lastMessageDate: '',
//         iSentLast: false,
//         toBeRead: 0,
//         isActive: false,
//     },
//     {
//         name: '',
//         message: '',
//         lastMessageDate: '',
//         iSentLast: false,
//         toBeRead: 0,
//         isActive: false,
//     },
//     {
//         name: '',
//         message: '',
//         lastMessageDate: '',
//         iSentLast: false,
//         toBeRead: 0,
//         isActive: false,
//     },
// ];

export default class ChatsComponent extends Block<{}> {
    constructor() {
        super({}, 'div', [new ChatsHeader(), new ChatsList()]);
        this.addClass('chats-component');
    }

    render() {
        return Block.compile(`
        {{{chatsHeader}}}
        {{{chats}}}
        `, {
            chatsHeader: this.children[0],
            chats: this.children[1],
        });
    }
}
