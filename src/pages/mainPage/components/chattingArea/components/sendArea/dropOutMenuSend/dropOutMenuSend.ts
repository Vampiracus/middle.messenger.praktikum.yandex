import './dropOutMenuSend.scss';
import Block from '../../../../../../../utils/Block';

export default class DropOutMenuSend extends Block<{}> {
    constructor() {
        super({}, 'div');
        this.addClass('drop-out-menu-send');
    }

    render() {
        return Block.compile(`
        <div> <span> Фото или видео </span> </div>
        <div> <span> Файл </span> </div>
        <div> <span> Локация </span> </div>
        `, {});
    }
}
