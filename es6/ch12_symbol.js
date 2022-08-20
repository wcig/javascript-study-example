const log = console.log.bind(console);

// ch12: Symbol

// 1.概述
{
    // 1) 为了保证对象属性名唯一, ES6引入了Symbol.

    // 2) Symbol是原生数据类型之一, 其余的数据类型为: undefined, null, boolean, string, number, bigint, object

    // 3) Symbol()函数生成Symbol: 空参数, 一个字符串参数
    let s1 = Symbol();
    log(typeof s1); // symbol
    log(s1); // Symbol()
    log(s1.toString()); // Symbol()

    let s2 = Symbol('abc');
    log(s2); // Symbol(abc)
    log(s2.toString()); // Symbol(abc)

    // 4) Symbol()参数是对象时, 则调用对象的toString()方法
    let obj1 = {
        toString() {
            return '123';
        }
    };
    let s3 = Symbol(obj1);
    log(s3.toString()); // Symbol(123)

    // 5) 相同参数的Symbol()函数, 返回值是不相等的
    let s4 = Symbol();
    let s5 = Symbol();
    log(s4 === s5); // false

    let s6 = Symbol('foo');
    let s7 = Symbol('foo');
    log(s6 === s7); // false

    // 6) Symbol值可以显示转为字符串
    let s8 = Symbol('bar');
    log(String(s8)); // Symbol(bar)
    log(s8.toString()); // Symbol(bar)

    // 7) Symbol值可以转为布尔值, 但不能转为数值
    let s9 = Symbol();
    log(Boolean(s9)); // true
    log(!s9); // false
}

// 2.Symbol.prototype.description: 读取Symbol描述
{
    let s10 = Symbol('tom');
    log(s10.toString()); // Symbol(tom)
    log(s10.description); // tom
}

// 3.Symbol作为属性名: 由于每个Symbol对象都是不相等的, 所以Symbol值可以作为标识符用于对象的属性名. (对于一个对象由多个模块构成情况, 可以防止某个键被改写)
{
    // 1) Symbol作为属性
    let s11 = Symbol();

    // 第一种写法
    let a1 = {};
    a1[s11] = 'hello';
    log(a1[s11]); // hello

    // 第二种写法
    let a2 = {
        [s11]: 'hello'
    };
    log(a2[s11]); // hello

    // 第三种写法
    let a3 = {};
    Object.defineProperty(a3, s11, {value: 'hello'})
    log(a3[s11]); // hello

    // 2) Symbol值作为属性名时, 不能使用点运算符'.'
    let a4 = {};
    a4.s11 = 'hello';
    log(a4[s11]); // undefined
    log(a4['s11']); // hello

    // 3) 对象内部使用Symbol值定义属性时, Symbol值必须放在方括号中
    let a5 = {
        [s11]: function (arg) {
            log(arg);
        }
    };
    a5[s11](123); // 123

    let a6 = {
        [s11](arg) {
            log(arg);
        }
    };
    a6[s11](456); // 456

    // 4) Symbol类型定义一组常量, 保证这组常量值都是不相等的.
    // const log = {};
    // log.levels = {
    //   DEBUG: Symbol('debug'),
    //   INFO: Symbol('info'),
    //   WARN: Symbol('warn')
    // };
    // console.log(log.levels.DEBUG, 'debug message');
    // console.log(log.levels.INFO, 'info message');
}

// 4.实例: 消除魔法字符串
{
    // 1) 'Triangle'是魔法字符串
    // function getArea(shape, options) {
    //   let area = 0;
    //
    //   switch (shape) {
    //     case 'Triangle': // 魔术字符串
    //       area = .5 * options.width * options.height;
    //       break;
    //     /* ... more code ... */
    //   }
    //
    //   return area;
    // }
    // getArea('Triangle', { width: 100, height: 100 }); // 魔术字符串

    // 2) 定义常量消除魔法字符串
    // const shapeType = {
    //   triangle: 'Triangle'
    // };
    //
    // function getArea(shape, options) {
    //   let area = 0;
    //   switch (shape) {
    //     case shapeType.triangle:
    //       area = .5 * options.width * options.height;
    //       break;
    //   }
    //   return area;
    // }
    // getArea(shapeType.triangle, { width: 100, height: 100 });

    // 3) 使用Symbol类型消除魔法字符串
    // const shapeType = {
    //   triangle: Symbol()
    // };
}

