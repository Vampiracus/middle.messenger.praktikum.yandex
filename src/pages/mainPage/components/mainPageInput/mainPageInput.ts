import './mainPageInput.scss';
import Handlebars from 'handlebars';

export default function mainPageInput(placeholder: string) {
    const template = Handlebars.compile(`
        <input class='main-page-input' name='message' type='text' placeholder='{{placeholder}}'>
    `);
    return template({
        placeholder,
    });
}
