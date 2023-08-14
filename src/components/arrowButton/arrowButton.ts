import Block from '../../utils/Block';
import './arrowButton.scss';

interface Props {
    id: string,
    callback?: EventListenerOrEventListenerObject
}

export default class ArrowButton extends Block {
    constructor(props: Props) {
        super(props, 'button');
        this.addClass('arrow-button');
        this.setAttribute('id', props.id);

        if (props.callback) {
            this.element.addEventListener('click', props.callback);
        }
    }

    render() {
        return Block.compile('<img src="{{imgSrc}}" alt="send"/>', { imgSrc: '/arrow.png' });
    }
}
