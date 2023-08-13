import './backToMainComponent.scss';
import Handlebars from 'handlebars';
import arrowButton from '../../../../components/arrowButton';

export default function backToMainComponent() {
    const template = Handlebars.compile(`
        <div class='back-to-main-component'>
            {{{backButton}}}
        </div>
    `);
    return template({
        backButton: arrowButton('backToMainButton', () => { alert('Возврат на главную'); }),
    });
}
