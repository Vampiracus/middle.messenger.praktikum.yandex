import Handlebars from 'handlebars';
import './errorModal.scss';
import popupContent from '../popupContent';
import formButton from '../formButton';

export default function errorModal(errorName: string, recomendation: string) {
    const template = Handlebars.compile(popupContent(`
        <div class='error-modal'>
            <h3 class='error-modal__errorName'>{{errorName}}</h3>
            <span class='error-modal__recomendation'>{{recomendation}}</span>
            {{{okButton}}}
        </div>
    `));
    return template({
        errorName,
        recomendation,
        okButton: formButton('Ок', 'okErrorButton', () => { alert('OK'); }),
    });
}
