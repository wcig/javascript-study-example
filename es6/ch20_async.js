const log = console.log.bind(console);

// ch20: async

// 1.含义
// async函数: 异步操作函数, Generator函数的语法糖.

// 2.基本用法
// 1) 定义异步函数时使用 async 关键字;
// 2) 调用异步函数时使用 await 关键字.
{
    // timeout
    function timeout1(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
    async function asyncPrint1(val, ms) {
        await timeout1(ms);
        log(">> asyncPrint1", val);
    }
    asyncPrint1('tom', 50); // >> asyncPrint1 tom

    async function timeout2(ms) {
        await new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
    async function asyncPrint2(val, ms) {
        await timeout2(ms);
        log(">> asyncPrint2", val);
    }
    asyncPrint1('jerry', 50); // >> asyncPrint1 jerry
}

// 3.语法
{
    // 1) 返回Promise对象:
    // - async函数返回一个Promise对象
    // - async函数内部return语句返回的值, 会成为then方法回调函数的参数.
    // - async函数内部抛出错误, 将导致返回的Promise对象变为reject状态.
    async function f1() {
        return 'hello world';
    }
    f1().then(v => log(v)); // hello world

    async function f2() {
        throw new Error('出错了');
    }
    // f2().then(
    //     v => log('resolve:', v),
    //     e => log('reject:', e)
    // ); // reject: Error: 出错了

    // 2) Promise对象的状态变化
    // async函数返回的Promise对象, 必须等到内部所有await命令后面的Promise对象执行完, 才会状态变化.

    // 3) await命令
    // - await命令后面是一个Promise对象则返回该对象结果, 不是则返回对应值.
    async function f3() {
        return await 123;
        // 等价于
        // return 123;
    }
    f3().then(v => log(v)); // 123

    // - await命令后面是一个thenable对象(定义了then方法的对象), await将其等同于Promise对象.
    class Sleep {
        constructor(timeout) {
            this.timeout = timeout
        }
        then(resolve, reject) {
            const startTime = Date.now();
            setTimeout(
                () => resolve(Date.now(), - startTime),
                this.timeout
            );
        }
    }
    (async () => {
        const sleepTime = await new Sleep(1000);
        log(sleepTime);
    })(); // 1662474462825

    // - await命令后面的Promise对象变为reject状态, async函数会中断执行, 解决办法是将await放在try...catch中.
    async function f4() {
        await Promise.reject('出错了');
        await Promise.resolve('hello world'); // 不会执行
    }
    async function f5() {
        try {
            await Promise.reject('出错了');
        } catch (e) {
            //
        }
        await Promise.resolve('hello world'); // 不会执行
    }

    // 4) 错误处理
    // - await命令后的异步操作出错, 那么async函数返回的Promise对象是reject状态
    // - 为防止await后面的Promise对象抛出错误, 可以将其放在try...catch中.

    // 5) 注意点
    // - await后面的Promise对象可能rejected, 讲义放在try...catch中.

    // - 多个await命令的异步操作如果不存在先后关系, 可以同时触发.
    // // 顺序执行
    // let foo = await getFoo();
    // let bar = await getBar();
    // // 同时执行
    // let [foo, bar] = await Promise.all([getFoo(), getBar()]);

    // - await命令只能使用在async函数中, 在普通函数中将报错.

    // - await函数可以保留运行堆栈.
}
