import Block from './Block';
import Route from './Route';

class Router {
    public routes: Route[];

    public history: History;

    private _currentRoute: null | Route;

    private _rootQuery: string;

    constructor(rootQuery: string) {
        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;
    }

    use<T extends Block>(pathname: RegExp, block: new () => T) {
        const route = new Route(pathname, block, { rootQuery: this._rootQuery });
        this.routes.push(route);
        return this;
    }

    getRoute(pathname: string) {
        return this.routes.find(route => route.match(pathname));
    }

    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }

        this._currentRoute = route;
        this._currentRoute.render();
    }

    start() {
        window.onpopstate = event => {
            this._onRoute((event.currentTarget as Window).location.pathname);
        };
        this._onRoute(window.location.pathname);
    }

    go(pathname: string) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }
}

export default new Router('#app');
