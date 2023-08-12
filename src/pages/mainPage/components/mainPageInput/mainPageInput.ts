import './mainPageInput.css';
import Handlebars from 'handlebars';

export default function mainPageInput(placeholder: string) {
    const template = Handlebars.compile(`
        <input class='mainPageInput' name='message' type='text' placeholder='{{placeholder}}'>
    `);
    return template({
        placeholder,
    });
}
