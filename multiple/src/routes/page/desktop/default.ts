import { Controller, get } from 'vio';

export default class extends Controller {
    // http://localhost:1337/
    // http://localhost:1337/desktop
    @get()
    default() {
        return {
            title: 'Hello, World!',
            text: 'hello! thank you! thank you very much!'
        };
    }
}
