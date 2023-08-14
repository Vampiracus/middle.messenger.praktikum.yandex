import './chatOptions.scss';
import Block from '../../../../../../../utils/Block';
import DropOutMenu from './DropOutMenu';

export default class ChatOptions extends Block<{}> {
    constructor() {
        super({}, 'div', [new DropOutMenu()]);
        this.addClass('chat-options');
    }

    render() {
        return Block.compile('...\n{{{menu}}}', { menu: this.children[0] });
    }
}
