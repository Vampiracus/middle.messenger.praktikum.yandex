import AuthAPI from '../../../../api/AuthAPI';
import UserAPI from '../../../../api/UserAPI';
import Block from '../../../../utils/Block';
import store from '../../../../utils/Store';
import './myAvatar.scss';

function changeAvatar(e: Event) {
    const curForm = e.currentTarget as HTMLFormElement;
    UserAPI.changeAvatar(new FormData(curForm))
        .then(res => {
            AuthAPI.putUserInfoIntoApplication(res);
        })
        .catch(err => { console.log(err); });
}

export default class MyAvatar extends Block<{ imgSrc: string, events: [string, EventListener][] }> {
    constructor() {
        super({
            imgSrc: store.user.avatar ? store.user.avatar : '/photoCamera.png',
            events: [
                ['change', changeAvatar],
            ],
        }, 'form');
        this.addClass('my-avatar');
        store.addOnUserChange(user => {
            this.setProps({
                ...this.props,
                imgSrc: user.avatar,
            });
        });
    }

    render() {
        return Block.compile(`
        <img src='{{src}}' alt='мой аватар'>
        <input type='file' name='avatar' id='avatarInput' accept='image/*'>
        <label for='avatarInput' class='my-avatar__change'>
            Поменять аватар
        </label>
        `, { src: this.props.imgSrc });
    }
}
