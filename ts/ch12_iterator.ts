
// ch12: 迭代器和生成器

// 1.迭代器
{
    // 1) 对象实现了Symbol.iterator属性表示它是可迭代的, 即可使用for...of语句
    let list = [1, 10, 100];
    for (let v of list) {
        console.log(v);
    }

    // 2) for...in也可以 用于迭代, 但主要用于对象键的遍历
    for (let i in list) {
        console.log(i, list[i]);
    }
}

// 2.生成器
{
    // 1) 当生成目标位ES5,ES3时, 迭代器只允许在Array类型使用, 在非数组使用for...of会报错, 尽管这些非数组值已经实现了Symbol.iterator属性.
    let arr = [1, 2, 3];
    for (let v of arr) {
        console.log(v);
    }

    // 生成代码
    // var arr = [1, 2, 3];
    // for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
    //     var v = arr_1[_a];
    //     console.log(v);
    // }
}