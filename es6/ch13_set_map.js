const log = console.log.bind(console);

// ch13: Set, Map

// 1.Set: 没有重复值的数据结构
{
    // 1) 初始化
    // 方式一:
    let s1 = new Set();
    s1.add(1);
    s1.add(2);
    s1.add(3);
    s1.add(1);
    log(s1); // Set(3) { 1, 2, 3 }

    // 方式二:
    let s2 = new Set([1, 2, 3, 4, 4]);
    log(s2); // Set(4) { 1, 2, 3, 4 }

    // 2) 遍历
    let s3 = new Set([1, 2, 3]);
    for (let v of s3) {
        log(v);
    }
    // 1
    // 2
    // 3

    // 3) Set与数组转换
    // Set -> 数组
    let s4 = new Set([3, 2, 1]);
    let a1 = [...s4];
    log(a1); // [ 3, 2, 1 ]

    let a11 = Array.from(s4);
    log(a11); // [ 3, 2, 1 ]

    // 数组 -> Set
    let a2 = [1, 2, 3];
    let s5 = new Set(a2);
    log(s5); // Set(3) { 1, 2, 3 }

    // 4) Set用于数组去重
    let a3 = [1, 2, 3, 2, 1];
    a3 = [...new Set(a3)];
    log(a3); // [ 1, 2, 3 ]

    // 5) Set去除字符串中的重复字符
    let str1 = 'ababbc';
    let str2 = [...new Set(str1)].join('');
    log(str2); // abc

    // 6) 向Set加入值, 不会发生类型转换
    let s6 = new Set();
    s6.add(123);
    s6.add('123');
    s6.add(true);
    log(s6); // Set(3) { 123, '123', true }

    // 7) Set中值相等判断: NaN都相等, 两个对象总是不相等
    let s7 = new Set();
    let nan1 = NaN;
    let nan2 = NaN;
    s7.add(nan1);
    s7.add(nan2);
    log(s7); // Set(1) { NaN }

    let s8 = new Set();
    let o1 = {};
    s8.add(o1);
    log(s8); // Set(1) { {} }
    let o2 = {};
    s8.add(o2);
    log(s8); // Set(2) { {}, {} }

    // 8) Set的大小
    let s9 = new Set([1, 2, 3]);
    log(s9.size); // 3
}

// Set实例的属性和方法
{
    // Set实例的属性:
    // - Set.prototype.constructor: 构造函数, 默认是Set函数
    // - Set.prototype.size: 返回Set实例的成员数

    // Set实例的方法:
    // - Set.prototype.add(value): 添加元素, 返回Set本身
    // - Set.prototype.delete(value): 删除元素, 返回一个布尔值表示删除是否成功
    // - Set.prototype.has(value): 返回一个布尔值表示值是否为Set的成员
    // - Set.prototype.clear(value): 删除所有成员, 无返回值

    // 1) 示例
    let s10 = new Set();
    log(s10.add(111)); // Set(1) { 111 }
    log(s10, s10.size); // Set(1) { 111 } 1

    log(s10.delete(111)); // true
    log(s10, s10.size); // Set(0) {} 0

    s10.add(222);
    log(s10.has(222)); // true
    log(s10, s10.size); // Set(1) { 222 } 1

    s10.clear();
    log(s10, s10.size); // Set(0) {} 0

    // 2) 与对象写法对比
    let s11 = new  Set();
    s11.add('width');
    s11.add('height');
    if (s11.has('width')) {
        // ...
    }

    let o1 = {
        'width': 16,
        'height': 9
    };
    if (o1['width']) {
        // ...
    }

    // Set实例的四个遍历方法
    // - Set.prototype.keys(): 返回键名的遍历器
    // - Set.prototype.values(): 返回键值的遍历器
    // - Set.prototype.entries(): 返回键值对的遍历器
    // - Set.prototype.forEach(): 使用回调函数遍历每个成员

    let s12 = new Set(['red', 'green', 'blue']);
    for (let item of s12.keys()) {
        log(item);
    }
    // red
    // green
    // blue

    for (let item of s12.values()) {
        log(item);
    }
    // red
    // green
    // blue

    for (let item of s12.entries()) {
        log(item);
    }
    // [ 'red', 'red' ]
    // [ 'green', 'green' ]
    // [ 'blue', 'blue' ]

    s12.forEach((value, key) => log(key + ':' + value));
    // red:red
    // green:green
    // blue:blue

    // 3) 使用Set求并集, 交集和差集
    let s13 = new Set([1, 2, 3]);
    let s14 = new Set([4, 3, 2]);

    // 并集
    let s15 = new Set([...s13, ...s14]);
    log(s15); // Set(4) { 1, 2, 3, 4 }

    // 交集
    let s16 = new Set([...s13].filter(x => s14.has(x)));
    log(s16); // Set(2) { 2, 3 }

    // 差集
    let s17 = new Set([...s13].filter(x => !s14.has(x)));
    log(s17); // Set(1) { 1 }
}

