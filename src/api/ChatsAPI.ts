import store from '../utils/Store';
import HTTPTransport, { avatarNormalized } from '../utils/fetchAPI';
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
    }): Promise<Chat[]> {
        return this.http.get(HTTPTransport.queryStringify(options))
            .then(res => res.map((chat: Chat) => ({
                ...chat,
                avatar: avatarNormalized(chat.avatar),
            })))
            .catch(err => { console.log(err); }) as Promise<Chat[]>;
    }

    putChatsIntoApplication() {
        this.read()
            .then(res => {
                store.chats = res;
            })
            .catch(err => { console.log(err); });
    }

    create(data: { title: string }) {
        return this.http.post('/', { data })
            .catch(err => { console.log(err); });
    }

    addUser(login: string, chatId: number): Promise<string> {
        return UserAPI.getUserIDByLogin(login)
            .then(id => this.http.put('/users', {
                data: {
                    users: [id],
                    chatId,
                },
            }))
            .then(res => {
                if (res.ok === 'OK') return 'OK';
                return res;
            })
            .then(res => {
                if (res === 'OK') return res;
                if (res.reason !== undefined) return 'Логин не найден';
                return 'OK';
            })
            .catch(err => { console.log(err); }) as Promise<string>;
    }

    deleteUser(login: string, chatId: number): Promise<string> {
        return UserAPI.getUserIDByLogin(login)
            .then(id => this.http.delete('/users', {
                data: {
                    users: [id],
                    chatId,
                },
            }))
            .then(res => {
                if (res.ok === 'OK') return 'OK';
                return 'Логин не найден';
            })
            .catch(err => { console.log(err); }) as Promise<string>;
    }

    update = undefined;

    delete(chatId: number): Promise<Record<string, any>> {
        return this.http.delete('/', { data: { chatId } })
            .catch(err => { console.log(err); }) as Promise<Record<string, any>>;
    }

    getToken(chatId: number): Promise<string> {
        return this.http.post(`/token/${chatId}`)
            .then(res => res.token)
            .catch(err => { console.log(err); });
    }

    changeAvatar(data: FormData): Promise<Chat> {
        return this.http.put('/avatar', {
            isFormData: true,
            data,
        })
            .then(res => ({
                ...res,
                avatar: avatarNormalized(res.avatar),
            }))
            .catch(err => { console.log(err); }) as Promise<Chat>;
    }
}

export default new ChatsAPI();
