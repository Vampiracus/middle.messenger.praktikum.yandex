import Router from './Router';

export const METHODS = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELTE',
};

type Options = {
    method: string,
    timeout?: number // В милисекундах
    headers?: Record<string, string>,
        data?: Record<string, any> | FormData,
    isFormData?: boolean,
}

type OptionsWithoutMethod = Omit<Options, 'method'>;

type HTTPMethod = (path: string, options?: OptionsWithoutMethod) =>
    Promise<Record<string, any>>;

export default class HTTPTransport {
    static API_URL = 'https://ya-praktikum.tech/api/v2';

    protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
    }

    static queryStringify(data: Record<string, any>) {
        let res = '';
        for (const key of Object.keys(data)) {
            res += `&${key}=${data[key]}`;
        }
        res = `?${res.substring(1)}`;
        return res;
    }

    get: HTTPMethod = (path, options = {}) => HTTPTransport.request(this.endpoint + path, {
        ...options, method: 'GET',
    }, options.timeout);

    put: HTTPMethod = (path, options = {}) => HTTPTransport.request(this.endpoint + path, {
        ...options, method: 'PUT',
    }, options.timeout);

    post: HTTPMethod = (path, options = {}) => HTTPTransport.request(this.endpoint + path, {
        ...options, method: 'POST',
    }, options.timeout);

    delete: HTTPMethod = (path, options = {}) => HTTPTransport.request(this.endpoint + path, {
        ...options, method: 'DELETE',
    }, options.timeout);

    static request(
        url: string,
        options: Options = { method: METHODS.GET },
        timeout = 5000
    ): Promise<Record<string, any>> {
        return new Promise<XMLHttpRequest>((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            if (options.method === METHODS.GET && options.data) {
                xhr.open(options.method, url + HTTPTransport.queryStringify(options.data));
            } else {
                xhr.open(options.method, url);
            }

            if (options.headers) {
                for (const [name, header] of Object.entries(options.headers)) {
                    xhr.setRequestHeader(name, header);
                }
            }
            xhr.withCredentials = true;
            if (!options.isFormData) xhr.setRequestHeader('Content-Type', 'application/json');

            // eslint-disable-next-line func-names
            xhr.onload = function () {
                resolve(xhr);
            };

            const handleError = (err: ProgressEvent) => {
                reject(err);
            };

            xhr.timeout = timeout;

            xhr.onabort = handleError;
            xhr.onerror = handleError;
            xhr.ontimeout = handleError;

            if (options.method === METHODS.GET || !options.data) {
                xhr.send();
            } else if (options.isFormData && options.data !== undefined) {
                xhr.send(options.data as FormData);
            } else {
                xhr.send(JSON.stringify(options.data));
            }
        })
            .then(xhr => {
                if (xhr.response === 'OK') return { ok: 'OK' };
                return JSON.parse(xhr.response);
            }) as Promise<Record<string, any>>;
    }
}

export function avatarNormalized(avatar: string): string {
    return `${HTTPTransport.API_URL}/resources${avatar}`;
}

export function userAvatarNormalized(user: User): User {
    return {
        ...user,
        avatar: user.avatar ? avatarNormalized(user.avatar) : '/photoCamera.png',
    };
}
