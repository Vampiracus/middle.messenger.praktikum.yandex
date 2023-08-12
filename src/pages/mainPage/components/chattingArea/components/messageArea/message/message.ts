import './message.css';
import Handlebars from 'handlebars';

export const MessageSentStatus: {
    SENT_TO_ME: number,
    SENT: number,
    RECEIVED: number,
} = { SENT_TO_ME: 1, SENT: 2, RECEIVED: 3, };

export default function message(msgInfo: Message) {
    const template = Handlebars.compile(`
    <div class='message {{iSent}}'>
        {{text}}
        {{{image}}}
        <div class='message__time'>{{{done}}}{{time}}</div>
    </div>
    `);
    const iSent = (msgInfo.sentStatus !== MessageSentStatus.SENT_TO_ME ? 'message_iSent' : '');
    const done = (msgInfo.sentStatus === MessageSentStatus.RECEIVED ? '<img src=\'doneAll.png\'>' : '');

    //
    const image = msgInfo.imgLink !== undefined ? '<img src=\'camera.png\' alt=\'Изображение\'>' : '';
    //

    return template({
        iSent,
        text: msgInfo.text,
        image,
        time: msgInfo.time,
        done,
    });
}
