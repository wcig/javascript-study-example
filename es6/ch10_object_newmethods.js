const log = console.log.bind(console);

// ch10: 对象的新增方法

// 1.Object.is(): 同值相等. 与严格比较运算符'==='行为基本一致, 区别有两个: 1)+0不等于-0; 2)NaN等于自身
{
    let obj1 = { foo: 123 };
    let obj2 = { foo: 123 };
    let obj3 = obj1;
    log(Object.is(obj1, obj2)); // false
    log(Object.is(obj1, obj3)); // true
    log(Object.is(123, 123)); // true

    log(+0 === -0); // true
    log(NaN === NaN); // false

    log(Object.is(+0, -0)); // false
    log(Object.is(NaN, NaN)); // true
}

// 2.Object.assign(): 用于对象合并, 将源对象的所有可枚举属性赋值到目标对象.
{
    // 目标与源对象属性同名会被覆盖, 多个源对象属性同名, 后面的覆盖前面的
    let src1 = {b:2, c:2};
    let src2 = {c:3, d:4};
    let dst = {a:1, b:1};
    Object.assign(dst, src1, src2);
    log(dst); // { a: 1, b: 2, c: 3, d: 4 }

    // 只有一个参数返回该参数
    let obj4 = {a:1};
    log(Object.assign(obj4) === obj4); // true

    // 非对象参数自动转对象
    log(Object.assign(123)); // [Number: 123]
    log(typeof Object.assign(123)); // object

    // 注意:
    // 1) 为浅拷贝, 不是深拷贝;
    // 2) 同属性名替换;
    // 3) 数组的处理;
    // 4) 取值函数的处理.
}

// 3.Object.getOwnPropertyDescriptors(): 返回指定对象的所有自身非继承属性的描述对象
{
    const obj5 = {
        foo: 123,
        get bar() { return 'abc' }
    };
    log(Object.getOwnPropertyDescriptors(obj5));
    // {
    //   foo: { value: 123, writable: true, enumerable: true, configurable: true },
    //   bar: {
    //     get: [Function: get bar],
    //     set: undefined,
    //     enumerable: true,
    //     configurable: true
    //   }
    // }
}

// 4.__proto__属性, Object.setPrototypeOf(), Object.getPrototype()
{
    // 1) __proto__属性: 读取和设置对象的原型对象
    // // es5 的写法
    // const obj6 = {
    //     method: function() { ... }
    // };
    // obj6.__proto__ = someOtherObj;
    //
    // // es6 的写法
    // var obj7 = Object.create(someOtherObj);
    // obj7.method = function() { ... };

    // 2) Object.setPrototypeOf(): 设置对象的原型对象
    // Object.setPrototypeOf(object, prototype)

    // 3) Object.getPrototype(): 读取对象的原型对象
    // Object.getPrototypeOf(obj)
}

// 5.Object.keys(), Object.values(), Object.entries()
{
    // 1) Object.keys(): 返回对象自身不包含继承的所有可遍历属性的键名
    let obj8 = { foo: true, bar: 123 };
    log(Object.keys(obj8)); // [ 'foo', 'bar' ]

    // 2) Object.values(): 遍历值
    log(Object.values(obj8)); // [ true, 123 ]

    // 3) Object.entries(): 遍历键值
    log(Object.entries(obj8)); // [ [ 'foo', true ], [ 'bar', 123 ] ]

    for (let k of Object.keys(obj8)) {
        log(k);
    }
    // foo
    // bar

    for (let v of Object.values(obj8)) {
        log(v);
    }
    // true
    // 123

    for (let [k, v] of Object.entries(obj8)) {
        log(k, v);
    }
    // foo true
    // bar 123
}

// 6.Object.fromEntries(): Object.entries()的逆操作, 从键值对创建对象.
{
    let entries1 = new Map([
        ['foo', true],
        ['bar', 123]
    ]);
    let obj9 = Object.fromEntries(entries1);
    log(obj9); // { foo: true, bar: 123 }

    let entries2 = new Map().set('foo', true).set('bar', 123);
    let obj10 = Object.fromEntries(entries2);
    log(obj10); // { foo: true, bar: 123 }
}

// 7.Object.hasOwn(): 判断是否为对象自身属性
{
    let obj11 = Object.create({a: 123});
    obj11.b = 456;
    log(Object.hasOwn(obj11, 'a')); // false
    log(Object.hasOwn(obj11, 'b')); // true

    // 对于不继承Object.prototype的对象不会报错
    let obj12 = Object.create(null);
    log(Object.hasOwn(obj12, 'foo')); // false
    // log(obj12.hasOwnProperty('foo')); // TypeError: obj12.hasOwnProperty is not a function
}
