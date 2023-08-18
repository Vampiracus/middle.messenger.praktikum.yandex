import Block from '../../utils/Block';
import './arrowButton.scss';

interface Props {
    id: string,
    events?: Array<[string, EventListener]>,
}

export default class ArrowButton extends Block {
    constructor(props: Props) {
        super(props, 'button');
        this.addClass('arrow-button');
        this.setAttribute('id', props.id);
    }

    componentDidUpdate(oldProps: Props): boolean {
        this.setAttribute('id', this.props.id ? this.props.id : '');
        if (oldProps.events !== this.props.events) return true;

        return false;
    }

    render() {
        return Block.compile('<img src="{{imgSrc}}" alt="send"/>', { imgSrc: '/arrow.png' });
    }
}
