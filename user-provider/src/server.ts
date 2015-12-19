import * as Path from 'path';

import * as express from 'express';
import { handlebars } from 'consolidate';

import { Router } from 'vio';

import { DemoUserProvider } from './modules/user-provider';

let app = express();

app.engine('hbs', handlebars);

let router = new Router(app, {
    routesRoot: Path.join(__dirname, 'routes'),
    viewsRoot: Path.join(__dirname, '../views'),
    viewsExtension: '.hbs'
});

// set up user provider.
router.userProvider = new DemoUserProvider();

let port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
