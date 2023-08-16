import Block from '../../../../../../../utils/Block';

interface IBubble { messagesNumber: number }

export default class ToBeReadBubble extends Block<IBubble> {
    constructor(props: IBubble) {
        super(props, 'div');
        this.addClass('chat-item__about__to-be-read');
    }

    render(): DocumentFragment | void {
        if (this.props.messagesNumber === 0) {
            this.element.style.display = 'none';
        }

        return Block.compile('{{n}}', { n: this.props.messagesNumber.toString() });
    }
}
