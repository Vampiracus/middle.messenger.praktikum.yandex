import Block from '../../../../utils/Block';
import './myAvatar.scss';

export default class MyAvatar extends Block<{}> {
    constructor() {
        super({}, 'div');
        this.addClass('my-avatar');
    }

    render() {
        return Block.compile(`
        <img src='{{src}}' alt='мой аватар'>
        <input type='file' name='avatar' id='avatarInput'>
        <label for='avatarInput' class='my-avatar__change'>
            Поменять аватар
        </label>
        `, { src: '/photoCamera.png' });
    }
}
