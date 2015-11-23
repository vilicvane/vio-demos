import { Controller, get } from 'vio';

export default class DefaultController extends Controller {
    @get()
    static default() {
        return {
            title: 'Hello, TypeScript!',
            content: 'Greetings from VIO.'
        };
    }
}
