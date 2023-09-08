import AuthAPI from '../../../../../api/AuthAPI';
import MyA from '../../../../../components/myA/myA';
import Block from '../../../../../utils/Block';
import Router from '../../../../../utils/Router';
import store from '../../../../../utils/Store';
import './profileMainContent.scss';

const router = Router;

function leave() {
    AuthAPI.logout();
    router.go('/');
}

export default class ProfileMainContent extends Block<{ firstName: string, secondName: string }> {
    constructor() {
        super({
            firstName: store.user.first_name,
            secondName: store.user.second_name,
        }, 'div', [
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
                    ['click', leave],
                ],
            }),
        ]);
        this.addClass('profile-main-content');
        store.addOnUserChange(user => {
            this.setProps({
                firstName: user.first_name,
                secondName: user.second_name,
            });
        });
    }

    render() {
        return Block.compile(`
        <br/>
        <br/>
        <br/>
        <br/>
        {{{AToData}}}
        {{{AToPassword}}}
        {{{AToEntr}}}
        `, {
            AToData: this.children[0],
            AToPassword: this.children[1],
            AToEntr: this.children[2],
        });
    }
}
