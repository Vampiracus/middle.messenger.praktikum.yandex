/* eslint-disable import/no-extraneous-dependencies */
import { use, expect } from 'chai';
import { createSandbox, SinonStub } from 'sinon';
import sinonChai from 'sinon-chai';
import HTTPTransport from './fetchAPI';

describe('My first test', () => {
    use(sinonChai);
    const sandbox = createSandbox();
    let request: SinonStub<any>;
    let http: HTTPTransport;

    beforeEach(() => {
        http = new HTTPTransport('');
        request = sandbox.stub(http, 'request' as keyof HTTPTransport).callsFake(() => Promise.resolve({}));
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('shoud be ok', () => {
        const obj = { data: { a: '1' } };

        http.get('', obj);

        expect(request).calledWithMatch('', obj);
    });
});
