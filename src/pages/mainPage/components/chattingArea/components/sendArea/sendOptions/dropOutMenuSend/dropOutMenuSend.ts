import './dropOutMenuSend.scss';
import Block from '../../../../../../../../utils/Block';

export default class DropOutMenuSend extends Block<{}> {
    constructor() {
        super({
            events: [
                ['mouseout', () => { this.hide(); }],
            ],
        }, 'div');
        this.addClass('drop-out-menu-send');
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
        <div> <span> Фото или видео </span> </div>
        <div> <span> Файл </span> </div>
        <div> <span> Локация </span> </div>
        `, {});
    }
}
