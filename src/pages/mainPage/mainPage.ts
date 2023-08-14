import './mainPage.scss';
import ChatsComponent from './components/ChatsComponent';
import ChattingArea from './components/ChattingArea';
// import addUserModal from './components/addUserModal';
import DeleteUserModal from './components/DeleteUserModal';
// import deleteChatModal from './components/deleteChatModal';
import Block from '../../utils/Block';
import DeleteChatModal from './components/DeleteChatModal/deleteChatModal';
import AddUserModal from './components/AddUserModal/addUserModal';

export default class MainPage extends Block<{}> {
    constructor() {
        super({}, 'div', [new ChatsComponent(), new ChattingArea(), new DeleteUserModal(), new DeleteChatModal(), new AddUserModal()]);
        // this.children[2].setProps({ active: true });
        // this.children[3].setProps({ active: true });
        // this.children[4].setProps({ active: true });
        this.addClass('main-page');
    }

    render() {
        return Block.compile(`
        {{{addUserModal}}}
        {{{deleteUserModal}}}
        {{{deleteChatModal}}}
        {{{chatsComponent}}}
        {{{chat}}}
        `, {
            chatsComponent: this.children[0],
            chat: this.children[1],
            deleteUserModal: this.children[2],
            deleteChatModal: this.children[3],
            addUserModal: this.children[4],
        });
    }
}
