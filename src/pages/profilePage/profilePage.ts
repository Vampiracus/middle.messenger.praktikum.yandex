import './profilePage.css';
import Handlebars from "handlebars";

import backToMainComponent from './components/backToMainComponent';
import profileMain from './components/profileMain';
//import changeDataForm from './components/changeDataForm';
//import changePasswordForm from './components/changePasswordForm';
import errorModal from '../../components/errorModal';

let me: UserInfo = {
    name: 'Иван',
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    firstName: 'Иван',
    secondName: 'Иванов',
    phone: '+7 (800) 00 00',
}

export default function profilePage() {
    let template = Handlebars.compile(`
        {{{badFileModal}}}
        <div class='profilePage'>
            {{{backToMainComponent}}}
            <main class='profilePage__main'>
                {{{content}}}
            </main>
        </div>
    `)
    return template({
        backToMainComponent: backToMainComponent(),
        content: profileMain(me),
        badFileModal: errorModal('Ошибка загрузки файла', 'Попробуйте другой файл'),
    });
}
