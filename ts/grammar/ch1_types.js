var log = console.log.bind(console);
// ch1: 基础类型
// 类型分类
// - 布尔值: boolean
// - 数值: number (整数+浮点数)
// - 字符串: string
// - 数组: type[] 或 Array<type>
// - 元组
// - 枚举
// - any
// - void
// - null, undefined
// - never
// - object
// 1.布尔值
{
    var b1 = true;
    var b2 = false;
    var b3 = void 0;
    log(b1, b2, b3); // true false undefined
}
// 2.数值
{
    var n1 = 123;
    var n2 = 111.22;
    var n3 = 0xf00d;
    var n4 = 10;
    var n5 = 484;
    var n6 = void 0;
    log(n1, n2, n3, n4, n5, n6); // 123 111.22 61453 10 484 undefined
}
// 3.字符串
{
    // 1) 初始化
    var s1 = 'tom';
    var s2 = "jerry";
    var s3 = void 0;
    log(s1, s2, s3); // tom jerry undefined
    // 2) 拼接
    var name_1 = 'tom';
    var age = 23;
    var s4 = 'Hello, my name is ' + name_1 + '.\n' + 'My age is ' + age;
    var s5 = "Hello, my name is ".concat(name_1, ".\nMy age is ").concat(age);
    log(s4 === s5); // true
    log(s4);
    // Hello, my name is tom.
    // My age is 23
}
// 4.数组: 元素类型相同
{
    // 1) 方式一
    var l1 = [1, 2, 3];
    var l2 = [4, 5, 6];
    var l3 = void 0;
    log(l1, l2, l3); // [ 1, 2, 3 ] [ 4, 5, 6 ] undefined
}
// 5.元组 (Tuple): 元素类型不必相同
{
    var t1 = [123, 'tome'];
    log(t1); //[ 123, 'tome' ]
}
// 6.枚举
{
    // 1) 方式一
    var Color1 = void 0;
    (function (Color1) {
        Color1[Color1["Red"] = 0] = "Red";
        Color1[Color1["Green"] = 1] = "Green";
        Color1[Color1["Blue"] = 2] = "Blue";
    })(Color1 || (Color1 = {}));
    ;
    var c1 = Color1.Red;
    log(c1); // 0
    // 2) 方式二
    var Color2 = void 0;
    (function (Color2) {
        Color2[Color2["Red"] = 1] = "Red";
        Color2[Color2["Green"] = 2] = "Green";
        Color2[Color2["Blue"] = 4] = "Blue";
    })(Color2 || (Color2 = {}));
    var c2 = Color2.Blue;
    log(c2); // 4
}
// 7.any: 任意类型
{
    var a1 = 123;
    a1 = 'tom';
    a1 = [1, 2, 3];
    log(a1); // [ 1, 2, 3 ]
}
// 8.void: 与any相反没有任何类型, 一般用作函数返回值
{
    function f1() {
        log('no return function');
    }
    var v1 = undefined;
    var v2 = null;
}
// 9.null, undefined: 主要用于空判断, 本身类型用户不大
{
    var u = undefined;
    var n = null;
}
// 10.never: 永不存在的值的类型
{
    function error(msg) {
        throw new Error(msg);
    }
}
// 11.object: 非原始类型, 即除number, string, boolean, symbol, null, undefined之外的类型.
{
    var o = {};
}
// 12.类型断言
{
    // 1) 方式一: <type>
    var a1 = 'tom';
    var s = a1;
    log(s); // tom
    // 2) 方式二: as
    var a2 = 123;
    var n = a2;
    log(n); // 123
}
