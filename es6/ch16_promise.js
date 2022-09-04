const log = console.log.bind(console);

// ch16: Promise

// 1.Promise
// 作用: 异步编程解决方案
// 特点:
//   1) 对象的状态不受外界影响. 有3种状态: pending(进行中), fulfilled(已完成), rejected(已失败).
//   2) 一旦状态改变就不会再变. 状态从pending->fulfilled/rejected就固定了
// 缺点:
//   1) 一旦新建就立即执行, 无法中途取消.
//   2) 不设置回调函数, promise内部的错误不会反应到外部.
//   3) 处于pending状态时, 无法得知目前阶段(刚开始还是即将完成).

// 2.基本用法
{
    // 1) 创建promise实例 (resolve: pending->fulfilled, reject: pending->rejected)
    // const promise = new Promise(function(resolve, reject) {
    //   // ... some code
    //
    //   if (/* 异步操作成功 */){
    //     resolve(value);
    //   } else {
    //     reject(error);
    //   }
    // });
    function timeout(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms, 'done');
        });
    }
    timeout(100).then((value) => {
        log(value); // done
    });

    // 2) promise新建后是立即执行
    let p1 = new Promise(function (resolve, reject) {
        log('Promise');
        resolve();
    });
    p1.then(function () {
        log('resolved.');
    });
    log('Hi');
    // Promise
    // Hi
    // resolved.
}

// 3.Promise.prototype.then()
{
    // 1) promise实例的then方法是定义在原型对象Promise.prototype上的, 作用是为promise实例添加状态改变的回调函数.
    // then方法的第一个参数为resolved状态的回调函数, 第二个参数为rejected状态的回调函数, 都是可选的.
    // then方法返回的是一个新的promise实例, 因此可以采用链式写法.
    // getJSON("/post/1.json").then(function(post) {
    //   return getJSON(post.commentURL);
    // }).then(function (comments) {
    //   console.log("resolved: ", comments);
    // }, function (err){
    //   console.log("rejected: ", err);
    // });
}

// 4.Promise.prototype.catch()
{
    // 1) Promise.prototype.catch() 是 .then(null/undefined, rejection) 的别名, 用于指定发生错误时的回调函数.
    // // bad
    // promise
    //   .then(function(data) {
    //     // success
    //   }, function(err) {
    //     // error
    //   });
    //
    // // good
    // promise
    //   .then(function(data) { //cb
    //     // success
    //   })
    //   .catch(function(err) {
    //     // error
    //   });
}

// 5.Promise.prototype.finally()
{
    // 1) finally() 用于指定不管promise对象最后状态如何都会执行的操作, 其回调函数不接受任何参数.
    // promise
    // .then(result => {···})
    // .catch(error => {···})
    // .finally(() => {···});
}

// 6.Promise.all()
{
    // 1) all() 用于将多个promise实例包装成一个新的promise实例.
    //   - 当p1,p2,p3状态都是fulfilled时, p状态为fulfilled.
    //   - 当p1,p2,p3有一个状态是rejected时, p的状态为rejected.
    // const p = Promise.all([p1, p2, p3]);
}

// 7.Promise.race()
{
    // 1) race() 用于将多个promise实例包装成一个新的promise实例.
    //   - 当p1,p2,p3有一个状态先发生改变, p的状态就跟着改变, 先改变的promise实例的返回值将传递给p的回调函数.
    // const p = Promise.race([p1, p2, p3]);
}

// 8.Promise.allSettled()
{
    // 1) allSettled() 用于将多个promise实例包装成一个新的promise实例.
    //   - 当p1,p2,p3所有状态都发生改变, p的状态才改变, 新的promise一旦状态变更, 状态总是fulfilled.
    // const p = Promise.allSettled([p1, p2, p3]);
}

// 9.Promise.any()
{
    // 1) allSettled() 用于将多个promise实例包装成一个新的promise实例.
    //   - 只要参数实例有一个变成fulfilled状态, 包装实例就变成fulfilled状态;
    //   - 如果所有参数实例都变成rejected状态, 包装实例就变成rejected状态.
    // const p = Promise.any([p1, p2, p3]);
}

// 10.Promise.resolve(): 将对象转为promise对象

// 11.Promise.reject(): 返回一个新的promise实例, 其状态为rejected.
