// simple router
import Koa from 'koa'

const app = new Koa();
const main = async function (ctx) {
    if (ctx.request.path === '/') {
        ctx.response.type = 'json';
        ctx.response.body = { data: 'main' };
    } else {
        ctx.response.type = 'json';
        ctx.response.body = { data: ctx.request.path };
    }
};
app.use(main);
app.listen(3000);
