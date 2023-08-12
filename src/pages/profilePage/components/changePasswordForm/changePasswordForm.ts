import './changePasswordForm.css';
import Handlebars from 'handlebars';
import formInput from '../../../../components/formInput';
import formButton from '../../../../components/formButton';
import profileFormWrapper from '../profileFormWrapper';

export default function changeDataForm() {
    const template = Handlebars.compile(profileFormWrapper(`
        <form class='changeDataForm'>
            <h2>Изменить пароль</h2>
            {{{oldPasswordInput}}}
            {{{newPasswordInput}}}
            {{{newPasswordAgainInput}}}
            <br/>
            {{{submitPasswordButton}}}
        </form>
    `));
    return template({
        oldPasswordInput: formInput('Старый пароль', 'oldPassword', 'oldPasswordInput', 'password', 'required'),
        newPasswordInput: formInput('Новый пароль', 'newPassword', 'newPasswordInput', 'password', 'required'),
        newPasswordAgainInput: formInput('Новый пароль (ещё раз)', 'newPasswordAgain', 'newPasswordAgainInput', 'password', 'required'),
        submitPasswordButton: formButton('Сохранить', 'submitPasswordButton', () => { alert('Сохранение данных о пароле'); }),
    });
}
