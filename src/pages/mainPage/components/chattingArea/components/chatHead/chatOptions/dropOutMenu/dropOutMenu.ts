import Block from '../../../../../../../../utils/Block';
import './dropOutMenu.scss';

export default class DropOutMenu extends Block<{}> {
    constructor() {
        super({
            events: [
                ['mouseout', () => { this.hide(); }],
            ],
        }, 'div');
        this.addClass('drop-out-menu');
        this.addClass('drop-out-menu__hidden');
    }

    hide() {
        this.addClass('drop-out-menu__hidden');
    }

    show() {
        this.removeClass('drop-out-menu__hidden');
    }

    render() {
        return Block.compile(`
        <div> <div class='drop-out-menu__option-picture drop-out-menu__option-picture_large'>+</div> <span> Добавить пользователя </span> </div>
        <div> <div class='drop-out-menu__option-picture'>x</div> <span> Удалить пользователя </span> </div>
        <div> <div class='drop-out-menu__option-picture drop-out-menu__option-picture_red'>x</div> <span> Удалить чат </span> </div>
        `, {});
    }
}
