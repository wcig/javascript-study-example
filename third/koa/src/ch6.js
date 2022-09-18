// koa router
import Koa from 'koa'
import KoaRouter from '@koa/router'

const router = new KoaRouter();
const main = async function (ctx) {
    ctx.response.type = 'json';
    ctx.response.body = { data: 'main' };
};
const about = async function (ctx) {
    ctx.response.type = 'json';
    ctx.response.body = { data: 'about' };
};
router.get('/', main);
router.get('/about', about);

const app = new Koa();
app.use(router.routes());
app.listen(3000);
