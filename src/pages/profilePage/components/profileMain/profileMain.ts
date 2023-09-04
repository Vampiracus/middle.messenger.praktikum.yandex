import './profileMain.scss';
import Block from '../../../../utils/Block';
import MyAvatar from '../myAvatar';
import ProfileMainContent from './profileMainContent';

export default class ProfileMain extends Block<{}> {
    constructor() {
        super({}, 'div', [new MyAvatar(), new ProfileMainContent()]);
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
