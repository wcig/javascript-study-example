var log = console.log.bind(console);
// ch3: 接口
// 1.属性接口
{
    function printLabel(labelledObj) {
        log(labelledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
    function createSquare(config) {
        var newSquare = { color: "white", area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    var mySquare = createSquare({ color: "black" });
    var p1 = { x: 1, y: 2 };
    // p1.x = 0; // error
}
// 2.函数接口
{
    var mySearch = void 0;
    mySearch = function (source, subString) {
        var result = source.search(subString);
        return result > -1;
    };
    var myArray = void 0;
    myArray = ["Bob", "Fred"];
    var myStr = myArray[0];
}
// 3.类实现接口
{
    var Clock = /** @class */ (function () {
        function Clock(h, m) {
        }
        Clock.prototype.setTime = function (d) {
            this.currentTime = d;
        };
        return Clock;
    }());
}
// 4.继承接口
{
    var square = {};
    square.color = "blue";
    square.sideLength = 10;
}