// 5.属性名的遍历
{
    // 1) Symbol()值作为对象的属性名时, 遍历对象属性时在以下方法不会出现: for...in, for...of, Object.keys(), Object.getOwnPrototypeNames(), JSON.stringify(), 但它也不是私有属性.

    // 2) Object.getOwnPrototypeSymbols(): 遍历Symbol属性名
    let obj1 = { foo: 123 };
    let s12 = Symbol('a');
    let s13 = Symbol('b');
    obj1[s12] = 'hello';
    obj1[s13] = 'world';
    log(Object.getOwnPropertySymbols(obj1)); // [ Symbol(a), Symbol(b) ]

    // 3) Reflect.ownKeys(): 获取所有类型键名, 包括常规键名和Symbol键名.
    log(Reflect.ownKeys(obj1)); // [ 'foo', Symbol(a), Symbol(b) ]

    // 4) 使用Symbol实现对象定义非私有的内部方法
    // let size = Symbol('size');
    //
    // class Collection {
    //   constructor() {
    //     this[size] = 0;
    //   }
    //
    //   add(item) {
    //     this[this[size]] = item;
    //     this[size]++;
    //   }
    //
    //   static sizeOf(instance) {
    //     return instance[size];
    //   }
    // }
    //
    // let x = new Collection();
    // Collection.sizeOf(x) // 0
    //
    // x.add('foo');
    // Collection.sizeOf(x) // 1
    //
    // Object.keys(x) // ['0']
    // Object.getOwnPropertyNames(x) // ['0']
    // Object.getOwnPropertySymbols(x) // [Symbol(size)]
}

// 6.Symbol.for(), Symbol.keyFor()
{
    // 1) Symbol.for(): 使用同一个Symbol值
    let s14 = Symbol.for('jerry');
    let s15 = Symbol.for('jerry');
    log(s14 === s15); // true

    // 2) Symbol.keyFor(): 返回一个已登记的Symbol类型值的key
    let s16 = Symbol.for('foo');
    log(Symbol.keyFor(s16)); // foo

    let s17 = Symbol('foo');
    log(Symbol.keyFor(s17)); // undefined
}

// 7.实例: 模块的Singleton模式
{
    // 1) 顶层对象global方式
    // // mod.js
    // function A() {
    //   this.foo = 'hello';
    // }
    //
    // if (!global._foo) {
    //   global._foo = new A();
    // }
    //
    // module.exports = global._foo;

    // // other.js
    // const a = require('./mod.js');
    // console.log(a.foo);

    // 2) Symbol方式
    // // mod.js
    // const FOO_KEY = Symbol.for('foo');
    //
    // function A() {
    //   this.foo = 'hello';
    // }
    //
    // if (!global[FOO_KEY]) {
    //   global[FOO_KEY] = new A();
    // }
    //
    // module.exports = global[FOO_KEY];
}

// 8.内置的Symbol值
{
    // 1) Symbol.hasInstance: foo instance Foo实际调用的是Foo[Symbol.hasInstance](foo)
    class MyClass {
        [Symbol.hasInstance](foo) {
            return foo instanceof Array;
        }
    }
    log([1, 2, 3] instanceof new MyClass()); // true

    // 2) Symbol.isConcatSpreadable: 该属性一个布尔值, 表示对象用于Array.prototype.concat()时是否可以展开.

    // 3) Symbol.species: 该属性指向一个构造函数, 创建衍生对象时会使用该属性.

    // 4) Symbol.match: 该属性指向一个函数, 当指向str.match(myObject)时, 该属性存在则调用它并返回该方法的返回值.

    // 5) Symbol.replace: 该属性指向一个方法, 当对象String.prototype.replace方法调用时, 会返回该方法的返回值.

    // 6) Symbol.search: 该属性指向一个方法, 当对象String.prototype.search, 会返回该方法的返回值.

    // 7) Symbol.split: 该属性指向一个方法, 当对象String.prototype.split, 会返回该方法的返回值.

    // 8) Symbol.iterator: 该属性指向对象的默认遍历器方法.

    // 9) Symbol.toPrimitive: 该属性指向一个方法, 该对象被转为原始类型的值时会调用这个方法, 返回该对象对应的原始类型值.

    // 10) Symbol.toStringTag: 该属性指向一个方法, 当对象String.prototype.toString方法调用时, 它的返回值会出现在toString方法返回的字符串中, 表示对象的类型.

    // 11) Symbol.unscopables: 该属性指向一个对象, 该对象指定了使用with关键字时, 哪些属性会被with环境排除.
}
