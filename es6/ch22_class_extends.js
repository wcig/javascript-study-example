const log = console.log.bind(console);

// ch22: Class的继承

// 1.简介
{
    // 1.使用extends关键字继承
    class Parent {}
    class Children extends Parent {}

    // 2.子类构造函数必须调用super()方法(调用父类构造函数), 否则将会报错
    class Foo {
        constructor() {
            log('Foo constructor');
        }
    }
    class Bar1 extends Foo {
        constructor() {
            super(); // 不添加将报错
            log('Bar1 constructor');
        }
    }
    let bar1 = new Bar1();
    // Foo constructor
    // Bar1 constructor

    // 3.子类构造函数中, 只有调用super()后, 才可以使用this关键字
    class Bar2 extends Foo {
        constructor(x) {
            // this.x = x; // 将报错
            super();
            this.x = x;
            log('Bar2 constructor');
        }
    }
    let bar2 = new Bar2(123);
    // Foo constructor
    // Bar2 constructor

    // 4.子类没有显示定义构造函数, 默认会添加构造函数并调用super().
    class Bar3 extends Foo {}
    // 等同于
    class Bar4 extends Foo {
        constructor() {
            super();
        }
    }

    // 5.子类实例对象同时是父类和子类的实例
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    class ColorPoint extends Point {
        constructor(x, y, color) {
            super(x, y);
            this.color = color;
        }
    }
    let cp = new ColorPoint(1, 2, 'green');
    log(cp instanceof Point); // true
    log(cp instanceof ColorPoint); // true
}

// 2.私有属性和私有方法继承
{
    // 1) 默认情况下子类无法继承父类的私有属性和私有方法
    class Foo1 {
        #p = 1;
        #m() {
            log('hello');
        }
    }
    class Bar1 extends Foo1 {
        constructor() {
            super();
            // log(this.#p); // 报错
            // this.#m(); // 报错
        }
    }

    // 2) 当父类定义了私有属性的读写方法时, 子类可以读写私有属性.
    class Foo2 {
        #p = 1;
        getP() {
            return this.#p;
        }
    }
    class Bar2 extends Foo2 {
        constructor() {
            super();
            log(this.getP());
        }
    }
}

// 3.静态属性和静态方法继承
{
    // 1) 父类的静态属性和静态方法, 可以被子类继承.
    class A1 {
        static hello() {
            log('hello');
        }
    }
    class B1 extends A1 {}
    B1.hello(); // hello

    // 2) 静态属性的拷贝是浅拷贝
    class A2 {
        static foo = 100;
    }
    class B2 extends A2 {
        constructor() {
            super();
            B2.foo--;
        }
    }
    let b2 = new B2();
    log(A2.foo); // 100
    log(B2.foo); // 99

    class A3 {
        static foo = {n: 100};
    }
    class B3 extends A3 {
        constructor() {
            super();
            B3.foo.n--;
        }
    }
    let b3 = new B3();
    log(A3.foo.n); // 99
    log(B3.foo.n); // 99
}

// 4.Object.getPrototypeOf()
{
    // 1) Object.getPrototypeOf(): 可以用来从子类获取父类, 也可以判断一个类是否继承另一个类.
    class A {}
    class B extends A {}
    log(Object.getPrototypeOf(B) === A); // true
}

// 5.super关键字
{
    // 1) super作为函数调用, 表示父类的构造函数
    class A1 {
        constructor() {
            log(new.target.name);
        }
    }
    class B1 extends A1 {
        constructor() {
            super();
        }
    }
    new A1(); // A1
    new B1(); // B1

    // 2) super作为对象, 在普通方法中指向父类的原型对象; 在静态方法中指向父类.
    class A2 {
        p() {
            return 123;
        }
    }
    class B2 extends A2 {
        constructor() {
            super();
            log(super.p());
        }
    }
    let b2 = new B2(); // 123

    class A3 {
        static m(n) {
            log('static', n);
        }
        m(n) {
            log('instance', n);
        }
    }
    class B3 extends A3 {
        static m(n) {
            super.m(n);
        }
        m(n) {
            super.m(n);
        }
    }
    B3.m(111); // static 111
    let b3 = new B3();
    b3.m(222); // instance 222
}

// 6.类的prototype属性和__proto__属性
{
    // 1) 子类的__proto__属性, 表示构造函数的继承, 总是指向父类.
    // 2) 子类prototype属性的__proto__属性, 表示方法的继承, 总是指向父类的prototype属性.
    class A {}
    class B extends A {}
    log(B.__proto__ === A); // true
    log(B.prototype.__proto__ === A.prototype); // true

    // 3) 实例的__proto__属性: 子类实例的__proto__属性的__proto__属性, 指向父类实例的__proto__属性 (子类的原型的原型和父类的原型)
    let a = new A();
    let b = new B();
    log(b.__proto__ === a.__proto__); // false
    log(b.__proto__.__proto__ === a.__proto__); // true
}

// 7.原生构造函数是无法被继承
// Boolean()
// Number()
// String()
// Array()
// Date()
// Function()
// RegExp()
// Error()
// Object()

// 8.Mixin模式的实现: 多个对象合成一个对象
{
    const a = {
        a: 'a'
    };
    const b = {
        b: 'b'
    };
    const c = {...a, ...b};
    log(c); // {a: 'a', b: 'b'}

    function mix(...mixins) {
        class Mix {
            constructor() {
                for (let mixin of mixins) {
                    copyProperties(this, new mixin()); // 拷贝实例属性
                }
            }
        }

        for (let mixin of mixins) {
            copyProperties(Mix, mixin); // 拷贝静态属性
            copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
        }

        return Mix;
    }
    function copyProperties(target, source) {
        for (let key of Reflect.ownKeys(source)) {
            if ( key !== 'constructor'
                && key !== 'prototype'
                && key !== 'name'
            ) {
                let desc = Object.getOwnPropertyDescriptor(source, key);
                Object.defineProperty(target, key, desc);
            }
        }
    }
    class A {}
    class B {}
    class C extends mix(A, B) {
        // ...
    }
}
