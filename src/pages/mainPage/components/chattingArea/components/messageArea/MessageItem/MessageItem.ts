import './message.scss';
import Block from '../../../../../../../utils/Block';

export const MessageSentStatus: {
    SENT_TO_ME: number,
    SENT: number,
    RECEIVED: number,
} = {
    SENT_TO_ME: 1, SENT: 2, RECEIVED: 3,
};

export default class MessageItem extends Block<Message> {
    constructor(props: Message) {
        super(props, 'div');
        this.addClass('message');
        if (props.sentStatus !== MessageSentStatus.SENT_TO_ME) {
            this.addClass('message_iSent');
        }
    }

    render() {
        const done = (this.props.sentStatus === MessageSentStatus.RECEIVED ? '<img src=\'doneAll.png\'>' : '');
        const image = this.props.imgLink !== undefined ? '<img src=\'camera.png\' alt=\'Изображение\'>' : '';

        return Block.compile(`
        {{text}}
        {{{image}}}
        <div class='message__time'>{{{done}}}{{time}}</div>
        `, {
            done,
            image,
            text: this.props.text,
            time: this.props.time,
        });
    }
}
