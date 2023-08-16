import Block from '../../../../../utils/Block';
import './profileMainContent.scss';

export default class ProfileMainContent extends Block<UserInfo> {
    constructor(me: UserInfo) {
        super(me, 'div');
        this.addClass('profile-main-content');
    }

    render() {
        return Block.compile(`
        <span>{{name}}</span>
        <br/>
        <br/>
        <br/>
        <br/>
        <a href='/profile/data'>Изменить данные</a>
        <a href='/profile/password'>Изменить пароль</a>
        <a style='color: red; text-shadow: 1px 1px black' href='authorization'>Выйти из аккаунта</a>
        `, { name: `${this.props.firstName} ${this.props.secondName}` });
    }
}
