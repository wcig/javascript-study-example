const log = console.log.bind(console);

// ch17: Iterator 和 for...of 循环

// 1.概念
// 作用:
//    1) 为各种数据结构提供统一简便的访问接口;
//    2) 使数据结构的成员能够按某种次序排列;
//    3) 可以使用for...of循环遍历.

// 2.默认Iterator接口
// 默认的Iterator接口部署在数据结构的Symbol.iterator属性.
{
    // 1) 数组的Symbol.iterator属性
    let arr1 = ['a', 'b', 'c'];
    let iter1 = arr1[Symbol.iterator]();
    log(iter1.next()); // { value: 'a', done: false }
    log(iter1.next()); // { value: 'b', done: false }
    log(iter1.next()); // { value: 'c', done: false }
    log(iter1.next()); // { value: undefined, done: true }

    // 2) 对象(Object)默认没有部署Iterator接口, 可以自己部署.
    class RangeIterator {
        constructor(start, stop) {
            this.value = start;
            this.stop = stop;
        }
        [Symbol.iterator]() { return this; }
        next() {
            var value = this.value;
            if (value < this.stop) {
                this.value++;
                return {done: false, value: value};
            }
            return {done: true, value: undefined};
        }
    }
    function range(start, stop) {
        return new RangeIterator(start, stop);
    }
    for (let value of range(0, 3)) {
        console.log(value);
    }
    // 0
    // 1
    // 2
}

// 3.调用Iterator接口的场合
{
    // 1) 解构赋值
    let set1 = new Set().add(1).add(2).add(3);
    let [x1, y1] = set1;
    log(x1, y1); // 1 2

    // 2) 扩展运算符
    let str1 = 'hello';
    let [first, ...rest] = str1;
    log(first); // h
    log(rest); // [ 'e', 'l', 'l', 'o' ]

    // 3) yield*: 后面跟一个可遍历的解构, 它会调用该接口的遍历器接口
    let generator = function* () {
        yield 1;
        yield* [2,3,4];
        yield 5;
    };
    var iterator = generator();
    log(iterator.next()); // { value: 1, done: false }
    log(iterator.next()); // { value: 2, done: false }
    log(iterator.next()); // { value: 3, done: false }
    log(iterator.next()); // { value: 4, done: false }
    log(iterator.next()); // { value: 5, done: false }
    log(iterator.next()); // { value: undefined, done: true }

    // 4) 其他
    // - for...og
    // - Array.from()
    // - Map(), Set(), ...
    // Promise.all(), Promise.race()
}

// 4.字符串的Iterator接口
{
    var someString = "hi";
    log(typeof someString[Symbol.iterator]);

    var iter1 = someString[Symbol.iterator]();
    log(iter1.next());  // { value: "h", done: false }
    log(iter1.next());  // { value: "i", done: false }
    log(iter1.next());  // { value: undefined, done: true }
}

// 5.Iterator接口与Generator函数
{
    let myIterable = {
        [Symbol.iterator]: function* () {
            yield 1;
            yield 2;
            yield 3;
        }
    };
    log([...myIterable]); // [1, 2, 3]

    // 或者采用下面的简洁写法
    let obj = {
        * [Symbol.iterator]() {
            yield 'hello';
            yield 'world';
        }
    };
    for (let x of obj) {
        console.log(x);
    }
    // "hello"
    // "world"
}

// 6.遍历器对象的return(), throw()
{
    // function readLinesSync(file) {
    //   return {
    //     [Symbol.iterator]() {
    //       return {
    //         next() {
    //           return { done: false };
    //         },
    //         return() {
    //           file.close();
    //           return { done: true };
    //         }
    //       };
    //     },
    //   };
    // }

    // // 情况一
    // for (let line of readLinesSync(fileName)) {
    //   console.log(line);
    //   break;
    // }
    //
    // // 情况二
    // for (let line of readLinesSync(fileName)) {
    //   console.log(line);
    //   throw new Error();
    // }
}

// 7.for...of循环
// 一个数据结构只要部署了Symbol.iterator属性, 就被视为具有iterator接口, 就可以使用for...of遍历.
{
    // 1) 数组
    let arr = ['a', 'b', 'c'];
    for (let i in arr) {
        log(i);
    }
    // 0
    // 1
    // 2
    for (let v of arr) {
        log(v);
    }
    // a
    // b
    // c

    // 2) Set, Map
    let set = new Set(["Gecko", "Trident", "Webkit"]);
    for (let e of set) {
        log(e);
    }
    // Gecko
    // Trident
    // Webkit

    let map1 = new Map().set('a', 1).set('b', 2).set('c', 3);
    for (let pair of map1) {
        log(pair);
    }
    // [ 'a', 1 ]
    // [ 'b', 2 ]
    // [ 'c', 3 ]
    for (let [k, v] of map1) {
        log(k, v);
    }
    // a 1
    // b 2
    // c 3
    for (let pair of map1.entries()) {
        log(pair);
    }
    // [ 'a', 1 ]
    // [ 'b', 2 ]
    // [ 'c', 3 ]
}

// 8.与其他遍历语法区别
// 1) for(let i:=0; i<max; i++) {}: 写法麻烦
// 2) arr.forEach(): 无法中途退出循环
// 3) for...in: 遍历键名, 不仅遍历数字键名还会遍历手动添加的其他键(包括原型链上的键), 适合遍历对象, 不适合数组.
