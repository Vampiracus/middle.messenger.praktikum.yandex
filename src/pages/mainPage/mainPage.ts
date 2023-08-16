import './mainPage.scss';
import ChatsComponent from './components/chatsComponent';
import ChattingArea from './components/chattingArea';
// import addUserModal from './components/addUserModal';
import DeleteUserModal from './components/deleteUserModal';
// import deleteChatModal from './components/deleteChatModal';
import Block from '../../utils/Block';
import DeleteChatModal from './components/deleteChatModal';
import AddUserModal from './components/addUserModal';

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
