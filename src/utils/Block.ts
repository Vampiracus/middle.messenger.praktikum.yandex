import { v4 as makeUUID } from 'uuid';
import Handlebars from 'handlebars';
import EventBus from './EventBus';

export default abstract class Block<P extends Record<string, any> = any> {
    /**
     * Названия событий
     */
    public static EVENTS = {
        // Создание элемента
        INIT: 'init',
        // Элемент появился в DOM
        FLOW_CDM: 'flow:component-did-mount',
        // Элемент обновился
        FLOW_CDU: 'flow:component-did-update',
        // Элемент создан
        FLOW_RENDER: 'flow:render',
    };

    private _element: HTMLElement | null = null;

    protected props: P;

    // eslint-disable-next-line no-use-before-define
    protected children: Array<Block> = [];

    private _id: string;

    _meta: {tagName: string, props: P};

    protected eventBus: () => EventBus;

    /**
     * @param tagName имя блока
     * @param props свойства блока
     */
    constructor(props: P, tagName: string, children?: Array<Block>) {
        const eventBus = new EventBus();
        this._meta = {
            tagName,
            props,
        };

        this.props = this._makePropsProxy(props);
        this._id = makeUUID();
        if (children) {
            this.children = children;
        }

        this.eventBus = () => eventBus;
        this._registerEvents();
        eventBus.emit(Block.EVENTS.INIT);
    }

    /**
     * Создать прокси для поданного объекта
     */
    // eslint-disable-next-line class-methods-use-this
    private _makePropsProxy(props: P) {
        return new Proxy(props, {
            deleteProperty() {
                throw new Error('Нет доступа');
            },
        });
    }

    _registerEvents() {
        this.eventBus().on(Block.EVENTS.INIT, this.init.bind(this));
        this.eventBus().on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        this.eventBus().on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
        this.eventBus().on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    }

    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    _componentDidMount() {
        this.componentDidMount();
    }

    // Переопределяемое
    componentDidMount() {}

    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    // Если компонент изменился, надо перерендерить
    _componentDidUpdate(oldProps: P) {
        const response = this.componentDidUpdate(oldProps);
        if (response) {
            this._render();
        }
    }

    /**
     * Метод должен возвращать boolean: надо ли перерисовывать компонент
     */
    componentDidUpdate(oldProps: P): boolean {
        if (oldProps !== this.props) {
            return true;
        }
        return false;
    }

    setProps = (nextProps: P) => {
        const oldProps = {};
        Object.assign(oldProps, this.props);

        Object.assign(this.props, nextProps);
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps);
    };

    get element(): HTMLElement {
        if (!this._element) {
            throw new Error('Попытка получить элемент, пока он не определен');
        }
        return this._element;
    }

    private _render() {
        const block = this.render();
        if (!block) return;

        if (!this._element) {
            throw new Error('Попытка создать элемент, когда он ещё не определен');
        }
        this._element.innerHTML = '';
        this._element.appendChild(block);
    }

    static compile(
        template: string,
        props: Record<string, Block | string | undefined>
    ): DocumentFragment {
        const propsAndStubs: Record<string, any> = { ...props };

        Object.entries(props).forEach(([key, child]) => {
            if (child instanceof Block) {
                propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
            }
        });

        const fragment = document.createElement('template') as HTMLTemplateElement;

        fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

        Object.values(props).forEach(child => {
            if (child instanceof Block) {
                const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
                if (stub) {
                    stub.replaceWith(child.element);
                }
            }
        });

        return fragment.content;
    }

    // Переопределяемый метод
    render(): void | DocumentFragment {}

    // eslint-disable-next-line class-methods-use-this
    _createDocumentElement(tagName: string) {
        return document.createElement(tagName);
    }

    /**
     * Добавить элементу класс
     */
    addClass(className: string) {
        if (!this._element) {
            throw new Error('Попытка добавить класс в элемент, когда он ещё не определен');
        }
        this._element.classList.add(className);
    }

    /**
     * Изменить элементу атрибут
     */
    setAttribute(attribute: string, value: string) {
        if (!this._element) {
            throw new Error('Попытка добавить класс в элемент, когда он ещё не определен');
        }
        this._element.setAttribute(attribute, value);
    }

    /**
     * Удалить элементу класс
     */
    removeClass(className: string) {
        if (!this._element) {
            throw new Error('Попытка убрать класс из элемента, когда он ещё не определен');
        }
        this._element.classList.remove(className);
    }
}
