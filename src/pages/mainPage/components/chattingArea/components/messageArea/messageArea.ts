import './messageArea.scss';
import MessageItem from './messageItem';
import Block from '../../../../../../utils/Block';
import forHandlebars from '../../../../../../utils/otherScripts';

export default class MessageArea extends Block<Array<Message>> {
    constructor(props: Message[]) {
        const messages: MessageItem[] = [];
        props.forEach(msg => { messages.push(new MessageItem(msg)); });
        super(props, 'main', messages);
        this.addClass('message-area');
    }

    render() {
        const [content, contentObj] = forHandlebars(this.children);
        return Block.compile(content, contentObj);
    }
}
