// response html template
import Koa from 'koa'
import fs from 'fs'

const app = new Koa();
const main = (ctx) => {
    ctx.response.type = 'html';
    ctx.response.body = fs.createReadStream('./src/template.html');
};
app.use(main);
app.listen(3000);
