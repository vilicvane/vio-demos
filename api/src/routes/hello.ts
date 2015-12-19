import { Promise } from 'thenfail';

import { Controller, Request, get } from 'vio';

export default class extends Controller {
    // http://localhost:1337/api/hello/world/abc
    @get({
        path: 'world/:param'
    })
    world(req: Request<any>) {
        let str: string = req.params['param'];
        str = str.split('').reverse().join('');
        
        // try it with some delay.
        
        return Promise
            .resolve(str)
            .delay(1000);
    }
}
