import './chatsHeader.scss';
import MainPageInput from '../../../MainPageInput';
import Block from '../../../../../../utils/Block';

export default class ChatsHeader extends Block<{}> {
    constructor() {
        super({}, 'div', [new MainPageInput({
            placeholder: 'Поиск', name: 'chatname', value: '',
        })]);
        this.addClass('chats-header');
    }

    componentDidMount(): void {
        this.element.children[1].addEventListener('submit', e => { e.preventDefault(); });
    }

    render() {
        return Block.compile(`
        <a class='chats-header__profileLink'>Профиль <strong>></strong></a>
        <form class='chats-header__searchForm'>
            {{{mainPageInput}}}
        </form>
        `, { mainPageInput: this.children[0] });
    }
}
