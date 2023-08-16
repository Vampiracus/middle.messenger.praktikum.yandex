import './popupContent.scss';
import Block from '../../utils/Block';

interface IPopup {
    active: boolean,
    template: string,
    implementation: Record<string, any>,
}

export default class PopupContent<T extends Record<string, any> = any> extends Block<IPopup & T> {
    constructor(
        props: T,
        template: string,
        implementation: Record<string, any>,
        children?: Array<Block>
    ) {
        super({
            active: false,
            template,
            implementation,
            ...props,
        }, 'div', children);
        this.addClass('popup-content');
    }

    componentDidUpdate(oldProps: { active: boolean }): boolean {
        if (this.props.active) {
            this.addClass('popup-content_active');
        } else {
            this.removeClass('popup-content_active');
        }
        if (oldProps.active !== this.props.active) {
            return true;
        }
        return false;
    }

    render() {
        return Block.compile(`
        <div class='popup-content__content'>
            ${this.props.template}
        </div>
        `, this.props.implementation);
    }
}
