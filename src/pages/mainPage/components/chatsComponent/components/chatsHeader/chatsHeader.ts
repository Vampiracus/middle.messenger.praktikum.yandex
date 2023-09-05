import './chatsHeader.scss';
import MainPageInput from '../../../mainPageInput';
import Block from '../../../../../../utils/Block';
import MyA from '../../../../../../components/myA/myA';
import Router from '../../../../../../utils/Router';

const router = Router;

export default class ChatsHeader extends Block<{}> {
    constructor() {
        super({}, 'div', [
            new MainPageInput({
                placeholder: 'Поиск', name: 'chatname', value: '',
            }),
            new MyA({
                text: 'Профиль <strong>></strong>',
                classes: ['chats-header__profileLink'],
                events: [
                    ['click', () => { router.go('/settings'); }],
                ],
            }),
        ]);
        this.addClass('chats-header');
    }

    componentDidMount(): void {
        this.element.children[1].addEventListener('submit', e => { e.preventDefault(); });
    }

    render() {
        return Block.compile(`
        {{{AToProf}}}
        <form class='chats-header__searchForm'>
            {{{mainPageInput}}}
            {{{createChatButton}}}
        </form>
        `, {
            AToProf: this.children[1],
            mainPageInput: this.children[0],
        });
    }
}
