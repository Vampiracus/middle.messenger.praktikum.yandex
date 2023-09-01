import Block from '../../utils/Block';
import './emptyAvatar.scss';

export default class EmptyAvatar extends Block<{}> {
    constructor() {
        super({}, 'div');
        this.addClass('empty-avatar');
    }
}
