import '../errors.scss';
import Block from '../../../utils/Block';
import FormButton from '../../../components/FormButton';

export default class Error404Page extends Block<{}> {
    constructor() {
        super({}, 'main', [new FormButton({ text: 'На главную' })]);
        this.addClass('error-page');
    }

    render() {
        return Block.compile(`
        <h1>Ошибка 404</h1>
        <p>Ресурс не найден</p>
        {{{button}}}
        `, { button: this.children[0] });
    }
}
