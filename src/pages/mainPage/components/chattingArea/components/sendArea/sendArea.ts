import ArrowButton from '../../../../../../components/arrowButton';
import Block from '../../../../../../utils/Block';
import MainPageInput from '../../../mainPageInput';
import './sendArea.scss';
import SendOptions from './sendOptions/sendOptions';

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
            new SendOptions(),
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
        {{{sendOptions}}}
        <form class='send-area__form'>
            {{{myMessageInput}}}
            {{{sendButton}}}
        </form>
        `, {
            sendOptions: this.children[0],
            myMessageInput: this.children[1],
            sendButton: this.children[2],
        });
    }
}
