const log = console.log.bind(console);

// ch3: 接口

// 1.属性接口
{
    // 1) 定义
    interface LabelledValue {
        label: string;
    }
    function printLabel(labelledObj: LabelledValue) {
        log(labelledObj.label);
    }
    let myObj = {size: 10, label: "Size 10 Object"};
    printLabel(myObj);

    // 2) 可选属性: 使用'?:'定义非必须属性
    interface SquareConfig {
        color?: string;
        width?: number;
    }
    function createSquare(config: SquareConfig): {color: string; area: number} {
        let newSquare = {color: "white", area: 100};
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    let mySquare = createSquare({color: "black"});

    // 3) 只读属性: 使用'readonly'关键字, 初始化后不允许修改.
    interface Point {
        readonly x: number;
        readonly y: number;
    }
    let p1: Point = {x: 1, y: 2};
    // p1.x = 0; // error
}

// 2.函数接口
{
    // 1) 定义
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }
    let mySearch: SearchFunc;
    mySearch = function(source: string, subString: string) {
        let result = source.search(subString);
        return result > -1;
    }

    // 2) 可索引的类型
    interface StringArray {
        [index: number]: string;
    }
    let myArray: StringArray;
    myArray = ["Bob", "Fred"];
    let myStr: string = myArray[0];
}

// 3.类实现接口
{
    // 1) 定义
    interface ClockInterface {
        currentTime: Date;
        setTime(d: Date);
    }
    class Clock implements ClockInterface {
        currentTime: Date;
        setTime(d: Date) {
            this.currentTime = d;
        }
        constructor(h: number, m: number) { }
    }
}

// 4.继承接口
{
    // 1) 定义
    interface Shape {
        color: string;
    }
    interface Square extends Shape {
        sideLength: number;
    }
    let square = <Square>{};
    square.color = "blue";
    square.sideLength = 10;
}