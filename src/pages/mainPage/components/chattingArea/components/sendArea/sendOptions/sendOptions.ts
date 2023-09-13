import './sendOptions.scss';
import Block from '../../../../../../../utils/Block';
import DropOutMenuSend from './dropOutMenuSend';

export default class SendOptions extends Block<{}> {
    constructor() {
        super({
            events: [
                ['mouseover', () => { (this.children[0] as DropOutMenuSend).show(); }],
            ],
        }, 'div', [new DropOutMenuSend()]);
        this.addClass('send-options');
    }

    render() {
        return Block.compile(`
        <img src='{{imgSrc}}' alt="attach"/>
        {{{menu}}}
        `, {
            imgSrc: '/attach.png',
            menu: this.children[0],
        });
    }
}
