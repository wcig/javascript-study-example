const log = console.log.bind(console);

// ch21: Class的基本语法

// 1.类的由来: 之前生成实例对象是通过调用构造函数, 而且写法不容易理解, Class写法更面向对象, 与之前的功能基本类似, 可以看做是一个语法糖.
{
    // ES5
    function Point1(x, y) {
        this.x = x;
        this.y = y;
    }
    Point1.prototype.toString = function () {
        return '(' + this.x + ', ' + this.y + ')';
    }
    let p1 = new Point1(1, 2);
    log(p1); // Point1 { x: 1, y: 2 }
    log(p1.toString()); // (1, 2)

    // ES6
    class Point2 {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
    }
    let p2 = new Point2(3, 4);
    log(p2); // Point2 { x: 3, y: 4 }
    log(p2.toString()); // (3, 4)
}

// 2.constructor方法
// 1) constructor方法是类的默认方法, 通过new命令创建对象实例即会自动调用该方法.
// 2) 一个类必须有constructor方法, 如果没有显示定义, 一个空的constructor方法会被自动添加.
// 3) 创建class的实例必须使用new命令, 否则将报错.

// 3.类的实例
{
    // 1) 必须使用new创建实例
    class Point3 {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
    }
    // let p1 = new Point3(5, 6);
    // let p2 = Point3(5, 6); // 报错

    // 2) 类的属性和方法, 除非显示定义在其本身(定义在this对象上), 否则都是定义在原型对象上(定义在class上)
    let p3 = new Point3(1, 2);
    log(p3.hasOwnProperty('x')); // true
    log(p3.hasOwnProperty('y')); // true
    log(p3.hasOwnProperty('toString')); // false
    log(p3.__proto__.hasOwnProperty('toString')); // true

    // 3) 与ES5一样, 类的所有实例对象共享一个原型对象.
    let p4 = new Point3(2, 3);
    let p5 = new Point3(3, 4);
    log(p4.__proto__ === p5.__proto__); // true

    // 通过实例的__proto__属性为类添加方法
    p4.__proto__.printName = function () { return 'Oops' };
    log(p4.printName()); // Oops
    log(p4.printName()); // Oops
}

// 4.实例属性的新写法: ES2022为类的实例属性添加一种新写法
{
    // 旧写法
    class IncreasingCounter1 {
        constructor() {
            this._count = 0;
        }
        get value() {
            console.log('Getting the current value!');
            return this._count;
        }
        increment() {
            this._count++;
        }
    }

    // 新写法
    class IncreasingCounter2 {
        _count = 0;
        get value() {
            console.log('Getting the current value!');
            return this._count;
        }
        increment() {
            this._count++;
        }
    }
}

// 5.取值函数(getter)和设值函数(setter)
{
    // 1) 与ES5一样, 可以为定义取值和设值函数, 以此来拦截该属性的取值和设值行为.
    class MyClass {
        constructor() {
            // ...
        }
        get prop() {
            return 'getter';
        }
        set prop(value) {
            console.log('setter: '+value);
        }
    }

    // 2) 取值和设值函数都是设值在属性的Descriptor对象上
}

// 6.属性表达式
{
    let methodName = 'getArea';

    class Square {
        constructor(length) {
            // ...
        }

        [methodName]() {
            // ...
        }
    }
}

// 7.类表达式
{
    // 1) 类可以使用表达式的形式定义
    // Me只能在类内部使用
    const MyClass = class Me {
        getClassName() {
            return Me.name;
        }
    };
    let c1 = new MyClass();
    log(c1.getClassName()); // Me
    // Me.name // ReferenceError: Me is not defined

    // 2) 可以省略Me名称, 这样可以定义立即执行类.
    let person = new class {
        constructor(name) {
            this.name = name;
        }

        sayName() {
            log(this.name);
        }
    }('张三');
    person.sayName(); // "张三"
}

