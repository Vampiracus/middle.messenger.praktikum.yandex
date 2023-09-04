import EventBus from './eventBus';

type StoreType = {
    user: User,
}

class Store {
    private _store: StoreType;

    private _eventBus: EventBus;

    public static EVENTS = {
        // Измененился юзер
        USER_CHANGED: 'user:changed',
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
}

const store = new Store();

export default store;
