import './deleteUserModal.scss';
import Handlebars from 'handlebars';
import actionModal from '../../../../components/actionModal';
import formInput from '../../../../components/formInput';
import formButton from '../../../../components/formButton';

export default function deleteUserModal() {
    const template = Handlebars.compile(actionModal('Удалить пользователя', `
        {{{userInput}}}
        {{{deleteButton}}}
    `, 'delete-user-modal'));

    return template({
        userInput: formInput('Логин', 'login', 'deleteUserInput', 'text', 'required'),
        deleteButton: formButton('Удалить', 'deleteUserButton', () => { alert('Удаление пользователя'); }),
    });
}