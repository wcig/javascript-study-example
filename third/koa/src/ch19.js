// cookie
import Koa from "koa";

const main = (ctx) => {
    const n = Number(ctx.cookies.get('view') || 0) + 1;
    ctx.cookies.set('view', n);
    ctx.response.body = n + ' views';
}

const app = new Koa();
app.use(main);
app.listen(3000);
