import Handlebars from "handlebars";
import './formInput.css';


export default function formInput(labelText, name, id, type, additionalProperies) {

    let template = Handlebars.compile(`
        <label class='formInput__label' for={{id}}>{{labelText}}</label>
        <input class='formInput' id={{id}} name={{name}} type={{type}} {{{additionalProperies}}}>
    `);

    return template({name, id, labelText, type, additionalProperies});
}