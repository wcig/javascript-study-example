const log = console.log.bind(console);

// ch8: 数组的扩展

// 1. 扩展运算符: 扩展运算符'...'可以将数组转为逗号分隔的参数序列
{
    log(...[1, 2, 3]); // 1 2 3
    log(2, ...[3, 4, 5]); // 2 3 4 5

    function add(x, y) {
        return x + y;
    }
    let numbers1 = [2, 6];
    log(add(...numbers1)); // 8

    // ES5写法
    log(add.apply(null, numbers1)); // 8

    function push(array, ...items) {
        array.push(...items);
    }
    let numbers2 = [3, 5];
    push(numbers1, ...numbers2);
    log(numbers1); // [ 2, 6, 3, 5 ]
}

// 扩展应用
{
    // 1) 复制数组
    // 直接复制方式, 此时只复制了底层数据结构指针.
    let a1 = [1, 2];
    let a2 = a1;
    a2[0] = 2;
    log(a1); // [ 2, 2 ]

    // ES5
    let a3 = [1, 2];
    let a4 = a3.concat();
    a4[0] = 2;
    log(a3); // [ 1, 2 ]

    // ES6
    let a5 = [1, 2];
    let a6 = [...a5];
    a6[0] = 2;
    log(a5); // [ 1, 2 ]
    let [...a7] = a5;
    a7[0] = 2;
    log(a5); // [ 1, 2 ]

    // 2) 合并数组 (注意: 以下两种方式都是浅拷贝)
    let a8 = [1, 2];
    let a9 = [3];
    let a10 = [4, 5];

    // ES5
    let a11 = a8.concat(a9, a10);
    log(a11); // [ 1, 2, 3, 4, 5 ]

    // ES6
    let a12 = [...a8, ...a9, ...a10];
    log(a12); // [ 1, 2, 3, 4, 5 ]

    // 3) 与解构赋值结合, 用于生成数组
    let a13 = [1, 2, 3];

    // ES5
    let e1 = a13[0];
    let rest1 = a13.slice(1);
    log(e1); // 1
    log(rest1); // [ 2, 3 ]

    // ES6
    let [e2, ...rest2]  = a13;
    log(e2); // 1
    log(rest2); // [ 2, 3 ]

    // 4) 将字符串转为数组
    let a14 = [...'hello你好'];
    log(a14.length, a14); // 7 [ 'h',  'e', 'l', 'l',  'o', '你', '好' ]

    // 5) 实现了Iterator接口对象, 可以用扩展运算符转为数组

    // 6) Map, Set
    let m1 = new Map([
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
    ]);
    let a15 = [...m1.keys()];
    log(a15); // [ 1, 2, 3 ]
    let a16 = [...m1.values()];
    log(a16); // [ 'one', 'two', 'three' ]
}

// 2. Array.from(): 将两类对象转为数组: 1)类似数组对象; 2)可遍历对象.
{
    // 1) 类似数组对象
    let o1 = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };

    // ES5
    let a17 = [].slice.call(o1);
    log(a17); // [ 'a', 'b', 'c' ]

    // ES6
    let a18 = Array.from(o1);
    log(a18); // [ 'a', 'b', 'c' ]

    // 2) 可遍历对象
    let s1 = new Set([1, 2]);
    let a19 = Array.from(s1);
    log(a19); // [ 1, 2 ]
}

// 3. Array.of(): 将一组值转换为数组, 主要你不Array()的不足.
{
    log(Array.of()); // []
    log(Array.of(undefined)); // [ undefined ]
    log(Array.of(3)); // [ 3 ]
    log(Array.of(1, 2, 3)); // [ 1, 2, 3 ]

    log(Array()); // []
    log(Array(undefined)); // [ undefined ]
    log(Array(3)); // [ <3 empty items> ]
    log(Array(1, 2, 3)); // [ 1, 2, 3 ]
}

// 4. 实例方法: copyWithin(): 将当前数组指定位置的成员复制到其他位置(会覆盖原有成员), 然后返回当前数组. (会修改当前数组)
// Array.prototype.copyWithin(target, start = 0, end = this.length)
// - target: 从该位置开始替换数据, 负值表示倒数.
// - start: 从该位置开始读取数据, 默认值为0, 负值表示从末尾开始计算.
// - end: 到该位置前停止读取数据, 默认值为数组长度, 负值表示从末尾开始计算.
{
    // 将从3号位置开始到5号位前成员(4,5), 复制到从0号开始位置.
    let a20 = [1, 2, 3, 4, 5];
    let a21 = a20.copyWithin(0, 3,  5);
    log(a20); // [ 4, 5, 3, 4, 5 ]
    log(a21); // [ 4, 5, 3, 4, 5 ]
}

