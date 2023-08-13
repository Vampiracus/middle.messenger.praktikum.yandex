import './profilePage.scss';
import Handlebars from 'handlebars';

import backToMainComponent from './components/backToMainComponent';
import profileMain from './components/profileMain';
// import changeDataForm from './components/changeDataForm';
// import changePasswordForm from './components/changePasswordForm';
// import errorModal from '../../components/errorModal';

const me: UserInfo = {
    name: 'Иван',
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    firstName: 'Иван',
    secondName: 'Иванов',
    phone: '+7 (800) 00 00',
};

export default function profilePage() {
    const template = Handlebars.compile(`
        {{{badFileModal}}}
        <div class='profile-page'>
            {{{backToMainComponent}}}
            <main class='profile-page__main'>
                {{{content}}}
            </main>
        </div>
    `);
    return template({
        backToMainComponent: backToMainComponent(),
        content: profileMain(me),
        // content: changeDataForm(me),
        // content: changePasswordForm(),
        // badFileModal: errorModal('Ошибка загрузки файла', 'Попробуйте другой файл'),
    });
}
