import * as Path from 'path';

import * as express from 'express';
import { handlebars } from 'consolidate';
import { Router } from 'vio';

let app = express();

app.engine('hbs', handlebars);

app.use('/static', express.static(Path.join(__dirname, '../static')));

let router = new Router(app, {
    routesRoot: Path.join(__dirname, 'routes'),
    viewsRoot: Path.join(__dirname, '../views'),
    viewsExtension: 'hbs'
});

app.listen(1337);
