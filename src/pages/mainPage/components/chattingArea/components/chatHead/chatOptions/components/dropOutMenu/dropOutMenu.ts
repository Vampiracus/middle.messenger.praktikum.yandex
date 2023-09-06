import MyA from '../../../../../../../../../components/myA/myA';
import Block from '../../../../../../../../../utils/Block';
import './dropOutMenu.scss';

interface IDropOut {
    showAddUser: EventListener,
    showDelUser: EventListener,
    showDelChat: EventListener,
    events?: Array<[string, EventListener]>,
}

export default class DropOutMenu extends Block<IDropOut> {
    constructor(props: IDropOut) {
        super({
            ...props,
            events: [
                ['mouseout', () => { this.hide(); }],
            ],
        }, 'div', [
            new MyA({
                text: 'Добавить пользователя',
                events: [
                    ['click', props.showAddUser],
                ],
            }),
            new MyA({
                text: 'Удалить пользователя',
                events: [
                    ['click', props.showDelUser],
                ],
            }),
            new MyA({
                text: 'Удалить чат',
                events: [
                    ['click', props.showDelChat],
                ],
            }),
        ]);
        this.addClass('drop-out-menu');
        this.addClass('drop-out-menu__hidden');
    }

    hide() {
        this.addClass('drop-out-menu__hidden');
    }

    show() {
        this.removeClass('drop-out-menu__hidden');
    }

    render() {
        // <span> Добавить пользователя </span>
        return Block.compile(`
        <div> <div class='drop-out-menu__option-picture drop-out-menu__option-picture_large'>+</div> {{{addUserA}}} </div>
        <div> <div class='drop-out-menu__option-picture'>x</div> {{{deleteUserA}}} </div>
        <div> <div class='drop-out-menu__option-picture drop-out-menu__option-picture_red'>x</div> {{{deleteChatA}}} </div>
        `, {
            addUserA: this.children[0],
            deleteUserA: this.children[1],
            deleteChatA: this.children[2],
        });
    }
}
