// error listener
import Koa from 'koa'

const app = new Koa();
const main = (ctx) => {
    ctx.throw(500);
};
app.on('error', (err, ctx) => {
    console.log('server error', err, ctx)
});
app.use(main).listen(3000);
