import Block from '../../utils/Block';

interface Props {
    text: string, // Может быть с разметкой (жирный шрифт)
    classes?: string[],
    events?: Array<[string, EventListener]>,
}

export default class MyA extends Block<Props> {
    constructor(props: Props) {
        super(props, 'a');
        this.element.innerHTML = props.text;
    }
}
