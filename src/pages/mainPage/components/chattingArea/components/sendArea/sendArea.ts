import ArrowButton from '../../../../../../components/arrowButton';
import Block from '../../../../../../utils/Block';
import MainPageInput from '../../../mainPageInput';
import DropOutMenuSend from './dropOutMenuSend';
import './sendArea.scss';

export default class SendArea extends Block<{}> {
    private _send(e: Event) {
        e.preventDefault();
        const message = this.children[1].props.value;
        console.log({ message });
        if (message === '') {
            console.log('Валидация не удалась');
        } else console.log('Успешная валидация');
    }

    constructor() {
        const inpt = new MainPageInput({
            placeholder: 'Введите сообщение',
            name: 'message',
            events: [['blur', () => {
                if (inpt.props.value === '') {
                    console.log('Валидация не удалась');
                } else console.log('Успешная валидация');
            }]],
            value: '',
        });

        super({}, 'div', [
            new DropOutMenuSend(),
            inpt,
            new ArrowButton({ id: 'sendMessageButton' }),
        ]);
        this.addClass('send-area');
    }

    componentDidMount(): void {
        this.children[2].setProps({ events: [['click', this._send.bind(this)]] });
    }

    render() {
        return Block.compile(`
        {{{dropOutMenu}}}
        <img src='{{imgSrc}}' alt="attach"/>
        <form class='send-area__form'>
            {{{myMessageInput}}}
            {{{sendButton}}}
        </form>
        `, {
            dropOutMenu: this.children[0],
            imgSrc: '/attach.png',
            myMessageInput: this.children[1],
            sendButton: this.children[2],
        });
    }
}
