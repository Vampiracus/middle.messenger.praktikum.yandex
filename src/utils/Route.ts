import Block from './Block';

function renderCurrentPage(query: string, block: Block) {
    const root = document.querySelector(query);
    if (!root) return root;
    root.innerHTML = '';
    root.appendChild(block.element);
    block.componentDidMount();
    return root;
}

export default class Route<T extends Block = any> {
    private _pathRegExp: RegExp;

    private _blockClass: new () => T;

    private _block: Block | null;

    private _props: Record<string, any>;

    private _title: string;

    constructor(pathname: RegExp, view: new () => T, props: Record<string, any>, title: string) {
        this._pathRegExp = pathname;
        this._blockClass = view;
        this._block = null;
        this._title = title;
        this._props = props;
    }

    match(pathname: string) {
        return pathname.match(this._pathRegExp);
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass();
        }
        document.title = this._title;
        renderCurrentPage(this._props.rootQuery, this._block);
    }
}
