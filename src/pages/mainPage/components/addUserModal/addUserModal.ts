import './addUserModal.scss';
import Handlebars from 'handlebars';
import actionModal from '../../../../components/actionModal';
import formInput from '../../../../components/formInput';
import formButton from '../../../../components/formButton';

export default function addUserModal() {
    const template = Handlebars.compile(actionModal('Добавить пользователя', `
        {{{userInput}}}
        {{{addButton}}}
    `, 'add-user-form'));
    return template({
        userInput: formInput('Логин', 'login', 'addUserInput', 'text', 'required'),
        addButton: formButton('Добавить', 'addUserButton', () => { alert('Добавление пользователя'); }),
    });
}
