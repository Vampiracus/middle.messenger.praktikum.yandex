import Block from '../../../utils/Block';
import BackToMainComponent from '../components/backToMainComponent';
import ChangePasswordForm from '../components/changePasswordForm';
import '../profilePage.scss';

export default class passwordSettingPage extends Block {
    constructor() {
        super({}, 'div', [
            new BackToMainComponent(),
            new ChangePasswordForm(),
        ]);
        this.addClass('profile-page');
    }

    render() {
        return Block.compile(`
        {{{backToMainComponent}}}
        <main class='profile-page__main'>
            {{{content}}}
        </main>
        `, {
            backToMainComponent: this.children[0],
            content: this.children[1],
        });
    }
}
