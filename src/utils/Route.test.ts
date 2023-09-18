/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import Route from './Route';

describe('Route tests', () => {
    class Dummy {
        element = document.createElement('myTag');

        // eslint-disable-next-line class-methods-use-this
        componentDidMount = () => { };
    }

    let route: Route;
    const rootEl = document.querySelector('#app')!;

    beforeEach(() => {
        route = new Route(/^\/test$/, Dummy as any, { rootQuery: '#app' }, 'test');
    });

    it('should match with itself', () => {
        expect(route.match('/test')).to.be.not.null;
    });

    it('should not match with not itself', () => {
        expect(route.match('/test1')).to.be.null;
        expect(route.match('/')).to.be.null;
        expect(route.match('')).to.be.null;
    });

    it('should render', () => {
        route.render();

        expect(rootEl.childElementCount).to.eq(1);
        expect(rootEl.firstElementChild!.tagName).to.eq('MYTAG');
    });

    it('should erase anything in the root before rendering', () => {
        rootEl.appendChild(document.createElement('div'));

        route.render();

        expect(rootEl.innerHTML).to.eq('<mytag></mytag>');
    });

    it('should throw error if root is not found', () => {
        route = new Route(/^\/test$/, Dummy as any, { rootQuery: '#WRONG' }, 'test');

        try {
            route.render();
            expect('Error not thrown').to.be.eq('');
        } catch (err) {
            expect((err as Error).message).to.eq('root not found');
        }
    });
});
