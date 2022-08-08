const log = console.log.bind(console);

// ch7: 函数的扩展

// 1. 函数的默认值: 可以为函数参数指定默认值
{
    function f1(x, y = 'world') {
        log(x, y);
    }
    f1('hello'); // hello world
    f1('hello', ''); // hello
    f1('hello', 'tom'); // hello tom

    function Point(x= 0, y= 0) {
        this.x = x;
        this.y = y;
    }
    let p1 = new Point();
    let p2 = new Point(1, 2);
    log(p1); // Point { x: 0, y: 0 }
    log(p2); // Point { x: 1, y: 2 }
}

// 2. 默认值与解构赋值结合使用
{
    function foo({x, y = 5}) {
        log(x, y);
    }
    // foo(); // TypeError: Cannot destructure property 'x' of 'undefined' as it is undefined.
    foo({}); // undefined 5
    foo({x: 1}); // 1 5
    foo({x: 1, y: 2}); // 1 2
}

// 3. 默认值参数位置: 应该定义在函数最后, 语法正确且方便阅读. (传参undefined默认值生效, null不生效)
{
    function f2(x=1, y) {
        log(x, y);
    }
    f2(); // 1 undefined
    f2(2); // 2 undefined
    // f2(, 2); // 错误
    f2(3,  2); // 3 2
    f2(undefined,  2); // 1 2
    f2(null,  2); // null 2
}

// 4. 函数的length属性
{
    // 1) 默认值是最后参数, length为未指定默认值参数个数
    log((function (a) {}).length); // 1
    log((function (a = 1) {}).length); // 0
    log((function (a, b, c = 3) {}).length); // 2
    log((function (...arg) {}).length); // 0

    // 2) 默认值不是最后参数, 默认值后面参数不计入length
    log((function (a, b = 2, c) {}).length); // 1
}

// 5. 作用域
{
    let x = 11;
    function f(x, y = x) {
        console.log(y);
    }
    f(22) // 22
}

// 6. 默认值必填实现
{
    function throwIfMissing() {
        throw new Error('Missing parameter');
    }
    function foo(mustBeProvided = throwIfMissing()) {
        return mustBeProvided;
    }
    // foo(); // Error: Missing parameter
}

// 7. rest参数
{
    // 1) 示例
    function add(...values) {
        let sum = 0;
        for (let val of values) {
            sum += val;
        }
        return sum;
    }
    log(add()); // 0
    log(add(1, 2, 3)); // 6

    // 2) rest参数...arguments对象不是数组, 而是一个类似数组的对象, 所以想使用数组方法必须先通过Array.from转为数组.
    function sortNumbers(...args) {
        return Array.from(args).sort();
    }
    log(sortNumbers(3, 2, 1)); // [ 1, 2, 3 ]

    // 3) 语法规定rest参数后不能最有其他参数
    // function f(a, ...b, c) {} // 错误

    // 4) rest参数不记入函数length属性统计
    log((function (a, ...b) {}).length); // 1
}

// 8. name属性: 函数name属性返回其函数名
{
    function bar() {}
    log(bar.name); // bar

    // 匿名函数name属性: ES6为实际函数名, ES5为空字符串
    var bar1 = function () {};
    log(bar1.name); // ES6: "bar1", ES5: ""

    // 具名函数赋值给一个变量, ES5/ES6都返回具名函数的名称
    const bar2 = function baz() {};
    log(bar2.name); // ES5/ES6: baz

    // Function构造函数返回的函数实例, name属性为anonymous
    log((new Function).name); // anonymous

    // bind返回的函数, name属性会加上bound前缀
    log(bar.bind({}).name); // bound bar
}

// 9. 箭头函数
{
    // 1) 无参数
    let func1 = () => 1;
    // 等同于
    let func2 = function () {
        return 1;
    };

    // 2) 单个参数
    let func3 = x => y;
    // 等同于
    let func4 = function (x) {
        return y;
    };

    // 3) 多个参数
    let func5 = (num1, num2) => num1 + num2;
    // 等同于
    let func6 = function(num1, num2) {
        return num1 + num2;
    };

    // 4) 箭头函数代码块多余一条语句, 使用大括号括起来
    let func7 = (num1, num2) => {
        log(num1, num2);
        return num1 + num2;
    };

    // 5) 返回对象时, 必须咋对象外加上小括号
    let func8 = id => ({x: 1, y: 2});

    // 6) 简化函数
    [1, 2, 3].map(function (x) {
        return x * x;
    });
    [1, 2, 3].map(x => x*x);

    // let result1 = values.sort(function (n1, n2) {
    //     return n1 - n2;
    // })
    // let result2 = values.sort((n1, n2) => n1 - n2);

    // 7) 注意点:
    // 箭头函数没有自己的this对象
    // 不可以作为构造函数
    // 不可使用arguments, 请使用rest参数
    // 不可以使用yield命令

    let id = 111;
    function f9 () {
        setTimeout(() => {
            log(this.id);
        }, 100);
    }
    f9.call({id: 222}); // 222
}

// 10. 函数最后一个参数可以出现逗号
{
    function f10(
        param1,
        param2,
    ) {
        // ...
    }
}

// 11. Function.prototype.toString(): ES5会忽略函数代码的注释和空格, ES6不是而是跟原始代码一样.
{
    function /* foo comment */ f11 () { }
    log(f11.toString()); // function /* foo comment */ f11 () { }
}
