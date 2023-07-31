import './deleteChatModal.css';
import Handlebars from "handlebars";
import actionModal from '../../../../components/actionModal';
import formButton from '../../../../components/formButton';

export default function deleteChatModal() {
    let template = Handlebars.compile(actionModal('Удалить чат', `
        <span>Это действие нельзя отменить</span>
        {{{addButton}}}
        {{{deleteButton}}}
    `, 'deleteChatModal'));
    return template({
        addButton: formButton('Отменить', 'cancelButton', ()=>{alert('Отмена')}),
        deleteButton: formButton('Удалить', 'deleteChatButton', ()=>{alert('Удаление')})
    });
}