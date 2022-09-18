// upload
import Koa from 'koa';
import os from 'os'
import fs from 'fs'
import path from 'path'
import KoaBody from "koa-body";

const app = new Koa();

const main = async function(ctx) {
    const tmpdir = os.tmpdir();
    const filePaths = [];
    const files = ctx.request.body.files || {};

    for (let key in files) {
        const file = files[key];
        const filePath = path.join(tmpdir, file.name);
        const reader = fs.createReadStream(file.path);
        const writer = fs.createWriteStream(filePath);
        reader.pipe(writer);
        filePaths.push(filePath);
    }

    ctx.body = filePaths;
    console.log('tmpdir:', tmpdir);
};

app.use(KoaBody({ multipart: true }));
app.use(main);
app.listen(3000);