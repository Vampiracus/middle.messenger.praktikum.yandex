import './chatsHeader.scss';
import MainPageInput from '../../../mainPageInput';
import Block from '../../../../../../utils/Block';
import MyA from '../../../../../../components/myA/myA';
import Router from '../../../../../../utils/Router';
import CreateChatPopup from './createChatPopup/createChatPopup';

const router = Router;

export default class ChatsHeader extends Block<{}> {
    constructor() {
        super({}, 'div', [
            new MainPageInput({
                placeholder: 'Поиск', name: 'chatname', value: '',
            }),
            new MyA({
                text: 'Профиль <strong>></strong>',
                classes: ['chats-header_link'],
                events: [
                    ['click', () => { router.go('/settings'); }],
                ],
            }),
            new MyA({
                text: 'Создать чат',
                classes: ['chats-header_link'],
                events: [
                    ['click', () => { this.children[3].setProps({ active: true }); }],
                ],
            }),
            new CreateChatPopup(),
        ]);
        this.addClass('chats-header');
    }

    componentDidMount(): void {
        this.element.children[1].addEventListener('submit', e => { e.preventDefault(); });
    }

    render() {
        return Block.compile(`
        {{{createChatPopup}}}
        {{{AToProf}}}
        <form class='chats-header__searchForm'>
            {{{mainPageInput}}}
            {{{createChatA}}}
        </form>
        `, {
            AToProf: this.children[1],
            mainPageInput: this.children[0],
            createChatA: this.children[2],
            createChatPopup: this.children[3],
        });
    }
}
