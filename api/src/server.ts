import * as Path from 'path';

import * as express from 'express';

import { Router } from 'vio';

let app = express();

let router = new Router(app, {
    routesRoot: Path.join(__dirname, 'routes'),
    prefix: '/api',
});

let port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
