import ErrorModal from '../../components/errorModal';
import Block from '../../utils/Block';
import BackToMainComponent from './components/backToMainComponent';
import ChangeDataForm from './components/changeDataForm';
import ChangePasswordForm from './components/changePasswordForm';
import ProfileMain from './components/profileMain';
import './profilePage.scss';

const me: UserInfo = {
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    firstName: 'Иван',
    secondName: 'Иванов',
    displayName: 'Иван',
    phone: '+78001234567',
};

export default class ProfilePage extends Block<{}> {
    constructor() {
        super({}, 'div', [
            new BackToMainComponent(),
            new ProfileMain(me),
            new ChangeDataForm(me),
            new ChangePasswordForm(),
            new ErrorModal({
                errorName: 'Ошибка загрузки файла', recomendation: 'Попробуйте другой файл',
            }),
        ]);
        this.addClass('profile-page');
        // this.children[4].setProps({ active: true });
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
            // content: this.children[1],
            // content: this.children[2],
            content: this.children[3],
            badFileModal: this.children[4],
        });
    }
}
