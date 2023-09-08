import Router from '../utils/Router';
import store from '../utils/Store';
import { userAvatarNormalized } from '../utils/fetchAPI';
import BaseAPI from './BaseAPI';
import ChatsAPI from './ChatsAPI';

const router = Router;

export interface SigninData {
    login: string;
    password: string;
}

class AuthAPI extends BaseAPI {
    constructor() {
        super('/auth');
    }

    signin(data: SigninData): Promise<Record<string, any>> {
        return this.http.post('/signin', { data })
            .catch(err => { console.log(err); }) as Promise<Record<string, any>>;
    }

    signup(data: SignupData): Promise<Record<string, any>> {
        return this.http.post('/signup', { data })
            .catch(err => { console.log(err); }) as Promise<Record<string, any>>;
    }

    read(): Promise<User> {
        return this.http.get('/user')
            .then(res => userAvatarNormalized(res as User))
            .catch(err => { console.log(err); }) as Promise<User>;
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
                })
                .then(() => {
                    if (store.user.id !== -1) ChatsAPI.putChatsIntoApplication();
                })
                .catch(err => { console.log(err); });
        }
        store.user = user;
        return false;
    }

    logout() {
        return this.http.post('/logout')
            .catch(err => { console.log(err); });
    }

    create = undefined;

    update = undefined;

    delete = undefined;
}

export default new AuthAPI();
