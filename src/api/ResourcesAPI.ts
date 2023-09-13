import BaseAPI from './BaseAPI';

class UserAPI extends BaseAPI {
    constructor() {
        super('/resources');
    }

    read(path: string) {
        return this.http.get(path)
            .catch(err => { console.log(err); });
    }

    create = undefined;

    update = undefined;

    delete = undefined;
}

export default new UserAPI();
