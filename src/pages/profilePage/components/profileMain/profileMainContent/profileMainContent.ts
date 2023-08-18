import MyA from '../../../../../components/myA/myA';
import Block from '../../../../../utils/Block';
import './profileMainContent.scss';

export default class ProfileMainContent extends Block<UserInfo> {
    constructor(me: UserInfo) {
        super(me, 'div', [
            new MyA({
                text: 'Изменить данные',
                events: [
                    ['click', () => { (globalThis as any).toChangeData(); }],
                ],
            }),
            new MyA({
                text: 'Изменить пароль',
                events: [
                    ['click', () => { (globalThis as any).toChangePassword(); }],
                ],
            }),
            new MyA({
                text: 'Выйти из аккаунта',
                classes: ['red'],
                events: [
                    ['click', () => {
                        (globalThis as any).toAuth();
                        (globalThis as any).toEntr();
                    }],
                ],
            }),
        ]);
        this.addClass('profile-main-content');
    }

    render() {
        return Block.compile(`
        <span>{{name}}</span>
        <br/>
        <br/>
        <br/>
        <br/>
        {{{AToData}}}
        {{{AToPassword}}}
        {{{AToEntr}}}
        `, {
            name: `${this.props.firstName} ${this.props.secondName}`,
            AToData: this.children[0],
            AToPassword: this.children[1],
            AToEntr: this.children[2],
        });
    }
}
