import Handlebars from "handlebars";
import './errorModal.css';
import popupContent from './../popupContent';
import formButton from "../formButton";


export default function errorModal(errorName, recomendation) {
    let template = Handlebars.compile(popupContent(`
        <div class='errorModal'>
            <span class='errorModal__errorName'>{{errorName}}</span>
            <span class='errorModal__recomendation'>{{recomendation}}</span>
            {{{okButton}}}
        </div>
    `));
    return template({
        errorName, 
        recomendation,
        okButton: formButton('Ок', 'okErrorButton', ()=>{alert('OK')})
    });
}