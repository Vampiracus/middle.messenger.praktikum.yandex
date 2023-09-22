import './profileMain.scss';
import Block from '../../../../utils/Block';
import MyAvatar from './myAvatar';
import ProfileMainContent from './profileMainContent';
import store from '../../../../utils/Store';

export default class ProfileMain extends Block<{ user: User }> {
    constructor() {
        super({ user: store.user }, 'div', [new MyAvatar(), new ProfileMainContent()]);
        this.addClass('profile-main');
        store.addOnUserChange(() => { this.setProps({ user: store.user }); });
    }

    render() {
        return Block.compile(`
        <br/>
        {{{myAvatar}}}
        <br/>
        <div class='profile-main__info'>
            <p>Почта: <span>{{email}}</span></p>
            <p>Логин: <span>{{login}}</span></p>
            <p>Имя: <span>{{first_name}}</span></p>
            <p>Фамилия: <span>{{second_name}}</span></p>
            <p>Имя в чате: <span>{{display_name}}</span></p>
            <p>Телефон: <span>{{phone}}</span></p>
        </div>
        <br/>
        {{{content}}}
        `, {
            myAvatar: this.children[0],
            content: this.children[1],
            ...this.props.user,
            id: undefined,
        });
    }
}
