import MessageAPI from '../api/MessageAPI';
import EventBus from './eventBus';

export const emptyUser: Readonly<User> = {
    id: -1,
    first_name: '',
    second_name: '',
    display_name: '',
    phone: '',
    email: '',
    avatar: '',
    login: '',
};

export const emptyChat: Readonly<Chat> = {
    id: -1,
    title: '',
    avatar: '',
    unread_count: 0,
    created_by: 0,
    last_message: {
        user: emptyUser,
        time: '',
        content: '',
    },
};

type StoreType = {
    user: User,
    chats: Chat[],
    selectedChat: Chat,
    curSocket: MessageAPI | null,
}

class Store {
    private _store: StoreType;

    private _eventBus: EventBus;

    public static EVENTS = {
        // Измененился юзер
        USER_CHANGED: 'user:changed',
        // Измененились чаты
        CHATS_CHANGED: 'chats:changed',
        // Измененился выбранный чат
        SELECTED_CHAT_CHANGED: 'chats:selected-changed',
        // Проинициализировался сокет
        SOCKET_INIT: 'socket:init',
        // Cокет закрылся
        SOCKET_CLOSED: 'socket:closed',
    };

    constructor() {
        this._store = {
            user: emptyUser,
            chats: [],
            selectedChat: emptyChat,
            curSocket: null,
        };
        this._eventBus = new EventBus();
    }

    get user() : User {
        return this._store.user;
    }

    set user(user: User) {
        this._store.user = { ...user };
        this._eventBus.emit(Store.EVENTS.USER_CHANGED, user);
    }

    addOnUserChange(callback: (user: User) => void) {
        this._eventBus.on(Store.EVENTS.USER_CHANGED, callback);
    }

    get chats() : Chat[] {
        return this._store.chats;
    }

    set chats(chats: Chat[]) {
        this._store.chats = [...chats];
        this._eventBus.emit(Store.EVENTS.CHATS_CHANGED, chats);
    }

    addOnChatsChange(callback: (chats: Chat[]) => void) {
        this._eventBus.on(Store.EVENTS.CHATS_CHANGED, callback);
    }

    get selectedChat() {
        return this._store.selectedChat;
    }

    set selectedChat(chat: Chat) {
        this._store.selectedChat = { ...chat };
        this._eventBus.emit(Store.EVENTS.SELECTED_CHAT_CHANGED, chat);
    }

    addOnSelectedChatChange(callback: (chat: Chat) => void) {
        this._eventBus.on(Store.EVENTS.SELECTED_CHAT_CHANGED, callback);
    }

    OffSelectedChatChange(callback: (chat: number) => void) {
        this._eventBus.off(Store.EVENTS.SELECTED_CHAT_CHANGED, callback);
    }

    get curSocket(): MessageAPI | null {
        return this._store.curSocket;
    }

    initSocket(chat: Chat, token: string) {
        if (this._store.curSocket !== null) throw new Error('There may only be one socket');

        this._store.curSocket = new MessageAPI(chat, token, this.user);
        this._store.curSocket.addOnClose(() => {
            this._store.curSocket = null;
            this._eventBus.emit(Store.EVENTS.SOCKET_CLOSED);
        });
        this._store.curSocket.addOnOpen(() => {
            this._eventBus.emit(Store.EVENTS.SOCKET_INIT);
        });
    }

    addOnSocketInit(callback: () => void) {
        this._eventBus.on(Store.EVENTS.SOCKET_INIT, callback);
    }

    addOnSocketClosed(callback: () => void) {
        this._eventBus.on(Store.EVENTS.SOCKET_CLOSED, callback);
    }

    // User must unsubscribe on their own
    offSocketInit(callback: () => void) {
        this._eventBus.off(Store.EVENTS.SOCKET_INIT, callback);
    }

    // User must unsubscribe on their own
    offSocketClosed(callback: () => void) {
        this._eventBus.off(Store.EVENTS.SOCKET_CLOSED, callback);
    }
}

const store = new Store();

export default store;

export { Store as StoreClass };
