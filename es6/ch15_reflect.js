const log = console.log.bind(console);

// ch15: Reflect

// 1.概述
// ES6为了操作对象提供的新API
// 设计目的:
// 1) 将Object对象的一些属于语言内部的方法(比如Object.defineProperty)放到Reflect对象上.
// 2) 修改某些Object方法的返回结果, 让其变得合理. (Object.defineProperty在无法定义属性时会报错, Reflect.defineProperty会返回false)
// 3) 让Object操作都变成函数行为. (比如name in obj -> Reflect.has(obj, name))
// 4) Reflect对象的方法与Proxy对象方法一一对应.

// 2.静态方法
{
    // Reflect.apply(target, thisArg, args)
    // Reflect.construct(target, args)
    // Reflect.get(target, name, receiver)
    // Reflect.set(target, name, value, receiver)
    // Reflect.defineProperty(target, name, desc)
    // Reflect.deleteProperty(target, name)
    // Reflect.has(target, name)
    // Reflect.ownKeys(target)
    // Reflect.isExtensible(target)
    // Reflect.preventExtensions(target)
    // Reflect.getOwnPropertyDescriptor(target, name)
    // Reflect.getPrototypeOf(target)
    // Reflect.setPrototypeOf(target, prototype)

    // 1) Reflect.get(target, name, receiver)
    // 查找并返回target对象的name属性, 没有则返回undefined
    let obj1 = {
        foo: 1,
        bar: 2,
        get baz() {
            return this.foo + this.bar;
        }
    };
    log(Reflect.get(obj1, 'foo')); // 1
    log(Reflect.get(obj1, 'bar')); // 2
    log(Reflect.get(obj1, 'baz')); // 3

    // 如果name属性部署了读取函数(getter), 则读取函数的this绑定receiver.
    let receiver1 = {
        foo: 3,
        bar: 4
    };
    log(Reflect.get(obj1, 'baz', receiver1)); // 7

    // 2) Reflect.set(target, name, value, receiver)
    // 设置target对象的name属性为value
    let obj2 = {
        foo: 1,
        set bar(value) {
            return this.foo = value;
        }
    };
    log(obj2.foo); // 1
    Reflect.set(obj2, 'foo', 2);
    log(obj2.foo); // 2
    Reflect.set(obj2, 'bar', 3);
    log(obj2.foo); // 3

    // 如果name属性部署了赋值函数(setter), 则赋值函数的this绑定receiver.
    let receiver2 = {foo: 0};
    Reflect.set(obj2, 'bar', 1, receiver2);
    log(obj2.foo); // 3
    log(receiver2.foo); // 1

    // 3) Reflect.has(obj, name)
    // 等同于name in obj
    let obj3 = {foo: 111};
    log('foo' in obj3); // true
    log(Reflect.has(obj3, 'foo')); // true

    // 4) Reflect.deleteProperty(obj, name)
    // 等同于delete obj[name]
    let obj4 = {foo: 111, bar: 222};
    delete obj4.foo;
    log(obj4); // { bar: 222 }
    Reflect.deleteProperty(obj4, 'bar');
    log(obj4); // {}

    // 5) Reflect.construct(target, args)
    // 等同于new target(...args)
    function Greeting(name) {
        this.name = name;
    }
    let obj5 = new Greeting('tom');
    let obj6 = Reflect.construct(Greeting, ['tom']);

    // 6) Reflect.getPrototypeOf(obj)
    // 读取对象的__proto__属性, 等同于Object.getPrototype(obj).
    function FancyThing() {}
    let obj7 = new FancyThing();
    log(Object.getPrototypeOf(obj7) === FancyThing.prototype); // true
    log(Reflect.getPrototypeOf(obj7) === FancyThing.prototype); // true

    // 7) Reflect.setPrototypeOf(obj, newProto)
    // 设置目标对象的原型, 等同于Object.setPrototypeOf(obj, newProto), 返回一个布尔值表示是否设置成功.
    let obj8 = {};
    Object.setPrototypeOf(obj8, Array.prototype);
    Reflect.setPrototypeOf(obj8, Array.prototype);

    // 8) Reflect.apply(func, thisArg, args)
    // 绑定this对象后执行给到函数, 等同于Function.prototype.apply.call(func, thisArg, args).
    const ages = [11, 33, 12, 54, 18, 96];
    // 旧写法
    const youngest1 = Math.min.apply(Math, ages);
    const oldest1 = Math.max.apply(Math, ages);
    const type1 = Object.prototype.toString.call(youngest1);
    // 新写法
    const youngest2 = Reflect.apply(Math.min, Math, ages);
    const oldest2 = Reflect.apply(Math.max, Math, ages);
    const type2 = Reflect.apply(Object.prototype.toString, youngest2, []);

    // 9) Reflect.defineProperty(target, propertyKey, attributes)
    // 为对象定义属性, 等同于Object.defineProperty.
    function MyDate() {}
    // 旧写法
    Object.defineProperty(MyDate, 'now', {
        value: () => Date.now()
    });
    // 新写法
    Reflect.defineProperty(MyDate, 'now', {
        value: () => Date.now()
    });

    // 10) Reflect.getOwnPropertyDescriptor
    // 等同于Object.getOwnPropertyDescriptor
    let obj9 = {};
    Object.defineProperty(obj9, 'hidden', {
        value: true,
        enumerable: false,
    });
    // 旧写法
    let theDescriptor1 = Object.getOwnPropertyDescriptor(obj9, 'hidden');
    // 新写法
    let theDescriptor2 = Reflect.getOwnPropertyDescriptor(obj9, 'hidden');

    // 11) Reflect.isExtensible(target)
    // 返回一个布尔值表示当前对象是否可扩展, 等同于Object.isExtensible
    let obj10 = {};
    // 旧写法
    log(Object.isExtensible(obj10)); // true
    // 新写法
    log(Reflect.isExtensible(obj10)); // true

    // 12) Reflect.preventExtensions(target)
    // 让对象变的不可扩展, 返回布尔值表示是否操作成功, 等同于Object.preventExtensions.
    let obj11 = {};
    // 旧写法
    log(Object.preventExtensions(obj11)); // true
    // 新写法
    log(Reflect.preventExtensions(obj11)); // true

    // 13) Reflect.ownKeys(target)
    // 返回对象的所有属性, 等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和
    var obj12 = {
        foo: 1,
        bar: 2,
        [Symbol.for('baz')]: 3,
        [Symbol.for('bing')]: 4,
    };
    // 旧写法
    log(Object.getOwnPropertyNames(obj12)); // [ 'foo', 'bar' ]
    log(Object.getOwnPropertySymbols(obj12)); // [ Symbol(baz), Symbol(bing) ]
    // 新写法
    log(Reflect.ownKeys(obj12)); // [ 'foo', 'bar', Symbol(baz), Symbol(bing) ]
}

// 3.实例: 使用Proxy实现观察者模式
{
    const queuedObservers = new Set();
    const observe = fn => queuedObservers.add(fn);
    const observable = obj => new Proxy(obj, {set});
    function set(target, key, value, receiver) {
        const result = Reflect.set(target, key, value, receiver);
        queuedObservers.forEach(observer => observer());
        return result;
    }

    const person = observable({
        name: '张三',
        age: 20
    });
    function print() {
        console.log(`${person.name}, ${person.age}`)
    }
    observe(print);
    person.name = '李四'; // 李四, 20
}
