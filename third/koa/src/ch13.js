// response redirect
import Koa from "koa";
import KoaRouter from '@koa/router'

const app = new Koa();
const route = new KoaRouter();

const redirect = ctx => {
    ctx.response.redirect('/');
    ctx.response.body = '<a href="/">Index Page</a>';
};
const main = ctx => {
    ctx.response.body = 'Hello World';
};

route.get('/', main);
route.get('/redirect', redirect)
app.use(route.routes());

app.use(main);
app.listen(3000);