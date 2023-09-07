import './messageArea.scss';
import MessageItem from './MessageItem';
import Block from '../../../../../../utils/Block';
import forHandlebars from '../../../../../../utils/otherScripts';
import store from '../../../../../../utils/Store';

interface IMessages {
    messages: WSMessage[],
}

export default class MessageArea extends Block<IMessages> {
    private _askForMessages() {
        if (!store.curSocket) return;
        store.curSocket.getOldMessages(0);
        store.curSocket.addOnMessage(this._updateMessages.bind(this));
    }

    private _updateMessages_array(data: WSMessage[]) {
        const messages: MessageItem[] = [];
        data.forEach((msg: WSMessage) => { messages.push(new MessageItem(msg)); });
        this.children = [...this.children, ...messages];
        this.setProps({
            messages: [
                ...this.props.messages,
                ...data,
            ],
        });
    }

    private _updateMessages_object(data: WSMessage) {
        this.children = [
            new MessageItem(data),
            ...this.children,
        ];
        this.setProps({
            messages: [
                data,
                ...this.props.messages,
            ],
        });
    }

    private _updateMessages(e: MessageEvent) {
        let data = JSON.parse(e.data);
        if (data.type === 'pong' || data.type === 'user connected') return;
        if (Array.isArray(data)) {
            data = data as WSMessage[];
            this._updateMessages_array(data);
        } else {
            data = data as WSMessage;
            this._updateMessages_object(data);
        }
    }

    constructor() {
        super({ messages: [] }, 'main');
        this.addClass('message-area');
        store.addOnSocketInit(this._askForMessages.bind(this));
        store.addOnSocketClosed(() => {
            this.setProps({ messages: [] });
            this.children = [];
        });
    }

    render() {
        const [content, contentObj] = forHandlebars(this.children);
        return Block.compile(content, contentObj);
    }
}
