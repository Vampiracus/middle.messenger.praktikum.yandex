import './message.css';
import Handlebars from "handlebars";

export const enum MessageSentStatus {SENT_TO_ME, SENT, RECEIVED};

export default function message(msgInfo: Message) {

    let template = Handlebars.compile(`
    <div class='message {{iSent}}'>
        {{text}}
        {{{image}}}
        <div class='message__time'>{{{done}}}{{time}}</div>
    </div>
    `)
    let iSent = (msgInfo.sentStatus !== MessageSentStatus.SENT_TO_ME ? 'message_iSent' : '');
    let done = (msgInfo.sentStatus === MessageSentStatus.RECEIVED ? `<img src='doneAll.png'>` : '')

    //
    let image = msgInfo.imgLink !== undefined ? `<img src='camera.png' alt='Изображение'>` : '';
    //

    return template({
        iSent: iSent,
        text: msgInfo.text,
        image,
        time: msgInfo.time,
        done
    });
}
