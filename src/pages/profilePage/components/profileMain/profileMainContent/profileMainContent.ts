import MyA from '../../../../../components/myA/myA';
import Block from '../../../../../utils/Block';
import Router from '../../../../../utils/Router';
import './profileMainContent.scss';

const router = Router;

export default class ProfileMainContent extends Block<UserInfo> {
    constructor(me: UserInfo) {
        super(me, 'div', [
            new MyA({
                text: 'Изменить данные',
                events: [
                    ['click', () => { router.go('/settings/data'); }],
                ],
            }),
            new MyA({
                text: 'Изменить пароль',
                events: [
                    ['click', () => { router.go('/settings/password'); }],
                ],
            }),
            new MyA({
                text: 'Выйти из аккаунта',
                classes: ['red'],
                events: [
                    ['click', () => { router.go('/'); }],
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
