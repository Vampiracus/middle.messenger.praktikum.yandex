import '../errors.scss';
import Block from '../../../utils/Block';
import MyA from '../../../components/myA/myA';
import Router from '../../../utils/Router';
import store from '../../../utils/Store';

export default class Error404Page extends Block<{}> {
    constructor() {
        super({}, 'main', [
            new MyA({
                text: 'На главную',
                events: [['click', () => {
                    if (store.user.id === -1) Router.go('/');
                    else Router.go('/messages');
                }]],
            }),
        ]);
        this.addClass('error-page');
    }

    render() {
        return Block.compile(`
        <h1>Ошибка 404</h1>
        <p>Ресурс не найден</p>
        {{{myA}}}
        `, { myA: this.children[0] });
    }
}
