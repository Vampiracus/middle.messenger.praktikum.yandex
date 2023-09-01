import './deleteChatModal.scss';
import ActionModal from '../../../../components/actionModal';
import FormButton from '../../../../components/formButton';

export default class DeleteChatModal extends ActionModal {
    constructor() {
        const kids = [
            new FormButton({
                text: 'Отменить',
                id: 'deleteChatCancelButton',
                events: [['click', e => { e.preventDefault(); this.setProps({ active: false }); }]],
            }),
            new FormButton({
                text: 'Удалить',
                id: 'delete-chat-button',
                events: [['click', e => { e.preventDefault(); this.setProps({ active: false }); }]],
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
