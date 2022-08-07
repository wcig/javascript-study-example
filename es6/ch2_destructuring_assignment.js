const log = console.log.bind(console);

// ch2: 变量的解构赋值

// 1. 数组的解构赋值
// 1) 示例
// 以前
{
    let a = 1;
    let b = 2;
    let c = 3;
}
// 现在
{
    let [a, b, c] = [1, 2, 3];
    log(a, b, c); // 1 2 3
}

// 2) 解构不成功情况: 值默认等于undefined
{
    let [a] = [];
    let [b, c] = [2];
    log(a, b, c); // undefined 2 undefined
}

// 3) 默认值 (注意: ES6 内部使用'==='严格相等运算符)
{
    // 默认值生效
    let [a = 1] = [];
    log(a); // 1

    // 数组成员值是null, 默认值不生效
    let [b = 2] = [null];
    log(b); // null
}

// 2. 对象的解构赋值
// 1) 示例
{
    let {foo, bar} = {foo: 111, bar: 222};
    log(foo); // 111
    log(bar); // 222
}

// 2) 解构失败, 变量值为undefined
{
    let {foo, bar} = {foo: 111};
    log(foo); // 111
    log(bar); // undefined
}

// 3) 数组解构与顺序有关, 对象解构与属性名有关, 与顺序无关.
{
    let {foo, bar} = {bar: 222, foo: 111};
    log(foo); // 111
    log(bar); // 222
}

// 4) 变量名与属性名不一致情况
{
    let {foo: baz} = {bar: 222, foo: 111};
    log(baz); // 111
}

// 5) 支持嵌套结构
{
    let obj = {
        p: [
            'Hello',
            { y: 'World' }
        ]
    };

    let { p: [x, { y }] } = obj;
    log(x); // "Hello"
    log(y); // "World"
}

// 6) 默认值
{
    let {a = 1} = {};
    log(a); // 1

    let {b = 1} = {b: undefined};
    log(b); // 1

    let {c = 1} = {c: null};
    log(c); // null
}

// 3. 字符串的解构赋值
{
    let [a, b, c] = 'tom';
    log(a, b, c); // t o m

    let [x, y] = '你好';
    log(x, y); // 你 好

    let {length: len} = 'ok';
    log(len); // 2
}

// 4. 数值和布尔值的解构赋值
{
    // 解构时, 等号右边是数值和布尔值时, 会先转为对象.
    let {toString: s1} = 123;
    log(s1); // [Function: toString]
    log(s1 === Number.prototype.toString); // true

    let {toString: s2} = true;
    log(s2); // [Function: toString]
    log(s2 === Boolean.prototype.toString); // true
}

// 5. 函数参数的解构赋值
{
    function add([x, y]){
        return x + y;
    }
    log(add([1, 2])); // 3

    // 默认值
    function move({x = 0, y = 0} = {}) {
        return [x, y];
    }
    log(move({x: 3, y: 8})); // [ 3, 8 ]
    log(move({x: 3})); // [ 3, 0 ]
}

// 6. 用途
// 1) 交换变量的值
{
    let x = 1;
    let y =  2;
    [x, y] = [y, x];
    log(x, y); // 2 1
}

// 2) 函数返回多个值
{
    // 返回一个数组
    function exampleArray() {
        return [1, 2, 3];
    }
    let [a, b, c] = exampleArray();
    log(a, b, c); // 1 2 3

    // 返回一个对象
    function exampleObject() {
        return {
            foo: 1,
            bar: 2
        };
    }
    let {foo, bar} = exampleObject();
    log(foo, bar); // 1 2
}

// 3) 函数参数的定义
{
    // 参数是有序数组
    function f1([x, y, z]) {
        log(x, y, z);
    }
    f1([1, 2, 3]); // 1 2 3

    // 参数是无序对象
    function f2({x, y, z}) {
        log(x, y, z);
    }
    f2({z: 3, y: 2, x: 1}); // 1 2 3
}

// 4) 提取JSON数据
{
    let jsonData = {
        id: 42,
        status: "OK",
        data: [867, 5309]
    };
    let { id, status, data: number } = jsonData;
    log(id, status, number); // 42 OK [ 867, 5309 ]
}

// 5) 函数参数的默认值

// 6) 遍历Map结构 (任何有Iterator接口的对象, 都可以用for...of遍历, Map结构原生支持Iterator接口)
{
    let m = new Map();
    m.set('k1', 'v1');
    m.set('k2', 'v2');
    for (let [k, v] of m) {
        log(k, v);
    }
    // k1 v1
    // k2 v2

    // 获取key
    for (let [k] of m) {
        // ...
    }

    // 获取value
    for (let [, v] of m) {
        // ...
    }
}

// 7) 输入模块的指定方法
// const { SourceMapConsumer, SourceNode } = require("source-map");
