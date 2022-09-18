// log
import Koa from 'koa'

const main = async function (ctx) {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    ctx.response.body = 'hello world';
};
const app = new Koa();
app.use(main);
app.listen(3000);
