import './chatsComponent.scss';
import Block from '../../../../utils/Block';
import ChatsHeader from './components/chatsHeader';
import ChatsList from './components/chatsList';

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
