import store from '../utils/Store';
import HTTPTransport from '../utils/fetchAPI';
import BaseAPI from './BaseAPI';
import UserAPI from './UserAPI';

interface Options {
    offset: number,
    limit: number,
    title?: string,
}

class ChatsAPI extends BaseAPI {
    constructor() {
        super('/chats');
    }

    // Возвращает чаты пользователя
    read(options: Options = {
        title: '', limit: 15, offset: 0,
    }): Promise<XMLHttpRequest> {
        return this.http.get(HTTPTransport.queryStringify(options));
    }

    putChatsIntoApplication() {
        this.read()
            .then(xhr => JSON.parse(xhr.response))
            .then(res => {
                store.chats = res;
            });
    }

    create(data: { title: string }) {
        return this.http.post('/', { data });
    }

    addUser(login: string, chatId: number): Promise<string> {
        return UserAPI.getUserIDByLogin(login)
            .then(id => this.http.put('/users', {
                data: {
                    users: [id],
                    chatId,
                },
            }))
            .then(xhr => JSON.parse(xhr.response))
            .then(res => {
                if (res.reason !== undefined) return 'Логин не найден';
                return 'OK';
            });
    }

    deleteUser(login: string, chatId: number): Promise<string> {
        return UserAPI.getUserIDByLogin(login)
            .then(id => this.http.delete('/users', {
                data: {
                    users: [id],
                    chatId,
                },
            }))
            .then(xhr => {
                if (xhr.response === 'OK') return 'OK';
                return 'Логин не найден';
            });
    }

    update = undefined;

    delete(chatId: number) {
        return this.http.delete('/', { data: { chatId } });
    }

    getToken(chatId: number): Promise<string> {
        return this.http.post(`/token/${chatId}`)
            .then(xhr => JSON.parse(xhr.response).token);
    }
}

export default new ChatsAPI();
