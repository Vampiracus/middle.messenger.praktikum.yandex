import './formButton.scss';
import Block from '../../utils/Block';

interface Props {
    text?: string,
    id?: string,
    callback?: EventListener,
}

export default class FormButton extends Block<Props> {
    constructor(props: Props) {
        super(props, 'button');

        this.addClass('form-button');
        if (props.id) {
            this.setAttribute('id', props.id);
        }
        if (props.text) {
            this.element.textContent = props.text;
        }
    }

    componentDidUpdate(oldProps: Props): boolean {
        this.element.textContent = this.props.text ? this.props.text : '';
        this.setAttribute('id', this.props.id ? this.props.id : '');
        if (this.props.callback) {
            this.element.onclick = this.props.callback;
        } else if (oldProps.callback) {
            this.element.removeEventListener('click', oldProps.callback);
        }

        return false;
    }
}
