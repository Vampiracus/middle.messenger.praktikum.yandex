import Block from '../../../../../../utils/Block';
import './chatsPlug.scss';

export default class ChatsPlug extends Block<{}> {
    constructor() {
        super({}, 'main');
        this.element.textContent = 'Выберите чат, чтобы отправить сообщение';
        this.addClass('chats-plug');
    }
}
