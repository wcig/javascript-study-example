var log = console.log.bind(console);
// ch10: 高级类型
// 1.交叉类型: 多个类型合并为一个类型
{
    function extend(first, second) {
        var result = {};
        for (var id in first) {
            result[id] = first[id];
        }
        for (var id in second) {
            if (!result.hasOwnProperty(id)) {
                result[id] = second[id];
            }
        }
        return result;
    }
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var ConsoleLogger = /** @class */ (function () {
        function ConsoleLogger() {
        }
        ConsoleLogger.prototype.log = function () {
            // ...
        };
        return ConsoleLogger;
    }());
    var jim = extend(new Person("Jim"), new ConsoleLogger());
    var n = jim.name;
    jim.log();
}
// 2.联合类型
{
    // 1) 变量
    var val = void 0;
    val = 123;
    log(val); // 123
    val = 'tom';
    log(val); // tom
    // 2) 函数
    function padLeft(value, padding) {
        if (typeof padding === "number") {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error("Expected string or number, got '".concat(padding, "'."));
    }
    log(padLeft("Hello world", 4)); //     Hello world
    log(padLeft("Hello world", 'tom ')); // tom Hello world
    var B_1 = /** @class */ (function () {
        function B() {
        }
        return B;
    }());
    var C_1 = /** @class */ (function () {
        function C() {
        }
        return C;
    }());
    function getRandomA() {
        return Math.random() < 0.5 ? new B_1() : new C_1();
    }
    var c1 = getRandomA();
    if (c1 instanceof B_1) {
        log('c1 instance B');
    }
    if (c1 instanceof C_1) {
        log('c1 instance C');
    }
    // 4) 可为null类型
    var sn = void 0;
    sn = 'tom';
    sn = null;
    // 类型断言: !.
}
// 3.类型别名
{
    var val = 'tom';
    val = null;
}
