import * as Path from 'path';

import * as express from 'express';
import { handlebars } from 'consolidate';
import { Router } from 'vio';

let app = express();

// set default view engine.
app.engine('hbs', handlebars);

// add static file handler and other middleware if needed.
app.use('/static', express.static(Path.join(__dirname, '../static')));

// attach the "endware".
let router = new Router(app, {
    routesRoot: Path.join(__dirname, 'routes'),
    viewsRoot: Path.join(__dirname, '../views'),
    viewsExtension: '.hbs'
});

let port = process.env.PORT || 1337;

app.listen(port);

console.log(`listening on port ${port}...`);
