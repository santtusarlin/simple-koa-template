import { Context, Next } from 'koa';
import Router from 'koa-router';

const healthCheckRouter = new Router({ prefix: '/health-check' });

healthCheckRouter.get('/', async (ctx: Context, next: Next) => {
  ctx.status = 200;
  ctx.response.body = {
    ok: true,
  };
  await next();
});

export { healthCheckRouter };
