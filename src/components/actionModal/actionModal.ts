import './actionModal.scss';
import PopupContent from '../PopupContent';
import Block from '../../utils/Block';
import forHandlebars from '../../utils/otherScripts';

export default class ActionModal extends PopupContent {
    name: string;

    formClass: string;

    HTMLcontent: string;

    constructor(name: string, formClass: string, HTMLcontent: string = '', children: Block[] = []) {
        super(children);
        this.name = name;
        this.formClass = formClass;
        this.HTMLcontent = HTMLcontent;
    }

    render() {
        const [childrenPlug, childrenObj] = forHandlebars(this.children);
        return Block.compile(`
        <div class='popup-content__content'>
            <form class='action-modal {{formClass}}'>
                <h3> {{name}} </h3>
                {{{HTMLcontent}}}
                ${childrenPlug}
            </form>
        </div>
        `, {
            name: this.name,
            formClass: this.formClass,
            HTMLcontent: this.HTMLcontent,
            ...childrenObj,
        });
    }
}
