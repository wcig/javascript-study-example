// middleware
import Koa from 'koa'

const logger = (ctx, next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    next();
};
const main = async function (ctx) {
    ctx.response.body = 'hello world';
};

const app = new Koa();
app.use(logger);
app.use(main);
app.listen(3000);
