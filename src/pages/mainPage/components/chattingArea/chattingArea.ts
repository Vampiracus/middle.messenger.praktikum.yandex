import './chattingArea.scss';
import MessageArea from './components/messageArea';
import Block from '../../../../utils/Block';
import SendArea from './components/sendArea';
import ChatHead from './components/chatHead';
import ChatsPlug from './components/chatsPlug';
import store from '../../../../utils/Store';

export default class ChattingArea extends Block<{ showingPlug: boolean }> {
    constructor() {
        super({ showingPlug: false }, 'div', [new ChatsPlug(), new SendArea(), new MessageArea(), new ChatHead()]);
        this.addClass('chatting-area');

        const showPlug = (chat: Chat) => {
            if (chat.id === -1) this.setProps({ showingPlug: true });
            else this.setProps({ showingPlug: false });
        };
        store.addOnSelectedChatChange(showPlug);
        showPlug(store.selectedChat);
    }

    render() {
        if (this.props.showingPlug) {
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
