import './backToMainComponent.scss';
import ArrowButton from '../../../../components/ArrowButton';
import Block from '../../../../utils/Block';

export default class BackToMainComponent extends Block {
    constructor() {
        super({}, 'div', [new ArrowButton({ id: 'backToMainButton', callback: () => { alert('Возврат на главную'); } })]);
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
