// form
import Koa from "koa";
import KoaBody from "koa-body";

const app = new Koa();

const main = async function(ctx) {
    const body = ctx.request.body;
    if (!body.name) ctx.throw(400, '.name required');
    ctx.body = { name: body.name };
};
app.use(KoaBody({
    multipart: true,
    formidable: {
        maxFileSize: 1024*1024*1024
    }
}));
app.use(main);
app.listen(3000);