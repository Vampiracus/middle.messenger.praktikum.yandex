import ChatItem from './ChatItem';
import './chatsList.scss';
import Block from '../../../../../../utils/Block';
import forHandlebars from '../../../../../../utils/otherScripts';

export default class ChatsList extends Block<{}> {
    constructor(chats: Array<Chat>) {
        const chatItems: Array<ChatItem> = [];
        chats.forEach(chat => {
            chatItems.push(new ChatItem(chat));
        });
        super({}, 'div', chatItems);
        this.addClass('chats-list');
    }

    render() {
        const [content, contentObj] = forHandlebars(this.children);
        return Block.compile(content, contentObj);
    }
}
