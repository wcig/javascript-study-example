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

// 2.
