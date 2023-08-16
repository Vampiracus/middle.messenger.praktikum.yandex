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
        <a>Изменить данные</a>
        <a>Изменить пароль</a>
        <a style='color: red; text-shadow: 1px 1px black'>Выйти из аккаунта</a>
        `, { name: this.props.name });
    }
}
