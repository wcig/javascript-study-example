const log = console.log.bind(console);

// ch11: 运算符的扩展

// 1.指数运算符
{
    log(2 ** 10); // 1024

    let a1 = 2;
    log(a1 **= 3); // 8
}

// 2.链判断运算符
{
    // 1) 错误的写法
    // const firstName = message.body.user.firstName || 'default';
    //
    // 2) 正确的写法
    // const firstName = (message
    //   && message.body
    //   && message.body.user
    //   && message.body.user.firstName) || 'default';
    // // 等同于
    // const firstName = message?.body?.user?.firstName || 'default';

    // 3) 链判断运算符'?.'的三种写法
    // - obj?.prop: 对象的属性是否存在
    // - obj?.[expr]: 同上
    // - func?.(...args): 函数或对象方法是否存在
}

// 3.Null判断运算符
{
    // 对象属性为null或undefined时使用默认值
    // 1) 错误写法:
    // const headerText = response.settings.headerText || 'Hello, world!';

    // 2) 正确写法:
    // const headerText = response.settings.headerText ?? 'Hello, world!';

    // 3) Null判断运算符'??': 判断值是否为null或undefined
}

// 4.逻辑赋值运算符
{
    // 1) 示例
    // // 或赋值运算符
    // x ||= y
    // // 等同于
    // x || (x = y)
    //
    // // 与赋值运算符
    // x &&= y
    // // 等同于
    // x && (x = y)
    //
    // // Null 赋值运算符
    // x ??= y
    // // 等同于
    // x ?? (x = y)

    // // 老的写法
    // user.id = user.id || 1;
    //
    // // 新的写法
    // user.id ||= 1;
}
