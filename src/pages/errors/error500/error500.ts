import '../errors.scss';
import Block from '../../../utils/Block';

export default class Error500Page extends Block<{}> {
    constructor() {
        super({}, 'main');
        this.addClass('error-page');
    }

    render() {
        return Block.compile(`
        <h1>Ошибка 500</h1>
        <p>Похоже, сервер лежит</p>
        <a href='./authorization'>На главную</a>
        `, {});
    }
}
