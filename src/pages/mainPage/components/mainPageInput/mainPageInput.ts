import './mainPageInput.scss';
import Block from '../../../../utils/Block';

interface IInput { placeholder?: string, name?: string, onBlur?: EventListener, value: string }

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

    componentDidUpdate(): boolean {
        return false;
    }

    componentDidMount(): void {
        if (this.props.onBlur) {
            this.element.addEventListener('blur', this.props.onBlur);
            this.element.addEventListener('change', () => {
                this.setProps({
                    ...this.props, value: (this.element as HTMLInputElement).value,
                });
            });
        }
    }
}
