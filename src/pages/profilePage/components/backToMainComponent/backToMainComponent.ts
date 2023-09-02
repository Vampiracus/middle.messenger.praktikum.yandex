import './backToMainComponent.scss';
import ArrowButton from '../../../../components/arrowButton';
import Block from '../../../../utils/Block';
import Router from '../../../../utils/Router';

const router = Router;

export default class BackToMainComponent extends Block {
    constructor() {
        super({}, 'div', [new ArrowButton({
            id: 'backToMainButton',
            events: [['click', () => { router.go('/messages'); }]],
        })]);
        this.addClass('back-to-main-component');
    }

    render() {
        return Block.compile('{{{backButton}}}', { backButton: this.children[0] });
    }
}
