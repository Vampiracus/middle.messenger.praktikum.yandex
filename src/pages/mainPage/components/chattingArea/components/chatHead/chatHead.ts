import './chatHead.scss';
import EmptyAvatar from '../../../../../../components/emptyAvatar';
import Block from '../../../../../../utils/Block';
import ChatOptions from './chatOptions';

interface IChatName {
    name: string,
}

export default class ChatHead extends Block<IChatName> {
    constructor(props: IChatName) {
        super(props, 'div', [new EmptyAvatar(), new ChatOptions()]);
        this.addClass('chat-head');
    }

    render() {
        return Block.compile(`
        <div class='chat-head__name'>
            {{{avatar}}}
            {{{name}}}
        </div>
        {{{chatOptions}}}
        `, {
            name: this.props.name,
            avatar: this.children[0],
            chatOptions: this.children[1],
        });
    }
}
