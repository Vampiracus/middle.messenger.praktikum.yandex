import Block from '../../../../../../../../utils/Block';
import './dropOutMenu.scss';

export default class DropOutMenu extends Block<{}> {
    constructor() {
        super({}, 'div');
        this.addClass('drop-out-menu');
    }

    render() {
        return Block.compile(`
        <div> <div class='drop-out-menu__option-picture drop-out-menu__option-picture_large'>+</div> <span> Добавить пользователя </span> </div>
        <div> <div class='drop-out-menu__option-picture'>x</div> <span> Удалить пользователя </span> </div>
        <div> <div class='drop-out-menu__option-picture drop-out-menu__option-picture_red'>x</div> <span> Удалить чат </span> </div>
        `, {});
    }
}
