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
    data?: Record<string, any>,
}

type OptionsWithoutMethod = {
    timeout?: number // В милисекундах
    headers?: Record<string, string>,
    data?: Record<string, any>,
}

type HTTPMethod = (url: string, options?: OptionsWithoutMethod) => Promise<unknown>

export default class HTTPTransport {
    static queryStringify(data: Record<string, any>) {
        let res = '';
        for (const key of Object.keys(data)) {
            res += `&${key}=${data[key]}`;
        }
        res = `?${res.substring(1)}`;
        return res;
    }

    static get: HTTPMethod = (url, options = {}) => HTTPTransport.request(url, {
        ...options, method: 'GET',
    }, options.timeout);

    static put: HTTPMethod = (url, options = {}) => HTTPTransport.request(url, {
        ...options, method: 'PUT',
    }, options.timeout);

    static post: HTTPMethod = (url, options = {}) => HTTPTransport.request(url, {
        ...options, method: 'POST',
    }, options.timeout);

    static delete: HTTPMethod = (url, options = {}) => HTTPTransport.request(url, {
        ...options, method: 'DELETE',
    }, options.timeout);

    static request(
        url: string,
        options: Options = { method: METHODS.GET },
        timeout = 5000
    ): Promise<unknown> {
        return new Promise((resolve, reject) => {
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
            } else {
                xhr.send(JSON.stringify(options.data));
            }
        });
    }
}
