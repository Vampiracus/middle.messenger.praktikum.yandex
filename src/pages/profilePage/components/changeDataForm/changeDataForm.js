import './changeDataForm.css';
import Handlebars from "handlebars";
import formInput from './../../../../components/formInput';
import formButton from './../../../../components/formButton';
import profileFormWrapper from '../profileFormWrapper';

export default function changeDataForm(me) {
    let template = Handlebars.compile(profileFormWrapper(`
        <form class='changeDataForm'>
            <h2>Изменить данные</h2>
            {{{emailInput}}}
            {{{loginInput}}}
            {{{nameInput}}}
            {{{secondNameInput}}}
            {{{chatNameInput}}}
            {{{phoneInput}}}
            <br/>
            {{{submitProfileDataButton}}}
        </form>
    `))
    return template({
        emailInput: formInput('Почта', 'email', 'profileEmailInput', 'text', 'required value=\'' + me.email + '\''),
        loginInput: formInput('Логин', 'login', 'profileLoginInput', 'text', 'required value=\'' + me.login + '\''),
        nameInput: formInput('Имя', 'first_name', 'profileNameInput', 'text', 'required value=\'' + me.firstName + '\''),
        secondNameInput: formInput('Фамилия', 'second_name', 'profileSecondNameInput', 'text', 'required value=\'' + me.secondName + '\''),
        chatNameInput: formInput('Имя в чате', 'chat_name', 'profileChatNameInput', 'text', 'required value=\'' + me.name + '\''),
        phoneInput: formInput('Имя в чате', 'phone', 'profilePhoneInput', 'text', 'required value=\'' + me.phone + '\''),
        submitProfileDataButton: formButton('Сохранить', 'submitProfileDataButton', ()=>{alert('Сохранение данных профиля')})
    });
}
