// static asserts: 'curl http://localhost:3000/ch12.js'
import Koa from 'koa'
import path from 'path'
import { fileURLToPath } from 'url';
import serve from 'koa-static'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const main = serve(path.join(__dirname));
const app = new Koa();
app.use(main);
app.listen(3000);
