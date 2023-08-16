import './profileMain.scss';
import Block from '../../../../utils/Block';
import MyAvatar from '../MyAvatar';
import ProfileMainContent from './ProfileMainContent';

export default class ProfileMain extends Block<UserInfo> {
    constructor(me: UserInfo) {
        super(me, 'div', [new MyAvatar(), new ProfileMainContent(me)]);
        this.addClass('profile-main');
    }

    render() {
        return Block.compile(`
        <br/>
        {{{myAvatar}}}
        <br/>
        {{{content}}}
        `, {
            myAvatar: this.children[0], content: this.children[1],
        });
    }
}
