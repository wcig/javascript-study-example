const log = console.log.bind(console);

// ch6: 数值的扩展

// 1. 二进制和八进制
{
    // 二进制和八进制写法
    log(0b111110111 === 503); // true
    log(0o767 === 503); // true

    // 二进制和八进制字符串转为十进制数值
    log(Number('0b111110111')); // 503
    log(Number('0o767')); // 503
}

// 2. 数值分隔符
{
    log(123_00 === 12_300); // true
    log(1.00_1 === 1.0_01); // true
}

// 3. Number.isFinite(), Number.isNaN()
{
    // 1) Number.isFinite(): 检查是否为有限值而不是Infinity (不是数值一律返回false)
    log(Number.isFinite(15)); // true
    log(Number.isFinite(0.8)); // true
    log(Number.isFinite(NaN)); // false
    log(Number.isFinite(Infinity)); // false
    log(Number.isFinite(-Infinity)); // false
    log(Number.isFinite('foo')); // false
    log(Number.isFinite('15')); // false
    log(Number.isFinite(true)); // false

    // 2) Number.isNaN(): 检查是否为NaN
    log(Number.isNaN(NaN)); // true
    log(Number.isNaN(15)); // false
    log(Number.isNaN('15')); // false
    log(Number.isNaN(true)); // false
    log(Number.isNaN(9/NaN)); // true
    log(Number.isNaN('true' / 0)); // true
    log(Number.isNaN('true' / 'true')); // true

    // 3) Number提供的这2个方法, 与全局的isFinite()和isNaN()方法区别在于, 全局方法会先将非参数值转为数值再进行判断, Number的方法值对数值有效.
    log(isFinite(25)); // true
    log(isFinite("25")); // true
    log(Number.isFinite(25)); // true
    log(Number.isFinite("25")); // false

    log(isNaN(NaN)); // true
    log(isNaN("NaN")); // true
    log(Number.isNaN(NaN)); // true
    log(Number.isNaN("NaN")); // false
    log(Number.isNaN(1)); // false
}

// 4. Number.parseInt(), Number.parseFloat(): ES6将全局方法parseInt(),parseFloat()移植到Number对象上, 行为完全保持不变.
{
// ES5的写法
    log(parseInt('12.34')); // 12
    log(parseFloat('123.45#')); // 123.45

// ES6的写法
    log(Number.parseInt('12.34')); // 12
    log(Number.parseFloat('123.45#')); // 123.45
}

// 5. Number.isInteger(): 判断一个数值是否为整数, 不是数值默认返回false.
{
    log(Number.isInteger(25)); // true
    log(Number.isInteger(25.1)); // false
    log(Number.isInteger(25.0)); // true

    log(Number.isInteger()); // false
    log(Number.isInteger('25')); // false
    log(Number.isInteger(null)); // false
    log(Number.isInteger(true)); // false
}

// 6. Number.EPSILON: 极小常量, 表示1与大雨1的最小浮点数之差.
{
    log(Number.EPSILON); // 2.220446049250313e-16
    log(Number.EPSILON === Math.pow(2, -52)); // true
}

// 7. 安全整数
{
    // 1) JS能精确表示整数范围在-2^53到2^53之间(不包括两个端点), 超过则无法精确表示.
    log(Math.pow(2, 53)); // 9007199254740992
    log(Math.pow(2, 53) === Math.pow(2, 53) + 1 ); // true

    // 2) ES6引入Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER两个常量表示两个边界值.
    log(Number.MAX_SAFE_INTEGER); // 9007199254740991
    log(Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1); // true
    log(Number.MIN_SAFE_INTEGER); // -9007199254740991
    log(Number.MIN_SAFE_INTEGER === -Math.pow(2, 53) + 1); // true

    // 3) Number.isSafeInteger(): 表示整数是否在范围内, 非整数数值为false
    log(Number.isSafeInteger(25)); // true
    log(Number.isSafeInteger(25.0)); // true
    log(Number.isSafeInteger(25.1)); // false
    log(Number.isSafeInteger('25')); // false
    log(Number.isSafeInteger(true)); // false
    log(Number.isSafeInteger(NaN)); // false
    log(Number.isSafeInteger(null)); // false
    log(Number.isSafeInteger(undefined)); // false
}

// 8. Math 对象的扩展
// 8.1 Math.trunc(): 返回去除小数部分的整数, 对于非数值先使用Number转为数值.
{
    log(Math.trunc(4.1)); // 4
    log(Math.trunc(4.9)); // 4
    log(Math.trunc(-4.1)); // -4
    log(Math.trunc(-4.9)); // -4
    log(Math.trunc(-0.1234)); // -0

    // 非数值先使用Number转为数值
    log(Math.trunc('123.456')) // 123
    log(Math.trunc(true)) // 1
    log(Math.trunc(false)) // 0
    log(Math.trunc(null)) // 0

    // 空值和无法截取整数的值返回NaN
    log(Math.trunc(NaN)); // NaN
    log(Math.trunc('foo')); // NaN
    log(Math.trunc()); // NaN
    log(Math.trunc(undefined)); // NaN
}

// 8.2 Math.sign(): 判断一个数是正数,负数还是零, 对于非数值会先转为数值
// 1) 正数: 返回+1;
// 2) 负数: 返回-1;
// 3) 0: 返回0;
// 4) -0: 返回-0;
// 5) 其他值: 返回NaN.
{
    log(Math.sign(123)); // 1
    log(Math.sign(-123)); // -1
    log(Math.sign(0)); // 0
    log(Math.sign(-0)); // -0
    log(Math.sign('123')); // 1
    log(Math.sign(null)); // 0
    log(Math.sign(NaN)); // NaN
}

// 8.3 Math.cbrt(): 计算一个数的立方根
// 8.4 Math.clz32(): 将参数转为 32 位无符号整数的形式, 然后返回这个 32 位值里面有多少个前导 0.
// 8.5 Math.imul(): 返回两个数以 32 位带符号整数形式相乘的结果, 返回的也是一个 32 位的带符号整数.
// 8.6 Math.fround(): 返回一个数的32位单精度浮点数形式
// 8.7 Math.hypot(): 返回所有参数的平方和的平方根

// 9. BigInt数据类型 (添加后缀n)
{
    let n1 = 1234; // 普通整数
    let n2 = 1234n; // BigInt

    log(n1 === n2); // false
}

// 10. BitInt函数: 生成BitInt类型数值, 支持非数值转换
{
    log(BigInt(123) === 123n); // true
    log(BigInt(123)); // 123n
    log(BigInt('123')); // 123n
    log(BigInt(true)); // 1n
    log(BigInt(false)); // 0n

    // 与其他类型转换
    log(Boolean(0n)); // false
    log(Boolean(1n)); // true
    log(Number(1n));  // 1
    log(String(1n));  // "1"
}
