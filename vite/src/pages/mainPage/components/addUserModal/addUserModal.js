import './addUserModal.css';
import Handlebars from "handlebars";
import actionModal from '../../../../components/actionModal';
import formInput from './../../../../components/formInput';
import formButton from './../../../../components/formButton';

export default function addUserModal() {
    let template = Handlebars.compile(actionModal('Добавить пользователя', `
        {{{userInput}}}
        {{{addButton}}}
    `, 'addUserForm'));
    return template({
        userInput: formInput('Логин', 'login', 'addUserInput', 'text', 'required'),
        addButton: formButton('Добавить', 'addUserButton', ()=>{alert('Добавление пользователя')})
    });
}