/* eslint-disable class-methods-use-this */
import { expect } from 'chai';
import proxyquire from 'proxyquire';

let conCalls = 0;
let addOnCloseCalls = 0;
let addOnOpenCalls = 0;
class DummyMessageAPI {
    constructor() {
        conCalls += 1;
    }

    addOnClose() {
        addOnCloseCalls += 1;
    }

    addOnOpen() {
        addOnOpenCalls += 1;
    }
}

// import { StoreClass, emptyChat, emptyUser } from './Store';
const {
    StoreClass, emptyChat, emptyUser,
} = proxyquire.noCallThru().load('./Store', { '../api/MessageAPI': DummyMessageAPI });

describe('Store tests', () => {
    // @ts-ignore
    let store: StoreClass;
    let callbackCount = 0;
    const callback = () => { callbackCount += 1; };

    beforeEach(() => {
        store = new StoreClass();
        callbackCount = 0;
        conCalls = 0;
        addOnCloseCalls = 0;
        addOnOpenCalls = 0;
    });

    describe('user tests', () => {
        it('should let get user', () => {
            expect(() => store.user).to.not.throw();
        });

        it('should change user when a new value is set', () => {
            store.user = {
                ...store.user, id: 2,
            };

            expect(store.user.id).to.eq(2);
        });

        it('should make a copy of the set value and not change, when original object changes', () => {
            const obj = {
                ...emptyUser, id: 0,
            };
            store.user = obj;

            obj.id = 1;

            expect(store.user.id).to.eq(0);
        });

        it('should call callback when new value is set', () => {
            const obj = { ...emptyUser };

            store.addOnUserChange(callback);
            store.user = obj;

            expect(callbackCount).to.eq(1);
        });
    });

    describe('chats tests', () => {
        it('should let get chats', () => {
            expect(() => store.chats).to.not.throw();
        });

        it('should change chats when a new value is set', () => {
            store.chats = [{
                ...emptyChat, id: 1,
            }];

            expect(store.chats.length).to.eq(1);
            expect(store.chats[0].id).to.eq(1);
        });

        it('should make a copy of the set value and not change, when original object changes', () => {
            const arr = [{ ...emptyChat }];

            store.chats = arr;
            arr.push({ ...emptyChat });

            expect(store.chats.length).to.eq(1);
        });

        it('should call callback when new value is set', () => {
            const arr = [{ ...emptyChat }];

            store.addOnChatsChange(callback);
            store.chats = arr;

            expect(callbackCount).to.eq(1);
        });
    });

    describe('selected chat tests', () => {
        it('should let get selected chat', () => {
            expect(() => store.selectedChat).to.not.throw();
        });

        it('should change selected chat when a new value is set', () => {
            const obj = {
                ...emptyChat, id: 1,
            };

            store.selectedChat = obj;

            expect(store.selectedChat.id).to.eq(1);
        });

        it('should make a copy of the set value and not change, when original object changes', () => {
            const obj = {
                ...emptyChat, id: 1,
            };

            store.selectedChat = obj;
            obj.id = 2;

            expect(store.selectedChat.id).to.eq(1);
        });

        it('should call callback when new value is set', () => {
            const obj = {
                ...emptyChat, id: 1,
            };

            store.addOnSelectedChatChange(callback);
            store.selectedChat = obj;

            expect(callbackCount).to.eq(1);
        });

        it('should let unsubscribe from change-selected-chats-event', () => {
            const obj = {
                ...emptyChat, id: 1,
            };
            store.addOnSelectedChatChange(callback);

            store.OffSelectedChatChange(callback);
            store.selectedChat = obj;

            expect(callbackCount).to.eq(0);
        });
    });

    describe('curSocket tests', () => {
        it('should let get current socket', () => {
            store.initSocket();

            expect(() => store.curSocket).to.not.throw();
        });

        it('should throw error on init if a socket already exists', () => {
            store.initSocket();

            expect(() => { store.initSocket(); }).to.throw();
        });

        it('should subscribe on closing current socket [to erase it from the store] on init', () => {
            store.initSocket();

            expect(addOnCloseCalls).to.eq(1);
        });

        it('should subscribe on opening current socket [to tell its subscribers about that] on init', () => {
            store.initSocket();

            expect(addOnOpenCalls).to.eq(1);
        });

        it('should let subscribe on current socket opening', () => {
            expect(() => { store.addOnSocketInit(() => {}); }).to.not.throw();
        });

        it('should let subscribe on current socket closing', () => {
            expect(() => { store.addOnSocketInit(() => {}); }).to.not.throw();
        });

        it('should let unsubscribe on current socket opening', () => {
            store.addOnSocketInit(() => {});

            expect(() => { store.offSocketInit(() => {}); }).to.not.throw();
        });

        it('should let unsubscribe on current socket closing', () => {
            store.addOnSocketClosed(() => {});

            expect(() => { store.offSocketClosed(() => {}); }).to.not.throw();
        });
    });

    describe('notification tests', () => {
        it('should let get notification', () => {
            expect(() => store.user).to.not.throw();
        });

        it('should change notification when a new value is set', () => {
            store.notification = '123';

            expect(store.notification).to.eq('123');
        });

        it('should call callback when new value is set', () => {
            store.addOnNotificationChanged(callback);
            store.notification = '123';

            expect(callbackCount).to.eq(1);
        });
    });
});
