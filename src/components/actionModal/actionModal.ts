import './actionModal.scss';
import PopupContent from '../popupContent';
import Block from '../../utils/Block';

export default class ActionModal extends PopupContent {
    name: string;

    formClass: string;

    private _hideListener(e: Event) {
        if ((e.target as HTMLElement).firstElementChild?.classList.contains('popup-content__content')) this.setProps({ active: false });
    }

    constructor(
        name: string,
        formClass: string,
        template: string,
        implementation: Record<string, any>,
        children: Block[] = []
    ) {
        template = `
        <form class='action-modal {{formClass}}'>
            <h3> {{name}} </h3>
            ${template}
        </form>
        `;
        implementation = {
            ...implementation, name, formClass,
        };
        super({}, template, implementation, children);
        this.name = name;
        this.formClass = formClass;

        const { events = [] } = this.props;
        this.setProps({
            ...this.props,
            events: [
                ...events,
                ['click', this._hideListener.bind(this)],
            ],
        });
    }
}
