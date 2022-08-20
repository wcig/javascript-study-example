const log = console.log.bind(console);

// ch9: 对象的扩展

// 1. 属性的简洁表示
{
    let foo = 'bar';
    let obj1 = {foo};
    log(obj1); // { foo: 'bar' }
    // 等同于
    let obj2 = {foo: 'bar'};

    function f1(x, y) {
        return {x, y};
    }
    // 等同于
    function f2(x, y) {
        return {x: x, y: y};
    }

    let obj3 = {
        method() {
            return 123;
        }
    }
    // 等同于
    let obj4 = {
        method: function() {
            return 123;
        }
    }
}

// 2.属性名表达式
{
    // 方式一
    let obj5 = {
        foo: true,
        bar: 123
    };

    // 方式二
    let obj6 = {};
    obj6.foo = true;
    obj6.bar = 123;

    // 方式三
    let obj7 = {};
    obj7.foo = true
    obj7['b' + 'ar'] = 123;
}

// 3.方法name属性
{
    let obj8 = {
        sayName() {
            // ...
        }
    };
    log(obj8.sayName.name); // sayName

    let obj9 = {
        get foo() {},
        set foo(x) {}
    };
    // log(obj9.foo.name); // TypeError: Cannot read properties of undefined (reading 'name')
    const descriptor = Object.getOwnPropertyDescriptor(obj9, 'foo');
    log(descriptor.get.name); // get foo
    log(descriptor.set.name); // set foo
}

// 4.属性的可枚举性和遍历
{
    // 可枚举性
    let obj10 = { foo: 123 };
    log(Object.getOwnPropertyDescriptor(obj10, 'foo')); // { value: 123, writable: true, enumerable: true, configurable: true }

    // 以下四个操作会忽略enumerable为false的属性
    // 1) for...in: 自身和继承的可枚举属性;
    // 2) Object.keys(): 自身可枚举属性的键名;
    // 3) JSON.stringify(): 只序列化自身可枚举的属性;
    // 4) Object.assign(): 只拷贝自身可枚举的属性;

    // 遍历
    // 1) for...in
    // 2) Object.keys()
    // 3) Object.getOwnPropertyNames()
    // 4) Object.getOwnPropertySymbols()
    // 5) Reflect.ownKeys()
    // 遍历顺序相同:
    // - 数值键: 按数值升序
    // - 字符串键: 按加入时间升序
    // - Symbol键: 按加入时间升序
}

// 5.super关键字: 指向当前对象的原型对象 (只能用在对象的方法中, 其他地方将报错)
{
    let obj11 = { foo: 'hello' };
    let obj12 = {
        foo: 'world',
        find() {
            return super.foo;
        }
    };
    Object.setPrototypeOf(obj12, obj11);
    log(obj12.find()); // hello
}

// 6.对象的扩展运算符
{
    // 解构赋值
    let { x, y, ...z } = { x:1, y:2, a:3, b:4 };
    log(x); // 1
    log(y); // 2
    log(z); // { a: 3, b: 4 }

    // 扩展运算符'...': 取出对象所有可遍历属性, 拷贝到当前对象中.
    let obj13 = { a:3, b:4 };
    let obj14 = { ...obj13 };
    log(obj14); // { a: 3, b: 4 }

    let obj15 = { ...['a', 'b', 'c'] };
    log(obj15); // { '0': 'a', '1': 'b', '2': 'c' }
}

// 7. AggregateError错误对象: 封装多个错误
{
    // AggregateError(errors[], message)
    // - errors: 错误数组
    // - message: 错误提示信息, 参数可选
    // try {
    //     throw new AggregateError([
    //         new Error('ERROR_11112'),
    //         new TypeError('First name must be a string'),
    //         new RangeError('Transaction value must be at least 1'),
    //         new URIError('User profile link must be https'),
    //     ], 'Transaction cannot be processed');
    // } catch (e) {
    //     log(e instanceof AggregateError);
    //     log(e.name);
    //     log(e.message);
    //     log(e.errors);
    // }
}

// 8.Error对象的cause属性
{
    const error = new Error('error', {cause: 'Error cause'});
}
