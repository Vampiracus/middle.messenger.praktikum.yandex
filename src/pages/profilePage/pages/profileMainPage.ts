import ErrorModal from '../../../components/errorModal';
import Block from '../../../utils/Block';
import BackToMainComponent from '../components/backToMainComponent';
import ProfileMain from '../components/profileMain';
import '../profilePage.scss';

export default class ProfileMainPage extends Block {
    constructor() {
        super({}, 'div', [
            new BackToMainComponent(),
            new ProfileMain(),
            new ErrorModal({
                errorName: 'Ошибка загрузки файла', recomendation: 'Попробуйте другой файл',
            }),
        ]);
        this.addClass('profile-page');

        // this.children[2].setProps({ active: true });
    }

    render() {
        return Block.compile(`
        {{{badFileModal}}}
        {{{backToMainComponent}}}
        <main class='profile-page__main'>
            {{{content}}}
        </main>
        `, {
            backToMainComponent: this.children[0],
            content: this.children[1],
            badFileModal: this.children[2],
        });
    }
}
