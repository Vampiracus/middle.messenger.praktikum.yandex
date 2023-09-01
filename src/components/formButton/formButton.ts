import './formButton.scss';
import Block from '../../utils/Block';

interface Props {
    text?: string,
    id?: string,
    events?: Array<[string, EventListener]>,
    classes?: string[],
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
        if (oldProps.events !== this.props.events) return true;

        return false;
    }
}
