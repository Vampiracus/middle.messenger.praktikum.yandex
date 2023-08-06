import './message.css';
import Handlebars from "handlebars";
import imgSrc from './../../../../../../../../public/doneAll.png';

//Заглушка на изображение
import img from './../../../../../../../../public/camera.png';

export default function message(msgInfo) {

    let template = Handlebars.compile(`
    <div class='message {{iSent}}'>
        {{text}}
        {{{image}}}
        <div class='message__time'>{{{done}}}{{time}}</div>
    </div>
    `)
    let iSent = (msgInfo.iSent === true ? 'message_iSent' : '');
    let done = (msgInfo.iSent === true ? `<img src='` + imgSrc + `'>` : '')

    //
    let image = msgInfo.imgLink !== undefined ? `<img src='` + img + `' alt='Изображение'>` : '';
    //

    return template({
        iSent: iSent,
        text: msgInfo.text,
        image,
        time: msgInfo.time,
        done
    });
}
