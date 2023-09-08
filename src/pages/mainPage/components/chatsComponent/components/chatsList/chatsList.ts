import ChatItem from './chatItem';
import './chatsList.scss';
import Block from '../../../../../../utils/Block';
import forHandlebars from '../../../../../../utils/otherScripts';
import store from '../../../../../../utils/Store';

export default class ChatsList extends Block<{ chats: Chat[] }> {
    private _updateChats() {
        const chatItems: Array<ChatItem> = [];
        store.chats.forEach((chat: Chat) => {
            chatItems.push(new ChatItem(chat));
        });
        this.children = chatItems;
        this.setProps({ chats: store.chats });
    }

    constructor() {
        super({ chats: [] }, 'div');
        this.addClass('chats-list');
        store.addOnChatsChange(this._updateChats.bind(this));
        this._updateChats();
    }

    render() {
        const [content, contentObj] = forHandlebars(this.children);
        return Block.compile(content, contentObj);
    }
}
