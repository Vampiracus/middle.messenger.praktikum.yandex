import './formInput.scss';
import Block from '../../utils/Block';

interface Props {
    labelText?: string,
    name?: string,
    id?: string,
    type?: string,
    additionalProperies?: string,
    value: string
}

export default class FormInput extends Block<Props> {
    constructor(props: Props) {
        super(props, 'div');
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
