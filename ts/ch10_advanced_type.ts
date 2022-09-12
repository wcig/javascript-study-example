const log = console.log.bind(console);

// ch10: 高级类型

// 1.交叉类型: 多个类型合并为一个类型
{
    function extend<T, U>(first: T, second: U): T & U {
        let result = <T & U>{};
        for (let id in first) {
            (<any>result)[id] = (<any>first)[id];
        }
        for (let id in second) {
            if (!result.hasOwnProperty(id)) {
                (<any>result)[id] = (<any>second)[id];
            }
        }
        return result;
    }

    class Person {
        constructor(public name: string) { }
    }
    interface Loggable {
        log(): void;
    }
    class ConsoleLogger implements Loggable {
        log() {
            // ...
        }
    }
    let jim = extend(new Person("Jim"), new ConsoleLogger());
    let n = jim.name;
    jim.log();
}

// 2.联合类型
{
    // 1) 变量
    let val: string | number;
    val = 123;
    log(val); // 123
    val = 'tom';
    log(val); // tom

    // 2) 函数
    function padLeft(value: string, padding: string | number) {
        if (typeof padding === "number") {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error(`Expected string or number, got '${padding}'.`);
    }
    log(padLeft("Hello world", 4)); //     Hello world
    log(padLeft("Hello world", 'tom ')); // tom Hello world

    // 3) 类
    interface A {}
    class B implements A {}
    class C implements A {}
    function getRandomA() {
        return Math.random() < 0.5 ? new B() : new C();
    }
    let c1: A = getRandomA();
    if (c1 instanceof B) {
        log('c1 instance B');
    }
    if (c1 instanceof C) {
        log('c1 instance C');
    }

    // 4) 可为null类型
    let sn: string | null;
    sn = 'tom';
    sn = null;

    // 类型断言: !.
}

// 3.类型别名
{
    type Name = string;

    let val: Name | null = 'tom';
    val = null;
}