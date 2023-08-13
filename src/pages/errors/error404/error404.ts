import '../errors.scss';
import Block from '../../../utils/Block';
import FormButton from '../../../components/formButton';

export default class Error404Page extends Block<{}> {
    constructor() {
        super({}, 'main', [new FormButton({ text: 'На главную' })]);
        this.addClass('error-page');
    }

    render() {
        return Block.compile(`
        <h1>Ошибка 404</h1>
        {{{button}}}
        `, { button: this.children[0] });
    }
}
