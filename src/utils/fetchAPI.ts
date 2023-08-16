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

export default class HTTPTransport {
    static queryStringify(data: Record<string, any>) {
        let res = '';
        for (const key of Object.keys(data)) {
            res += `&${key}=${data[key]}`;
        }
        res = `?${res.substring(1)}`;
        return res;
    }

    static get(url: string, options: OptionsWithoutMethod): Promise<unknown> {
        const timeout = options.timeout ? options.timeout : undefined;
        return HTTPTransport.request(url, {
            ...options, method: 'GET',
        }, timeout);
    }

    static put(url: string, options: OptionsWithoutMethod): Promise<unknown> {
        const timeout = options.timeout ? options.timeout : undefined;
        return HTTPTransport.request(url, {
            ...options, method: 'PUT',
        }, timeout);
    }

    static post(url: string, options: OptionsWithoutMethod): Promise<unknown> {
        const timeout = options.timeout ? options.timeout : undefined;
        return HTTPTransport.request(url, {
            ...options, method: 'POST',
        }, timeout);
    }

    static delete(url: string, options: OptionsWithoutMethod): Promise<unknown> {
        const timeout = options.timeout ? options.timeout : undefined;
        return HTTPTransport.request(url, {
            ...options, method: 'DELETE',
        }, timeout);
    }
    // PUT, POST, DELETE

    // options:
    // headers — obj
    // data — obj
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
