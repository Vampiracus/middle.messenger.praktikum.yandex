import './backToMainComponent.scss';
import ArrowButton from '../../../../components/arrowButton';
import Block from '../../../../utils/Block';

export default class BackToMainComponent extends Block {
    constructor() {
        super({}, 'div', [new ArrowButton({
            id: 'backToMainButton',
            events: [['click', () => { (globalThis as any).toMain(); }]],
        })]);
        this.addClass('back-to-main-component');
    }

    render() {
        return Block.compile('{{{backButton}}}', { backButton: this.children[0] });
    }
}

/*
<div class='back-to-main-component'>
    {{{backButton}}}
</div>
*/
