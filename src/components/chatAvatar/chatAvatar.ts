import ChatsAPI from '../../api/ChatsAPI';
import Block from '../../utils/Block';
import './chatAvatar.scss';

// eslint-disable-next-line no-use-before-define
function changeAvatar(this: ChatAvatar, e: Event) {
    const curForm = new FormData(e.currentTarget as HTMLFormElement);
    curForm.append('chatId', this.props.chat.id.toString());
    ChatsAPI.changeAvatar(curForm)
        .then(res => {
            if (res.id !== undefined) {
                this.setProps({
                    ...this.props,
                    chat: {
                        ...this.props.chat,
                        avatar: res.avatar,
                    },
                });
            }
        })
        .catch(err => { console.log(err); });
}

export default class ChatAvatar extends Block<{
    changeable: boolean, chat: Chat, events: [string, EventListener][]
}> {
    constructor(changeable: boolean, chat: Chat) {
        super({
            changeable,
            chat,
            events: [],
        }, 'form');

        this.setProps({
            ...this.props,
            events: [
                ['change', changeAvatar.bind(this)],
            ],
        });
        this.addClass('chat-avatar');
    }

    render() {
        return Block.compile(`
        <img src='{{src}}'>
        <input type='file' name='avatar' id='avatarInput' accept='image/*'>
        {{{ifChangeable}}}
        `, {
            src: this.props.chat.avatar,
            ifChangeable: this.props.changeable ? `
            <label for='avatarInput' class='my-avatar__change'>
            </label>
            ` : '',
        });
    }
}
