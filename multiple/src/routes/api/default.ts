import { Controller, get } from 'vio';

export default class extends Controller {
    // http://localhost:1337/api/
    @get()
    default() {
        return 'hello API!';
    }
}
