import { use, expect } from 'chai';
import sinon, { createSandbox, SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic, SinonStub } from 'sinon';
import sinonChai from 'sinon-chai';
import HTTPTransport from './fetchAPI';

describe('HTTPTransport tests', () => {
    use(sinonChai);
    const sandbox = createSandbox();
    let request: SinonStub<any>;
    let http: HTTPTransport;

    let xhr: SinonFakeXMLHttpRequestStatic;
    const requests: SinonFakeXMLHttpRequest[] = [];

    beforeEach(() => {
        xhr = sinon.useFakeXMLHttpRequest();

        // @ts-ignore
        global.XMLHttpRequest = xhr;

        xhr.onCreate = ((req: SinonFakeXMLHttpRequest) => {
            requests.push(req);
        });

        http = new HTTPTransport('');
    });

    afterEach(() => {
        sandbox.restore();
        requests.length = 0;
    });

    it('should stringify data in a get-request', () => {
        http.get('', {
            data: {
                a: 'a', b: 'b',
            },
        });

        expect(requests[0].url).to.eq(`${HTTPTransport.API_URL}?a=a&b=b`);
    });

    it('should not stringify data in a non-get-request', () => {
        http.put('/path', {
            data: {
                a: 'a', b: 'b',
            },
        });

        expect(requests[0].url).to.eq(`${HTTPTransport.API_URL}/path`);
    });

    it('should put headers into requests', () => {
        http.put('/path', {
            headers: {
                a: 'b', c: 'd',
            },
        });

        expect(requests[0].requestHeaders).to.deep.eq({
            a: 'b', c: 'd', 'Content-Type': 'application/json;charset=utf-8',
        });
    });

    it('should put data in a non-get-request', () => {
        const obj = {
            data: {
                a: 'a',
                b: 'b',
            },
        };
        http.put('/path', obj);

        expect(requests[0].requestBody).to.eq(JSON.stringify(obj.data));
    });

    describe('get, put, post, delete tests', () => {
        beforeEach(() => {
            http = new HTTPTransport('');
            request = sandbox.stub(http, 'request' as keyof HTTPTransport).callsFake(() => Promise.resolve({}));
        });
        it('should call request on get-method', () => {
            const obj = { data: { a: '1' } };

            http.get('', obj);

            expect(request).calledWithMatch('', {
                ...obj, method: 'GET',
            });
        });

        it('should call request on post-method', () => {
            const obj = { data: { a: '1' } };

            http.post('', obj);

            expect(request).calledWithMatch('', {
                ...obj, method: 'POST',
            });
        });

        it('should call request on delete-method', () => {
            const obj = { data: { a: '1' } };

            http.delete('', obj);

            expect(request).calledWithMatch('', {
                ...obj, method: 'DELETE',
            });
        });

        it('should call request on put-method', () => {
            const obj = { data: { a: '1' } };

            http.put('', obj);

            expect(request).calledWithMatch('', {
                ...obj, method: 'PUT',
            });
        });
    });

    describe('queryStringify tests', () => {
        it('should stringify a usual object', () => {
            const res = HTTPTransport.queryStringify({
                a: 'a', b: 'b', c: true, d: 10, e: null, f: undefined,
            });

            expect(res).to.be.eq('?a=a&b=b&c=true&d=10&e=null&f=undefined');
        });

        it('should not stringify a deep object', () => {
            const res = HTTPTransport.queryStringify({ a: { b: 'c' } });

            expect(res).to.be.eq('?a=[object Object]');
        });

        it('should stringify arrays', () => {
            const res = HTTPTransport.queryStringify({ a: [1, 2, '3', true] });

            expect(res).to.be.eq('?a=1,2,3,true');
        });
    });
});
