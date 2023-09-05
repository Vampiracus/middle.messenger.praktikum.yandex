import './chatOptions.scss';
import Block from '../../../../../../../utils/Block';
import DropOutMenu from './dropOutMenu';

export default class ChatOptions extends Block<{}> {
    constructor() {
        super({
            events: [
                ['mouseover', () => { (this.children[0] as DropOutMenu).show(); }],
            ],
        }, 'div', [new DropOutMenu()]);
        this.addClass('chat-options');
    }

    render() {
        return Block.compile('...\n{{{menu}}}', { menu: this.children[0] });
    }
}
