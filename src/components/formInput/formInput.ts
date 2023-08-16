import './formInput.scss';
import Block from '../../utils/Block';

interface Props {
    labelText?: string,
    name?: string,
    id: string,
    type?: string,
    additionalProperies?: string,
    onBlur?: EventListener,
    value: string
}

export default class FormInput extends Block<Props> {
    constructor(props: Props) {
        super(props, 'div');
        this.addClass('form-input-wrapper');
    }

    get inputElement(): HTMLInputElement {
        return this.element.children[1] as HTMLInputElement;
    }

    get labelElement(): HTMLLabelElement {
        return this.element.children[0] as HTMLLabelElement;
    }

    componentDidUpdate(): boolean {
        return false;
    }

    componentDidMount() {
        this.inputElement.value = this.props.value;
        this.inputElement.addEventListener('change', () => {
            this.setProps({
                ...this.props,
                value: (this.element.children[1] as HTMLInputElement).value,
            });
        });
        this.inputElement.addEventListener('blur', e => {
            this.setProps({
                ...this.props,
                value: (this.element.children[1] as HTMLInputElement).value,
            });
            if (this.props.onBlur) this.props.onBlur(e);
        });
    }

    setCorrect() {
        this.labelElement.classList.remove('form-input__label_incorrect');
        this.labelElement.classList.add('form-input__label_correct');
    }

    setIncorrect() {
        this.labelElement.classList.add('form-input__label_incorrect');
        this.labelElement.classList.remove('form-input__label_correct');
    }

    render() {
        return Block.compile(`
        <label class='form-input__label' for={{id}}>{{labelText}}</label>
        <input class='form-input' id={{id}} name={{name}} type={{type}} {{{additionalProperies}}}>
        `, {
            name: this.props.name,
            id: this.props.id,
            labelText: this.props.labelText,
            type: this.props.type,
            additionalProperies: this.props.additionalProperies,
        });
    }
}
