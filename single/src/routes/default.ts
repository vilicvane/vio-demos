import { Controller, Request, get } from 'vio';

export default class extends Controller {
    // http://localhost:1337/
    @get()
    default() {
        return {
            title: 'Hello, World!',
            text: 'hello! thank you! thank you very much!'
        };
    }
}
