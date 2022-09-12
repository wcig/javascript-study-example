// ch9: 类型兼容性
// 1.示例1
{
    var Person = /** @class */ (function () {
        function Person() {
        }
        return Person;
    }());
    var p = new Person();
}
// 2.示例2
{
    var y = { name: 'tom', age: 23 };
    var x = void 0;
    x = y;
}
// 3.示例3
{
    var x = function (a) { return 0; };
    var y = function (b, s) { return 0; };
    y = x;
    // x = y; // Error
}
