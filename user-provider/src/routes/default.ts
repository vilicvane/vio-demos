import { Controller, Request, get } from 'vio';
import { DemoPermission, DemoPermissionDescriptor } from '../modules/user-provider';

export default class extends Controller {
    // http://localhost:1337/
    @get({
        permission: DemoPermissionDescriptor.user
    })
    default() {
        return {
            title: 'Hello, World!',
            text: 'hello! thank you! thank you very much!'
        };
    }
    
    // http://localhost:1337/admin
    @get({
        permission: DemoPermissionDescriptor.admin
    })
    admin() {
        return {
            title: 'Hello, Admin!',
            text: 'hello! thank you! thank you very much!'
        };
    }
}
