import { Controller, Request, get } from 'vio';

export default class Hello extends Controller {
    // http://localhost:1337/
    // http://localhost:1337/desktop
    @get()
    default(req: Request<any>) {
        return {
            title: 'Hello, World!',
            text: 'hello! thank you! thank you very much!'
        };
    }
}
