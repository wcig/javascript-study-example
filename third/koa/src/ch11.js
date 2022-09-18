// compose multi middlewares
import Koa from 'koa'
import compose from 'koa-compose'

const logger = (ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    next();
};
const main = async function (ctx) {
    ctx.response.body = 'hello world';
};

const app = new Koa();
const middlewares = compose([logger, main]);
app.use(middlewares);
app.listen(3000);
