const log = console.log.bind(console);

// ch1: let 和 const 命令

// 1. let命令
// 描述: es6新增let命令用于声明变量, 与var类似, 但是起声明的变量只在代码块内有效, 不存在变量提升
// 1) 使用
{
    let a1 = 111;
    var a2 = 222;
}
// log(a1); // ReferenceError: a1 is not defined
log(a2); // 222

// 2) 适用场景: 代码块, for循环.
for (let i = 0; i < 3; i++) {
    // ...
}
// log(i); // ReferenceError: i is not defined

// 3) let不允许在同一个作用域内重复声明同一个变量
{
    let a3 = 1;
    // let a3 = 2; // SyntaxError: Identifier 'a3' has already been declared
}

// 2. const命令
// 描述: const声明一个只读的常量, 一旦声明常量值就不可修改.
{
    const c1 = 1;
    // c1 = 2; // TypeError: Assignment to constant variable.
}