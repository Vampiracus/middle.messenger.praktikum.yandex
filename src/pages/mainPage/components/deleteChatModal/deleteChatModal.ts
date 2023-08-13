import './deleteChatModal.scss';
import Handlebars from 'handlebars';
import actionModal from '../../../../components/actionModal';
import formButton from '../../../../components/formButton';

export default function deleteChatModal() {
    const template = Handlebars.compile(actionModal('Удалить чат', `
        <span>Это действие нельзя отменить</span>
        {{{addButton}}}
        {{{deleteButton}}}
    `, 'delete-chat-modal'));
    return template({
        addButton: formButton('Отменить', 'cancel-button', () => { alert('Отмена'); }),
        deleteButton: formButton('Удалить', 'delete-chat-button', () => { alert('Удаление'); }),
    });
}
