import Block from '../../../utils/Block';

export interface IInput {
    name?: string,
    id: string,
    type?: string,
    additionalProperties?: [string, string][],
    value: string,
    events: Array<[string, EventListener]>,
    classes?: string[],
}

export default class MyInput extends Block<IInput> {
    constructor(props: IInput) {
        super({
            ...props,
            events: [
                ['blur', () => {
                    this.setProps({
                        ...this.props,
                        value: (this.element as HTMLInputElement).value,
                    });
                }],
                ['change', () => {
                    this.setProps({
                        ...this.props,
                        value: (this.element as HTMLInputElement).value,
                    });
                }],
                ...props.events,
            ],
        }, 'input');
    }

    render() {
        if (this.props.type) this.element.setAttribute('type', this.props.type);
        if (this.props.name) this.element.setAttribute('name', this.props.name);
        if (this.props.id) this.element.setAttribute('id', this.props.id);
        (this.element as HTMLInputElement).value = this.props.value;
    }

    componentDidUpdate(): boolean {
        return false;
    }
}
