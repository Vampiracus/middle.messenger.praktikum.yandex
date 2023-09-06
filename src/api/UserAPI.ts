import { userAvatarNormalized } from '../utils/fetchAPI';
import BaseAPI from './BaseAPI';

class UserAPI extends BaseAPI {
    constructor() {
        super('/user');
    }

    changeData(data: Omit<User, 'id' | 'avatar'>): Promise<User> {
        return this.http.put('/profile', { data })
            .then(res => JSON.parse(res.response));
    }

    changePassword(data: { oldPassword: string, newPassword: string }): Promise<string> {
        return this.http.put('/password', { data })
            .then(res => res.response);
    }

    read(id: string): Promise<User> {
        return this.http.get(`/${id}`)
            .then(xhr => JSON.parse(xhr.response));
    }

    changeAvatar(data: FormData): Promise<User> {
        return this.http.put('/profile/avatar', {
            isFormData: true,
            data,
        })
            .then(res => userAvatarNormalized(JSON.parse(res.response)));
    }

    getUserIDByLogin(login: string): Promise<number> {
        return this.http.post('/search', { data: { login } })
            .then(xhr => JSON.parse(xhr.response))
            .then(res => {
                if (res.reason !== undefined) return -1;
                res = res.filter((user: User) => user.login === login);
                if (res.length === 0) return -1;
                return res[0].id;
            });
    }

    create = undefined;

    update = undefined;

    delete = undefined;
}

export default new UserAPI();
