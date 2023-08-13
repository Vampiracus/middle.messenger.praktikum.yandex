import Handlebars from 'handlebars';
import './formInput.scss';

export default function formInput(
    labelText: string | undefined,
    name: string | undefined,
    id: string | undefined,
    type: string | undefined,
    additionalProperies: string | undefined
) {
    const template = Handlebars.compile(`
        <label class='form-input__label' for={{id}}>{{labelText}}</label>
        <input class='form-input' id={{id}} name={{name}} type={{type}} {{{additionalProperies}}}>
    `);

    return template({
        name, id, labelText, type, additionalProperies,
    });
}
