import api from '../index';

class Placeholder {
    getUsers() {
        return api.get('/users');
    }
}

export default new Placeholder();
