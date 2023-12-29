import { Context } from 'koa';
import { getData } from '../../services/get-data.service';

export const getDataController = async (ctx: Context) => {
  const res = await getData();

  console.log(res);
  ctx.body = res;
  ctx.status = 200;
};