// 2.WeakSet: 与Set类似, 区别在于: 1)成员只能是对象,不能是其他类型值; 2)都是弱引用
{
    // 1) 使用new命令创建
    // 初始化方式一:
    let ws1 = new WeakSet();
    ws1.add({a: 1});
    ws1.add({b: 2});

    // 初始化方式二: (任何具有Iterable接口的对象都可以作为WeakSet的参数)
    let ws2 = new WeakSet([{c: 3}, {d: 4}]);

    // 2) 成员必须是对象
    let a1 = [[1, 2], [3, 4]];
    let ws3 = new WeakSet(a1);

    let a2 = [1, 2];
    // let ws4 = new WeakSet(a2); // TypeError: Invalid value used in weak set

    // 3) WeakSet的三个方法:
    // - WeakSet.prototype.add(value): 添加成员
    // - WeakSet.prototype.delete(value): 删除成员
    // - WeakSet.prototype.has(value): 返回一个布尔值表示是否某个值存在
}

// 3.Map: JS中对象(Object), 本质上也是键值对集合, 但是其只能字符串作为键, 所以ES6引入了Map数据结构.
{
    // 1) 使用new命令创建
    // 初始化方式一:
    let m1 = new Map();
    m1.set('a', 1);
    m1.set('b', 2);
    log(m1); // Map(2) { 'a' => 1, 'b' => 2 }

    // 初始化方式二: (任何具有Iterable接口且每个成员都是一个双元素的数组的数据结构, 可以作为Map的参数)
    let m2 = new Map([
        ['c', 3],
        ['d', 4]
    ]);
    log(m2); // Map(2) { 'c' => 3, 'd' => 4 }

    // Map构造函数接受数组作为参数, 实际上执行算法:
    let a1 = [
        ['c', 3],
        ['d', 4]
    ];
    let m3 = new Map();
    a1.forEach(
        ([key, value]) => m3.set(key, value)
    );
    log(m3); // Map(2) { 'c' => 3, 'd' => 4 }

    // 2) set设值时后面的覆盖前面的, get取值时不存在则返回undefined
    let m4 = new Map();
    m4.set(1, 111);
    m4.set(1, 222);
    log(m4.get(1)); // 222
    log(m4.get(2)); // undefined
}

