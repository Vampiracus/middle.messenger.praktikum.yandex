import './mainPageInput.scss';
import Block from '../../../../utils/Block';

interface IInput {
    placeholder?: string,
    name?: string,
    classes?: string[],
    events?: Array<[string, EventListener]>,
    value: string
}

export default class MainPageInput extends Block<IInput> {
    constructor(props: IInput) {
        const { events = [] } = props;
        events.push(['change', () => {
            this.setProps({
                ...this.props, value: (this.element as HTMLInputElement).value,
            });
        }]);
        super({
            ...props,
            events,
        }, 'input');
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
}
