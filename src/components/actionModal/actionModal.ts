import './actionModal.scss';
import PopupContent from '../PopupContent';
import Block from '../../utils/Block';

export default class ActionModal extends PopupContent {
    name: string;

    formClass: string;

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
        implementation = { ...implementation, name, formClass };
        super({}, template, implementation, children);
        this.name = name;
        this.formClass = formClass;
    }

    // render() {
    //     const [childrenPlug, childrenObj] = forHandlebars(this.children);
    //     return Block.compile(`
    //     <div class='popup-content__content'>
    //         <form class='action-modal {{formClass}}'>
    //             <h3> {{name}} </h3>
    //             {{{HTMLcontent}}}
    //             ${childrenPlug}
    //         </form>
    //     </div>
    //     `, {
    //         name: this.name,
    //         formClass: this.formClass,
    //         HTMLcontent: this.HTMLcontent,
    //         ...childrenObj,
    //     });
    // }
}
