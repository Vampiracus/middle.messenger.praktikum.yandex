import './errorModal.scss';
import PopupContent from '../PopupContent';
import FormButton from '../FormButton';

interface IError {
    errorName: string,
    recomendation: string,
}

export default class ErrorModal extends PopupContent<IError> {
    constructor(props: IError) {
        const template = `
        <div class='error-modal'>
            <h3 class='error-modal__errorName'>{{errorName}}</h3>
            <span class='error-modal__recomendation'>{{recomendation}}</span>
            {{{okButton}}}
        </div>
        `;
        const implementation = {
            errorName: props.errorName,
            recomendation: props.recomendation,
            okButton: new FormButton({
                text: 'Ок',
                id: 'okErrorButton',
                callback: () => { this.setProps({ ...this.props, active: false }); },
            }),
        };
        super(props, template, implementation, [implementation.okButton]);
    }
}
