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

interface IProfile {
    content: ProfileMain | ChangeDataForm | ChangePasswordForm,
}

export default class ProfilePage extends Block<IProfile> {
    constructor() {
        const main = new ProfileMain(me);
        super({ content: main }, 'div', [
            new BackToMainComponent(),
            main,
            new ChangeDataForm(me),
            new ChangePasswordForm(),
            new ErrorModal({
                errorName: 'Ошибка загрузки файла', recomendation: 'Попробуйте другой файл',
            }),
        ]);
        this.addClass('profile-page');

        Object.assign(globalThis, {
            toProfMain: () => {
                this.setProps({ content: (this.children[1] as ProfileMain) });
            },
            toChangeData: () => {
                this.setProps({ content: (this.children[2] as ChangeDataForm) });
            },
            toChangePassword: () => {
                this.setProps({ content: (this.children[3] as ChangePasswordForm) });
            },
        });

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
            content: this.props.content,
            badFileModal: this.children[4],
        });
    }
}
