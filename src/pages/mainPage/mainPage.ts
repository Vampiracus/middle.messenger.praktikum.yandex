import './mainPage.scss';
import ChatsComponent from './components/chatsComponent';
import ChattingArea from './components/chattingArea';
import Block from '../../utils/Block';

export default class MainPage extends Block<{}> {
    constructor() {
        super({}, 'div', [new ChatsComponent(), new ChattingArea()]);
        this.addClass('main-page');
    }

    render() {
        return Block.compile(`
        {{{chatsComponent}}}
        {{{chat}}}
        `, {
            chatsComponent: this.children[0],
            chat: this.children[1],
        });
    }
}
