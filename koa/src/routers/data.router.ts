import Router from 'koa-router';
import { getDataController } from '../controllers/data/get-data.controller';

const dataRouter = new Router({ prefix: '/data' });

dataRouter.get('/', getDataController);

export { dataRouter };
