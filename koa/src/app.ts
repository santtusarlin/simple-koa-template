import Koa from 'koa';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';

import { logRequestAndResponse } from './middlewares/request-response-logger.middleware';

import { healthCheckRouter } from './routers/health-check.router';
import { dataRouter } from './routers/data.router';

const app = new Koa();

app.use(json());
app.use(bodyParser());
app.use(
  cors({
    maxAge: 0,
  })
);
app.use(logRequestAndResponse);

app.use(healthCheckRouter.routes()).use(healthCheckRouter.allowedMethods());
app.use(dataRouter.routes()).use(dataRouter.allowedMethods());

export { app };
