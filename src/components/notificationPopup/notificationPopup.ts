import store from '../../utils/Store';
import ActionModal from '../actionModal/actionModal';
import FormButton from '../formButton/formButton';

const rootSelector = 'body';

export default class NotificationPopup extends ActionModal {
    constructor() {
        const okButton = new FormButton({
            text: 'OK',
            id: 'notificationOkButton',
        });

        super('Уведомление', '', `
        <span style="color: red; text-shadow: 1px 1px black">{{{error}}}</span>
        <span>{{{notification}}}</span>
        {{{okButton}}}
        `, {
            error: '',
            notification: '',
            okButton,
        }, [okButton]);

        this.setProps({
            implementation: {
                ...this.props.implementation,
                error: '',
                notification: '',
                okButton,
            },
            active: false,
        });

        this.children[0].setProps({
            events: [
                ['click', (e: Event) => {
                    e.preventDefault();
                    this.setProps({ active: false });
                }],
            ],
        });

        const root = document.querySelector(rootSelector);
        root?.appendChild(this.element);
    }

    onNotificationChanged() {
        const newval = store.notification;
        if (newval.length === 0) {
            this.setProps({
                implementation: {
                    ...this.props.implementation,
                    error: '',
                    notification: '',
                },
                active: false,
            });
        } else if (newval[0] === '@') {
            this.setProps({
                implementation: {
                    ...this.props.implementation,
                    notification: '',
                    error: newval.substring(1),
                },
                active: true,
            });
        } else {
            this.setProps({
                implementation: {
                    ...this.props.implementation,
                    error: '',
                    notification: newval,
                },
                active: true,
            });
        }
    }

    start() {
        store.addOnNotificationChanged(this.onNotificationChanged.bind(this));
    }
}
