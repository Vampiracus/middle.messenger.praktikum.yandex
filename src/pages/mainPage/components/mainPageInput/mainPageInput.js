import './mainPageInput.css';
import Handlebars from "handlebars";

export default function mainPageInput(placeholder) {
    let template = Handlebars.compile(`
        <input class='mainPageInput' type='text' placeholder='{{placeholder}}'>
    `)
    return template({
        placeholder: placeholder,
    });
}
