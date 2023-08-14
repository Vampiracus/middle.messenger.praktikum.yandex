import './popupContent.scss';
import Block from '../../utils/Block';
import forHandlebars from '../../utils/otherScripts';

interface IActive { active: boolean }

export default class PopupContent extends Block<IActive> {
    constructor(children: Array<Block>) {
        super({ active: false }, 'div', children);
        this.addClass('popup-content');
    }

    componentDidUpdate(oldProps: IActive): boolean {
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
        const [content, contentObj] = forHandlebars(this.children);
        return Block.compile(`
        <div class='popup-content__content'>
            ${content}
        </div>
        `, contentObj);
    }
}
