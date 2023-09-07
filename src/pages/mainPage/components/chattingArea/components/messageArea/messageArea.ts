import './messageArea.scss';
import MessageItem from './MessageItem';
import Block from '../../../../../../utils/Block';
import forHandlebars from '../../../../../../utils/otherScripts';
import store from '../../../../../../utils/Store';

interface IMessages {
    messages: Message[],
}

/*
    const messages: MessageItem[] = [];
    props.forEach(msg => { messages.push(new MessageItem(msg)); });
*/

export default class MessageArea extends Block<IMessages> {
    private _updateMessages() {
        store.curSocket.getOldMessages(0);
    }

    constructor() {
        super({ messages: [] }, 'main');
        this.addClass('message-area');
        store.addOnSocketInit(this._updateMessages);
    }

    render() {
        const [content, contentObj] = forHandlebars(this.children);
        return Block.compile(content, contentObj);
    }
}
