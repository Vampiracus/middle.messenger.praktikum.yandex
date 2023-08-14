import './formButton.scss';
import Block from '../../utils/Block';

interface Props {
    text?: string,
    id?: string,
    callback?: EventListenerOrEventListenerObject
}

export default class FormButton extends Block<Props> {
    constructor(props: Props) {
        super(props, 'button');

        if (props.callback) {
            this.element.addEventListener('click', props.callback);
        }

        this.addClass('form-button');
        if (props.id) {
            this.setAttribute('id', props.id);
        }
        if (props.text) {
            this.element.textContent = props.text;
        }
    }
}
