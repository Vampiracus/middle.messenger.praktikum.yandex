import './chatOptions.scss';
import Block from '../../../../../../../utils/Block';
import DropOutMenu from './components/dropOutMenu';
import AddUserModal from './components/addUserModal';
import DeleteUserModal from './components/deleteUserModal';
import DeleteChatModal from './components/deleteChatModal';

export default class ChatOptions extends Block<{}> {
    constructor() {
        super({
            events: [
                ['mouseover', () => { (this.children[0] as DropOutMenu).show(); }],
            ],
        }, 'div', [
            new DropOutMenu({
                showAddUser: () => { this.children[1].setProps({ active: true }); },
                showDelUser: () => { this.children[2].setProps({ active: true }); },
                showDelChat: () => { this.children[3].setProps({ active: true }); },
            }),
            new AddUserModal(),
            new DeleteUserModal(),
            new DeleteChatModal(),
        ]);
        this.addClass('chat-options');
    }

    render() {
        return Block.compile(`
        {{{addUserModal}}}
        {{{deleteUserModal}}}
        {{{deleteChatModal}}}
        {{{a}}}
        ...\n{{{menu}}}
        `, {
            menu: this.children[0],
            addUserModal: this.children[1],
            deleteUserModal: this.children[2],
            deleteChatModal: this.children[3],
        });
    }
}
