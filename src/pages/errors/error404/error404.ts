import '../errors.scss';
import Block from '../../../utils/Block';
import MyA from '../../../components/myA/myA';

export default class Error404Page extends Block<{}> {
    constructor() {
        super({}, 'main', [
            new MyA({
                text: 'На главную',
                events: [['click', () => {
                    (globalThis as any).toAuth();
                    (globalThis as any).toEntr();
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
