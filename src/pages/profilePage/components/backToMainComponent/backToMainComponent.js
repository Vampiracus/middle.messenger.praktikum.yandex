import './backToMainComponent.css';
import Handlebars from "handlebars";
import arrowButton from './../../../../components/arrowButton';

export default function backToMainComponent() {
    let template = Handlebars.compile(`
        <div class='backToMainComponent'>
            {{{backButton}}}
        </div>
    `)
    return template({
        backButton: arrowButton('backToMainButton', ()=>{alert('Возврат на главную')})
    });
}