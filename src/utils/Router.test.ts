/* eslint-disable max-classes-per-file */
import { expect } from 'chai';
import { RouterClass } from './Router';
import Route from './Route';

describe('Router tests', () => {
    class Dummy {
        element = document.createElement('myTag');

        // eslint-disable-next-line class-methods-use-this
        componentDidMount = () => { };
    }

    let Router: RouterClass;

    beforeEach(() => {
        Router = new RouterClass('#app');
    });

    it('should add new route on use()', () => {
        Router.use(/^\/test$/, Dummy as any);

        expect(Router.routes.length).to.eq(1);
    });

    it('should return route on getRoute', () => {
        Router.use(/^\/test$/, Dummy as any);

        const a = Router.getRoute('/test');

        expect(a).to.not.eq(undefined);
    });

    it('should return undefined on getRoute if route was not found', () => {
        Router.use(/^\/test$/, Dummy as any);

        const a = Router.getRoute('/wrong');

        expect(a).to.eq(undefined);
    });

    describe('Render tests', () => {
        let renderCalls = 0;
        const func = () => { renderCalls += 1; };
        class FakeRoute {
            path: string;

            constructor(path: string) {
                this.path = path;
            }

            render = func;

            // eslint-disable-next-line class-methods-use-this
            match(path: string) {
                return this.path === path;
            }
        }

        beforeEach(() => {
            Router = new RouterClass('#app');
            renderCalls = 0;
        });

        it('should call render of current route on start()', () => {
            const route = new FakeRoute('/');
            Router.routes.push(route as unknown as Route);

            Router.start();

            expect(renderCalls).to.eq(1);
        });

        it('should call render on go()', () => {
            const route = new FakeRoute('/test');
            Router.routes.push(route as unknown as Route);
            Router.start();

            Router.go('/test');

            expect(renderCalls).to.eq(1);
        });
    });
});
