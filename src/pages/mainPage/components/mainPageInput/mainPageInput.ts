import './mainPageInput.scss';
import Block from '../../../../utils/Block';

interface IInput { placeholder?: string, name?: string }

export default class MainPageInput extends Block<IInput> {
    constructor(props: IInput) {
        super(props, 'input');
        this.addClass('main-page-input');

        if (this.props.name) {
            this.setAttribute('name', this.props.name);
        }

        if (this.props.placeholder) {
            this.setAttribute('placeholder', this.props.placeholder);
        }
    }
}
