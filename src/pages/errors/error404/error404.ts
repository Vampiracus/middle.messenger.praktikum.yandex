import '../errors.scss';
import Block from '../../../utils/Block';

export default class Error404Page extends Block<{}> {
    constructor() {
        super({}, 'main');
        this.addClass('error-page');
    }

    render() {
        return Block.compile(`
        <h1>Ошибка 404</h1>
        <p>Ресурс не найден</p>
        <a href='./authorization'>На главную</a>
        `, {});
    }
}
