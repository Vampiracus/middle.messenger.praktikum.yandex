import './deleteChatModal.scss';
import ActionModal from '../../../../components/ActionModal';
import FormButton from '../../../../components/FormButton';

export default class DeleteChatModal extends ActionModal {
    constructor() {
        super('Удалить чат', 'delete-chat-modal', '<span>Это действие нельзя отменить</span>', [
            new FormButton({
                text: 'Отменить',
                id: 'deleteChatCancelButton',
                callback: () => { alert('Отмена'); },
            }),
            new FormButton({
                text: 'Удалить',
                id: 'delete-chat-button',
                callback: () => { alert('Удаление'); },
            }),
        ]);
    }
}