// 5. 实例方法: find(), findIndex(), findLast(), findLastIndex()
{
    // 1) find(): 找出第一个符合条件的数组成员
    let a22 = [1, 2, 3, 4, 5].find(function (value, index, arr) {
        return value >= 3;
    });
    log(a22); // 3

    // 2) findIndex(): 找出第一个符合条件的数组成员的位置
    let a23 = [1, 2, 3, 4, 5].findIndex(function (value, index, arr) {
        return value >= 3;
    });
    log(a23); // 2
}

// 6. 实例方法: fill(): 使用给定值填充数组
{
    // 1) 实例
    log([1, 2, 3].fill(5)); // [ 5, 5, 5 ]
    log(['a', 'b', 'c'].fill(5)); // [ 5, 5, 5 ]
    log(new Array(3).fill(5)); // [ 5, 5, 5 ]

    // 2) 接受第二,三个参数, 表示填充起始和结束位置.
    log([1, 2, 3, 4, 5].fill(6, 1, 3)); // [ 1, 6, 6, 4, 5 ]
}

// 7. 实例方法: entries(), keys(), values(): 数组遍历
{
    let a24 = [3, 2, 1];

    // 1) entries()
    for (let [index, elem] of a24.entries()) {
        log(index, elem);
    }
    // 0 3
    // 1 2
    // 2 1

    // 2) keys()
    for (let index of a24.keys()) {
        log(index);
    }
    // 0
    // 1
    // 2

    // 3) values()
    for (let elem of a24.values()) {
        log(elem);
    }
    // 3
    // 2
    // 1
}

// 8. 实例方法: includes(): 数组是否包含给定值.
{
    // 1) 示例
    log([1, 2, 3].includes(1)); // true
    log([1, 2, 3].includes(-1)); // false

    // 2) 接受第二个参数, 表示搜索其实位置, 默认值为0.
    log([1, 2, 3].includes(1, 0)); // true
    log([1, 2, 3].includes(1, 1)); // false
}

// 9. 实例方法: flat(), flatMap(): 将嵌套数组拉平变为一维数组.
{
    // 1) flat()
    // 拉平一层
    log([[1, 2], [3, 4]].flat()); // [ 1, 2, 3, 4 ]

    // 拉平多层
    log([1, 2, [3, [4, 5]]].flat()); // [ 1, 2, 3, [ 4, 5 ] ]
    log([1, 2, [3, [4, 5]]].flat(2)); // [ 1, 2, 3, 4, 5 ]

    // 跳过空位
    log([1, 2, , 4, 5].flat()); // [ 1, 2, 4, 5 ]

    // 2) flatMap(): 对数组每个成员执行函数, 然后对返回值组成的数组执行flat().
    log([2, 3, 4].flatMap((x) => [x, x * 2])); // [ 2, 4, 3, 6, 4, 8 ]

    // 只能拉平一层
    log([1, 2, 3, 4].flatMap(x => [[x * 2]])); // [ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ]

    // 遍历函数支持接受3个参数, 分别是当前数组成员,位置和数组
    [].flatMap(function (value, index, array) {
        // ...
    });
}

// 10. 实例方法: at(): 接受一个整数作为参数, 返回对应位置成员, 支持负索引.
{
    let a25 = [1, 2, 3, 4, 5];
    log(a25.at(2)); //  3
    log(a25.at(-2)); // 4
}

// 11. 实例方法: toReversed(), toSorted(), toSpliced(), with(): 返回对数组操作的结果数组, 不改原数组.
{
    // 1) toReversed(): 翻转数组
    // 2) toSorted(): 排序数组
    // 3) toSpliced(): 指定位置删除指定数量成员, 并插入新成员
    // 4) with(): 将指定位置成员替换为新的值
}

// 12. 实例方法: group(), groupToMap()

// 13. 数组空位: ES6明确讲空位转为undefined
{
    log(Array.from([1, , 3])); // [ 1, undefined, 3 ]
    log([...[1, , 3]]); // [ 1, undefined, 3 ]
}

// 14. 排序稳定性: ES6规定Array.prototype.sort()的默认排序必须是稳定的.
