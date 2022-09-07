const log = console.log.bind(console);

// ch25: 编程风格

// 1.块级作用域
{
    // 1) let取代var

    // 2) let和const, 优先使用const
}

// 2.字符串
{
    // 静态字符串使用单引号或反引号, 动态字符串使用反引号.
    // bad
    const a = "foobar";
    const b = 'foo' + a + 'bar';

    // acceptable
    const c = `foobar`;

    // good
    const a1 = 'foobar';
    const b1 = `foo${a1}bar`;
}

// 3.解构赋值
{
    // 1) 使用数组成员对变量赋值时, 优先使用解构赋值.
    const arr = [1, 2, 3, 4];

    // bad
    const first = arr[0];
    const second = arr[1];

    // good
    const [first1, second1] = arr;

    // 2) 函数的参数如果是对象的成员, 优先使用解构赋值.
    // // bad
    // function processInput(input) {
    //     return [left, right, top, bottom];
    // }
    //
    // // good
    // function processInput1(input) {
    //     return { left, right, top, bottom };
    // }
    // const { left, right } = processInput1(input);
}

// 4.对象
{
    // 1) 单行定义对象, 最后一个成员不以逗号结尾; 多行定义对象, 最后一个成员以逗号结尾.
    // // bad
    // const a = { k1: v1, k2: v2, };
    // const b = {
    //   k1: v1,
    //   k2: v2
    // };
    //
    // // good
    // const a = { k1: v1, k2: v2 };
    // const b = {
    //   k1: v1,
    //   k2: v2,
    // };

    // 2) 对象尽量静态化, 如果需要添加新属性, 使用Object.assign方法.
    // // bad
    // const a = {};
    // a.x = 3;
    //
    // // if reshape unavoidable
    // const a = {};
    // Object.assign(a, { x: 3 });
    //
    // // good
    // const a = { x: null };
    // a.x = 3;

    // 3) 对象的属性名是动态, 可以在创建对象时使用属性表达式定义.
    // // bad
    // const obj = {
    //   id: 5,
    //   name: 'San Francisco',
    // };
    // obj[getKey('enabled')] = true;
    //
    // // good
    // const obj = {
    //   id: 5,
    //   name: 'San Francisco',
    //   [getKey('enabled')]: true,
    // };

    // 4) 对象的属性和方法, 尽量使用简洁表达式.
    // var ref = 'some value';
    //
    // // bad
    // const atom = {
    //   ref: ref,
    //
    //   value: 1,
    //
    //   addValue: function (value) {
    //     return atom.value + value;
    //   },
    // };
    //
    // // good
    // const atom = {
    //   ref,
    //
    //   value: 1,
    //
    //   addValue(value) {
    //     return atom.value + value;
    //   },
    // };
}

// 5.数组
{
    // 1) 使用扩展运算符'...'拷贝数组
    // // bad
    // const len = items.length;
    // const itemsCopy = [];
    // let i;
    //
    // for (i = 0; i < len; i++) {
    //   itemsCopy[i] = items[i];
    // }
    //
    // // good
    // const itemsCopy = [...items];

    // 2) 使用Array.from方法, 将类数组对象转为数组.
    // const foo = document.querySelectorAll('.foo');
    // const nodes = Array.from(foo);
}

// 6.函数
{
    // 1) 立即执行函数, 使用箭头函数形式.
    // (() => {
    //   console.log('Welcome to the Internet.');
    // })();

    // 2) 匿名函数作为参数时, 使用箭头函数代替.
    // // bad
    // [1, 2, 3].map(function (x) {
    //   return x * x;
    // });
    //
    // // good
    // [1, 2, 3].map((x) => {
    //   return x * x;
    // });
    //
    // // best
    // [1, 2, 3].map(x => x * x);

    // 3) 箭头函数取代Function.prototype.bind, 不应再用 self/_this/that 绑定 this.
    // // bad
    // const self = this;
    // const boundMethod = function(...params) {
    //   return method.apply(self, params);
    // }
    //
    // // acceptable
    // const boundMethod = method.bind(this);
    //
    // // best
    // const boundMethod = (...params) => method.apply(this, params);
}

// 7.Map
// - 区分Object和Map, key: value结构使用Map, 模拟现实实体对象使用Object.

// 8.Class
// - 总是使用Class, 取代需要prototype的操作.

// 9.模块
// - 使用ES6模块语法(export/import), 代替CommonJS语法(module.exports/require()).

// 10.ESLint的使用
// - 使用ESLint校验语法规则和代码风格.