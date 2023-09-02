export default class EventBus {
    protected listeners: Record<string, Array<Function>>;

    constructor() {
        this.listeners = {};
    }

    /**
     * Подписаться на событие
     * @param event название события
     * @param callback выполняемая функция
     */
    on(event: string, callback: Function) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    /**
     * Отписаться от события
     * @param event название события
     * @param callback выполняемая функция (проверяется ссылка на функцию)
     */
    off(event: string, callback: Function) {
        if (!this.listeners[event]) {
            throw new Error(`Попытка отписки от несуществующего события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        );
    }

    /**
     * Оповестить о событии, аргументы могут быть чем угодно
     * @param event название события
     * @param args любые аргументы события
     */
    emit(event: string, ...args: any) {
        if (!this.listeners[event]) {
            return;
        }

        this.listeners[event].forEach(listener => {
            listener(...args);
        });
    }
}
