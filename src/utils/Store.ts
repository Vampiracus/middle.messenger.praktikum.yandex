import EventBus from './eventBus';

type StoreType = {
    user: User,
    chats: Chat[],
    selectedChat: Chat,
}

export const emptyChat = {
    id: -1,
    title: '',
    avatar: '',
    unread_count: 0,
    created_by: 0,
    last_message: {
        user: {
            id: 0,
            first_name: '',
            second_name: '',
            display_name: '',
            phone: '',
            email: '',
            avatar: '',
            login: '',
        },
        time: '',
        content: '',

    },
};

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
    };

    constructor() {
        this._store = {
            user: {
                id: -1,
                first_name: '',
                second_name: '',
                display_name: '',
                email: '',
                login: '',
                phone: '',
                avatar: '',
            },
            chats: [],
            selectedChat: emptyChat,
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
        this._store.selectedChat = chat;
        this._eventBus.emit(Store.EVENTS.SELECTED_CHAT_CHANGED, chat);
    }

    addOnSelectedChatChange(callback: (chat: number) => void) {
        this._eventBus.on(Store.EVENTS.SELECTED_CHAT_CHANGED, callback);
    }

    OffSelectedChatChange(callback: (chat: number) => void) {
        this._eventBus.off(Store.EVENTS.SELECTED_CHAT_CHANGED, callback);
    }
}

const store = new Store();

export default store;
