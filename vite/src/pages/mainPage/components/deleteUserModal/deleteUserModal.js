import './deleteUserModal.css';
import Handlebars from "handlebars";
import actionModal from '../../../../components/actionModal';
import formInput from './../../../../components/formInput';
import formButton from './../../../../components/formButton';

export default function deleteUserModal() {
    let template = Handlebars.compile(actionModal('Удалить пользователя', `
        {{{userInput}}}
        {{{deleteButton}}}
    `, 'deleteUserModal'));
    return template({
        userInput: formInput('Логин', 'login', 'deleteUserInput', 'text', 'required'),
        deleteButton: formButton('Удалить', 'deleteUserButton', ()=>{alert('Удаление пользователя')})
    });
}