var log = console.log.bind(console);
// ch7: 枚举
// 1.数字枚举
{
    // 1) 不初始化值
    var Direction1 = void 0;
    (function (Direction1) {
        Direction1[Direction1["Up"] = 0] = "Up";
        Direction1[Direction1["Down"] = 1] = "Down";
        Direction1[Direction1["Left"] = 2] = "Left";
        Direction1[Direction1["Right"] = 3] = "Right";
    })(Direction1 || (Direction1 = {}));
    log(Direction1.Up, Direction1.Down, Direction1.Left, Direction1.Right); // 0 1 2 3
    // 2) 初始化值
    var Direction2 = void 0;
    (function (Direction2) {
        Direction2[Direction2["Up"] = 1] = "Up";
        Direction2[Direction2["Down"] = 2] = "Down";
        Direction2[Direction2["Left"] = 3] = "Left";
        Direction2[Direction2["Right"] = 4] = "Right";
    })(Direction2 || (Direction2 = {}));
    log(Direction2.Up, Direction2.Down, Direction2.Left, Direction2.Right); // 1 2 3 4
    var Direction3 = void 0;
    (function (Direction3) {
        Direction3[Direction3["Up"] = 1] = "Up";
        Direction3[Direction3["Down"] = 2] = "Down";
        Direction3[Direction3["Left"] = 4] = "Left";
        Direction3[Direction3["Right"] = 8] = "Right";
    })(Direction3 || (Direction3 = {}));
    log(Direction3.Up, Direction3.Down, Direction3.Left, Direction3.Right); // 1 2 4 8
}
// 2.字符串枚举
{
    var Direction = void 0;
    (function (Direction) {
        Direction["Up"] = "UP";
        Direction["Down"] = "DOWN";
        Direction["Left"] = "LEFT";
        Direction["Right"] = "RIGHT";
    })(Direction || (Direction = {}));
    log(Direction.Up, Direction.Down, Direction.Left, Direction.Right);
}
