import Block from '../../../utils/Block';

interface ILabel {
    text: string,
    forId: string,
    classes?: string[],
}

export default class MyLable extends Block<ILabel> {
    constructor(props: ILabel) {
        super({ ...props }, 'label');
        this.setAttribute('for', props.forId);
        this.addClass('form-input__label');
    }

    render(): void | DocumentFragment {
        this.element.textContent = this.props.text;
    }
}
