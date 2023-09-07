import './chatHead.scss';
import EmptyAvatar from '../../../../../../components/emptyAvatar';
import Block from '../../../../../../utils/Block';
import ChatOptions from './chatOptions';
import store from '../../../../../../utils/Store';

export default class ChatHead extends Block<{ title: string }> {
    constructor() {
        super({ title: '' }, 'div', [new EmptyAvatar(), new ChatOptions()]);
        this.addClass('chat-head');
        store.addOnSelectedChatChange(() => {
            this.setProps({ title: store.selectedChat.title });
        });
    }

    render() {
        return Block.compile(`
        <div class='chat-head__name'>
            {{{avatar}}}
            {{{name}}}
        </div>
        {{{chatOptions}}}
        `, {
            name: this.props.title,
            avatar: this.children[0],
            chatOptions: this.children[1],
        });
    }
}
