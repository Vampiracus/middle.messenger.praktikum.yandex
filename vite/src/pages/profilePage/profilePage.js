import './profilePage.css';
import backToMainComponent from './components/backToMainComponent';
import Handlebars from "handlebars";
import profileMain from './components/profileMain';
import changeDataForm from './components/changeDataForm';
import changePasswordForm from './components/changePasswordForm';
import errorModal from '../../components/errorModal/errorModal';

let me = {
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
            {{{content}}}
        </div>
    `)
    return template({
        backToMainComponent: backToMainComponent(),
        content: changePasswordForm(me),
        badFileModal: errorModal('Ошибка загрузки файла', 'Попробуйте другой файл'),
    });
}