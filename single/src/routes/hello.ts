import { Controller, Request, get } from 'vio';

export default class extends Controller {
    // http://localhost:1337/hello/world/abc
    @get({
        path: 'world/:param?'
    })
    world(req: Request<any>) {
        return {
            title: 'Hello, World!',
            text: 'hello! thank you! thank you very much!',
            param: req.params['param'] || 'empty'
        };
    }
}
