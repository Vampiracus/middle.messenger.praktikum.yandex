import './message.scss';
import Block from '../../../../../../../utils/Block';
import store from '../../../../../../../utils/Store';
import { timeToReadable } from '../../../../../../../utils/otherScripts';

export default class MessageItem extends Block<WSMessage> {
    constructor(props: WSMessage) {
        props.time = timeToReadable(props.time);
        super(props, 'div');
        this.addClass('message');
        if (props.user_id === store.user.id) {
            this.addClass('message_iSent');
        }
    }

    render() {
        const done = (this.props.user_id !== store.user.id ? '<img src=\'doneAll.png\'>' : '');

        return Block.compile(`
        {{text}}
        {{{image}}}
        <div class='message__time'>{{{done}}}{{time}}</div>
        `, {
            done,
            text: this.props.content,
            time: this.props.time,
        });
    }
}
