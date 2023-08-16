import './deleteChatModal.scss';
import ActionModal from '../../../../components/ActionModal';
import FormButton from '../../../../components/FormButton';

export default class DeleteChatModal extends ActionModal {
    constructor() {
        const kids = [
            new FormButton({
                text: 'Отменить',
                id: 'deleteChatCancelButton',
                callback: e => { e.preventDefault(); this.setProps({ active: false }); },
            }),
            new FormButton({
                text: 'Удалить',
                id: 'delete-chat-button',
                callback: e => { e.preventDefault(); this.setProps({ active: false }); },
            }),
        ];
        super('Удалить чат', 'delete-chat-modal', `
        <span>Это действие нельзя отменить</span>
        {{{cancelButton}}}
        {{{deleteButton}}}
        `, {
            cancelButton: kids[0], deleteButton: kids[1],
        }, kids);
    }
}
