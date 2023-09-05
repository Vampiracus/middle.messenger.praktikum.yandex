import HTTPTransport from '../utils/fetchAPI';
import BaseAPI from './BaseAPI';

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
    read(options: Options): Promise<XMLHttpRequest> {
        return this.http.get(HTTPTransport.queryStringify(options));
    }

    create = undefined;

    update = undefined;

    delete = undefined;
}

export default new ChatsAPI();
