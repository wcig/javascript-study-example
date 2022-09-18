// 500 error
import Koa from 'koa'

const app = new Koa();
const main = (ctx) => {
    ctx.throw(500);
};
app.use(main);
app.listen(3000);