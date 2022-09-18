// hello world
import Koa from 'koa'

const app = new Koa();
app.use(async ctx => {
    ctx.response.body = 'hello world';
})
app.listen(3000);
