const log = console.log.bind(console);

// ch4: 字符串的新增方法

// 1. String.fromCodePoint(): 从Unicode码点返回对应字符, 支持大于0xFFFF字符, 弥补ES5 String.fromCharCode()不支持的不足.

// 2. String.raw(): 返回斜杠都被转移的字符串, 用于模版字符串处理.
{
    let s1 = 'abc\n123';
    let s2 = String.raw`abc\n123`; // "abc\\n123"
}

// 3. codePointAt(): 正确处理4个字节的字符

// 4. normalize(): 用于欧洲语言带有语调符号和重音符号的字符, 不同表示方法统一为同样的形式, 即Unicode的正规化.

// 5. includes(), startWith(), endWith()
// includes(): 返回布尔值, 表示是否找到参数字符串
// startWith(): 返回布尔值, 表示是否参数字符串为原字符串头部
// endWith(): 返回布尔值, 表示是否参数字符串为原字符串尾部
{
    let s = 'hello tom';
    log(s.includes('tom')); // true
    log(s.startsWith('hello')); // true
    log(s.endsWith('tom')); // true

    // 支持第二个参数, 表示开始搜索的位置. (endWith行为与前两者不一致, 它查找前n个字符, 前两者从第n个位置直到结束)
    log(s.includes('tom', 5)); // true
    log(s.startsWith('hello', 5)); // false
    log(s.endsWith('tom', 5)); // false
}

// 6. repeat(): 返回原字符串的重复n次结果字符串
{
    log('abc'.repeat(3)); // abcabcabc
}

// 7. padStart(), padEnd(): 字符串补全长度, 第一个参数为补全生效最大长度, 第二个参数为用于补全的字符串.
{
    log('x'.padStart(5, 'ab')); // ababx
    log('x'.padStart(4, 'ab')); // abax

    log('x'.padEnd(5, 'ab')); // xabab
    log('x'.padEnd(4, 'ab')); // xaba
}

// 8. trimStart(), trimEnd(): 行为与trim()类似, 为消除头部或尾部空格并返回.
{
    const s = '   abc  ';
    log('|' + s.trim() + '|'); // |abc|
    log('|' + s.trimStart() + '|'); // |abc  |
    log('|' + s.trimEnd() + '|');  // |   abc|
}

// 9. matchAll(): 返回一个正则表达式在当前字符串的所有匹配.

// 10. replaceAll(): 替换所有匹配字符串.
{
    log('ababab'.replace('b', '_')); // a_abab
    log('ababab'.replaceAll('b', '_')); // a_a_a_
}

// 11. at(): 接受一个整数参数, 返回参数位置的字符, 支持负数索引.
{
    const s = 'hello你好';
    log(s.at(1)); // e
    log(s.at(-1)); // 好
}
