import Router from '../utils/Router';
import store from '../utils/Store';
import { userAvatarNormalized } from '../utils/fetchAPI';
import BaseAPI from './BaseAPI';

const router = Router;

export interface SigninData {
    login: string;
    password: string;
}

class AuthAPI extends BaseAPI {
    constructor() {
        super('/auth');
    }

    signin(data: SigninData) {
        return this.http.post('/signin', { data });
    }

    signup(data: SignupData) {
        return this.http.post('/signup', { data });
    }

    read(): Promise<User> {
        return this.http.get('/user')
            .then(res => userAvatarNormalized(res as User));
    }

    putUserInfoIntoApplication(user: User | null = null): Promise<unknown> | boolean {
        if (user === null) {
            return this.read()
                .then(res => {
                    const path = window.location.pathname;
                    if (res.id !== undefined) {
                        store.user = res;
                        if (path === '/sign-up' || path === '/') router.go('/messages');
                    } else if (path !== '/sign-up') router.go('/');
                });
        }
        store.user = user;
        return false;
    }

    logout() {
        return this.http.post('/logout');
    }

    create = undefined;

    update = undefined;

    delete = undefined;
}

export default new AuthAPI();
