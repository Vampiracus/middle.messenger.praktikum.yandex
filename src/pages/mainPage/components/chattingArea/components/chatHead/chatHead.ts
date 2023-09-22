import './chatHead.scss';
import Block from '../../../../../../utils/Block';
import ChatOptions from './chatOptions';
import store from '../../../../../../utils/Store';
import ChatAvatar from '../../../../../../components/chatAvatar/chatAvatar';

export default class ChatHead extends Block<{ title: string }> {
    constructor() {
        super({ title: '' }, 'div', [
            new ChatAvatar(true, store.selectedChat),
            new ChatOptions(),
        ]);
        this.addClass('chat-head');
        store.addOnSelectedChatChange(() => {
            this.setProps({ title: store.selectedChat.title });
            this.children[0].setProps({ chat: store.selectedChat });
        });
    }

    render() {
        return Block.compile(`
        <div class='chat-head__name'>
            {{{avatar}}}
            {{name}}
        </div>
        {{{chatOptions}}}
        `, {
            name: this.props.title,
            avatar: this.children[0],
            chatOptions: this.children[1],
        });
    }
}
