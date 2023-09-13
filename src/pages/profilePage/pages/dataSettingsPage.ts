import Block from '../../../utils/Block';
import BackToMainComponent from '../components/backToMainComponent';
import ChangeDataForm from '../components/changeDataForm';
import '../profilePage.scss';

export default class DataSettingsPage extends Block {
    constructor() {
        super({}, 'div', [
            new BackToMainComponent(),
            new ChangeDataForm(),
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