// 8.静态方法
{
    // 1) 在方法前添加static关键字, 可以定义静态方法, 该方法不会被实例继承. 静态方法只能通过类调用, 不能通过实例对象调用.
    class Foo1 {
        static classMethod() {
            return 'hello';
        }
    }
    log(Foo1.classMethod()); // hello
    let f1 = new Foo1();
    // log(f1.classMethod()); // TypeError: f1.classMethod is not a function

    // 2) 静态方法中包含this关键字, 此时this指的是类而不是实例.
    class Foo2 {
        static bar() {
            this.baz();
        }
        static baz() {
            log('hello');
        }
        baz() {
            log('world');
        }
    }
    Foo2.bar() // hello

    // 3) 父类的静态方法, 可以被子类继承.
    class Foo3 {
        static classMethod() {
            return 'hello';
        }
    }
    class Bar3 extends Foo3 {
    }
    log(Bar3.classMethod()); // hello

    // 静态方法可以从super对象调用
    class Foo4 {
        static classMethod() {
            return 'hello';
        }
    }
    class Bar4 extends Foo4 {
        static classMethod() {
            return super.classMethod() + ', too';
        }
    }
    log(Bar4.classMethod()); // hello, too
}

// 9.静态属性
{
    // 1) 静态属性是类本身的属性, 是定义在类上, 而不是实力上.
    // 老写法
    class Foo1 {
        // ...
    }
    Foo1.prop = 1;

    // 新写法
    class Foo2 {
        static prop = 1;
    }
}

// 10.私有方法和私有属性
{
    // 1) 使用#关键字定义私有方法和私有属性
    class Point {
        #x;
        constructor(x = 0) {
            this.#x = +x;
        }
        get x() {
            return this.#x;
        }
        set x(value) {
            this.#x = +value;
        }
    }
}

// 11.in运算符
{
    // 1) ES2022提供in运算符, 用来判断私有属性.
    class C {
        #brand;
        static isC(obj) {
            if (#brand in obj) {
                // 私有属性 #brand 存在
                return true;
            } else {
                // 私有属性 #foo 不存在
                return false;
            }
        }
    }

    // 2) in运算符可以配合this使用.
    // 3) 子类从父类继承的私有属性, 也可以使用in运算符判断.
}

// 12.静态块
{
    // 1) ES2022引入静态块, 方便在类生成时运行以此, 主要用于静态属性初始化.
    class C {
        static x = 111;
        static y;
        static z;
        static {
            try {
                const obj = doSomethingWith(this.x);
                this.y = obj.y;
                this.z = obj.z;
            }
            catch {
                this.y = 222;
                this.z = 333;
            }
        }
    }

    // 2) 一个类只能有一个静态块, 并且静态块内部不能有return语句.
    // 3) 静态块内部可以使用类名或this, 来指当前类.
}

// 13.类的注意点
{
    // 1) 类不存在变量提升, 所以定义必须在使用之前.
    // 2) ES6类是ES5构造函数的包装, 所以函数的许多特性被累继承, 包括name属性.
    // 3) 如果在一个方法前加上"*", 则该方法是一个Generator函数.
    // 4) 类内部的this, 默认指向类的实例, 使用时需小心.
}

// 14.new.target属性
{
    // 1) 使用在构造函数中
    function Person(name) {
        if (new.target !== undefined) {
            this.name = name;
        } else {
            throw new Error('必须使用 new 命令生成实例');
        }
    }
    // 另一种写法
    // function Person(name) {
    //     if (new.target === Person) {
    //         this.name = name;
    //     } else {
    //         throw new Error('必须使用 new 命令生成实例');
    //     }
    // }
    let person = new Person('张三');
    // let notAPerson = Person.call(person, '张三');  // Error: 必须使用 new 命令生成实例

    // 2) 类内部使用new.target, 返回当前类
    class Rectangle1 {
        constructor(length, width) {
            log(new.target === Rectangle1);
            this.length = length;
            this.width = width;
        }
    }
    let obj1 = new Rectangle1(3, 4); // true

    // 3) 子类继承父类时, new.target返回子类.
    class Rectangle2 {
        constructor(length, width) {
            log(new.target === Rectangle2);
            // ...
        }
    }
    class Square2 extends Rectangle2 {
        constructor(length, width) {
            super(length, width);
        }
    }
    let obj2 = new Square2(3); // false

    // 必须继承后才能使用的类
    class Shape {
        constructor() {
            if (new.target === Shape) {
                throw new Error('本类不能实例化');
            }
        }
    }
    class Rectangle extends Shape {
        constructor(length, width) {
            super();
            // ...
        }
    }
    let x = new Rectangle(3, 4);
    // let y = new Shape();  // Error: 本类不能实例化
}
