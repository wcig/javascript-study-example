const log = console.log.bind(console);

// ch3: 字符串的扩展

// 1. 字符的unicode表示法
{
    log("\u0061");
    log("\uD842\uDFB7");
}

// 2. 字符串的遍历器接口 (有Iterator接口即可使用for...of遍历)
{
    for (let c of 'tom') {
        log(c);
    }
    // t
    // o
    // m

    for (let c of '你好') {
        log(c);
    }
    // 你
    // 好
}

// 3. 字符串允许直接输入字符以及其转义形式
{
    log('\u4e2d'); // 中
    log('中' === '\u4e2d'); // true
}

// 4. JSON.stringify()的改造 (JSON数据要求必须是UTF-8编码, JSON.stringify()可能返回不符合UTF-8标准字符串, 现在对于这种字符串默认转义处理)

// 5. 模版字符串
{
    let s1 = 'abc123';
    let s2 = `abc123`;
}
