// middleware stack
import Koa from 'koa'

const one = (ctx, next) => {
    console.log(">> one");
    next();
    console.log("<< one");
};
const two = (ctx, next) => {
    console.log(">> two");
    next();
    console.log("<< two");
};
const three = (ctx, next) => {
    console.log(">> three");
    next();
    console.log("<< three");
};
const main = async function (ctx) {
    console.log("-- main")
    ctx.response.body = 'hello world';
};

const app = new Koa();
app.use(one);
app.use(two);
app.use(three);
app.use(main);
app.listen(3000);
