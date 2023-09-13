import Block from '../../utils/Block';
import './emptyAvatar.scss';

export default class AnAvatar extends Block<{ path?: string }> {
    constructor(path?: string) {
        super({ path }, 'div');
        this.addClass('avatar');
    }

    render() {
        return Block.compile(`
            <img src='{{src}}'>
        `, { src: this.props.path });
    }
}