// Map实例的属性和方法
{
    // 1) size属性: 返回Map的成员数
    let m1 = new Map();
    log(m1.size); // 0
    m1.set('foo', true);
    m1.set('bar', false);
    log(m1.size); // 2

    // 2) Map.prototype.set(key, value): 添加成员
    let m2 = new Map()
        .set(1, 111)
        .set(2, 222)
        .set(3, 333);

    // 3) Map.prototype.get(key): 获取成员key对应的值
    log(m2.get(1)); // 111

    // 4) Map.prototype.has(key): 某个key是否存在于Map
    log(m2.has(2)); // true
    log(m2.has(20)); // false

    // 5) Map.prototype.delete(key): 删除某个key, 成功返回true, 失败返回false
    log(m2.delete(3)); // true
    log(m2.delete(30)); // false

    // 6) Map.prototype.clear(): 移除所有成员, 没有返回值
    log(m2); // Map(2) { 1 => 111, 2 => 222 }
    m2.clear();
    log(m2); // Map(0) {}

    // 7) 遍历方法: (Map的遍历顺序是按插入顺序)
    // - Map.prototype.keys(): 返回key的遍历器
    // - Map.prototype.values(): 返回value的遍历器
    // - Map.prototype.entries(): 返回所有成员的遍历器
    // - Map.prototype.forEach(): 遍历Map的所有成员
    let m3 = new Map()
        .set(1, 111)
        .set(2, 222)
        .set(3, 333);

    for (let key of m3.keys()) {
        log(key);
    }
    // 1
    // 2
    // 3

    for (let value of m3.values()) {
        log(value);
    }
    // 111
    // 222
    // 333

    for (let [key, value] of m3.entries()) {
        log(key, value);
    }
    // 1 111
    // 2 222
    // 3 333

    m3.forEach(function(value, key, map){
        log(key, value);
    });
    // 1 111
    // 2 222
    // 3 333

    const reporter = {
        report: function(key, value) {
            console.log("Key: %s, Value: %s", key, value);
        }
    };
    m3.forEach(function(value, key, map) {
        this.report(key, value);
    }, reporter);
    // Key: 1, Value: 111
    // Key: 2, Value: 222
    // Key: 3, Value: 333

    log([...m3.keys()]); // [ 1, 2, 3 ]
    log([...m3.values()]); // [ 111, 222, 333 ]
    log([...m3.entries()]);
    log([...m3]);

    // 8) 与其他数据结构转换
    // Map -> 数组
    let m4 = new Map()
        .set(1, 111)
        .set(2, 222)
        .set(3, 333);
    log([...m4]); // [ [ 1, 111 ], [ 2, 222 ], [ 3, 333 ] ]

    // 数组 -> Map
    let m5 = new Map([
        [1, 111],
        [2, 222],
        [3, 333]
    ]);

    // Map -> 对象
    function strMapToObj(strMap) {
        let obj = Object.create(null);
        for (let [k, v] of strMap) {
            obj[k] = v;
        }
        return obj;
    }
    let m6 = new Map()
        .set('a', 111)
        .set('b', 222)
        .set('c', 333);
    log(strMapToObj(m6)); // [Object: null prototype] { a: 111, b: 222, c: 333 }

    // 对象 -> Map
    let obj1 = {'a': 1, 'b': 2};
    let m7 = new Map(Object.entries(obj1));
    log(m7); // Map(2) { 'a' => 1, 'b' => 2 }

    function objToStrMap(obj) {
        let strMap = new Map();
        for (let k of Object.keys(obj)) {
            strMap.set(k, obj[k]);
        }
        return strMap;
    }
    let m8 = objToStrMap(obj1);
    log(m8); // Map(2) { 'a' => 1, 'b' => 2 }

    // Map -> JSON
    function strMapToJson(strMap) {
        return JSON.stringify(strMapToObj(strMap));
    }
    let m9 = new Map().set('yes', true).set('no', false);
    log(strMapToJson(m9)); // {"yes":true,"no":false}

    function mapToArrayJson(map) {
        return JSON.stringify([...map]);
    }
    let m10 = new Map().set(true, 7).set({foo: 3}, ['abc']);
    log(mapToArrayJson(m10)); // [[true,7],[{"foo":3},["abc"]]]

    // JSON -> Map
    function jsonToStrMap(jsonStr) {
        return objToStrMap(JSON.parse(jsonStr));
    }
    log(jsonToStrMap('{"yes":true,"no":false}')); // Map(2) { 'yes' => true, 'no' => false }

    function jsonToMap(jsonStr) {
        return new Map(JSON.parse(jsonStr));
    }
    log(jsonToMap('[[true,7],[{"foo":3},["abc"]]]')); // Map(2) { true => 7, { foo: 3 } => [ 'abc' ] }
}

// 4.WeakMap: 与Map类似, 区别在于: 1)WeakMap只接受对象类型作为key(null除外); 2)key所引用对象为弱引用.
{
    let wm1 = new WeakMap();
    let o1 = {'a': 1};
    let o2 = {'b': 2};
    wm1.set(o1, 111);
    wm1.set(o2, 222);
}

// 5.WeakRef: 与WeakMap一样也是弱引用的数据结构.

// 6.FinalizationRegistry: 用来指定目标对象被垃圾回收机制清除以后, 所要执行的回调函数.
