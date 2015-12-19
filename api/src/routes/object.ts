import { Promise } from 'thenfail';

import { Controller, method } from 'vio';

export default class extends Controller {
    // http://localhost:1337/api/object
    
    @method()
    get() {
        return 'get';
    }
    
    @method()
    post() {
        return 'post';
    }
}
