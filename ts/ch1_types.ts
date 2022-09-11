const log = console.log.bind(console);

// ch1: 基础类型

// 类型分类
// - 布尔值: boolean
// - 数值: number (整数+浮点数)
// - 字符串: string
// - 数组: type[] 或 Array<type>
// - 元组
// - 枚举
// - any
// - void
// - null, undefined
// - never
// - object


// 1.布尔值
{
    let b1: boolean = true;
    let b2: boolean = false;
    let b3: boolean;
    log(b1, b2, b3); // true false undefined
}

// 2.数值
{
    let n1: number = 123;
    let n2: number = 111.22;
    let n3: number = 0xf00d;
    let n4: number = 0b1010;
    let n5: number = 0o744;
    let n6: number;
    log(n1, n2, n3, n4, n5, n6); // 123 111.22 61453 10 484 undefined
}

// 3.字符串
{
    // 1) 初始化
    let s1: string = 'tom';
    let s2: string = "jerry";
    let s3: string;
    log(s1, s2, s3); // tom jerry undefined

    // 2) 拼接
    let name: string = 'tom';
    let age: number = 23;
    let s4: string = 'Hello, my name is ' + name + '.\n' + 'My age is ' + age;
    let s5: string = `Hello, my name is ${name}.\nMy age is ${age}`
    log(s4 === s5); // true
    log(s4);
    // Hello, my name is tom.
    // My age is 23
}

// 4.数组: 元素类型相同
{
    // 1) 方式一
    let l1: number[] = [1, 2, 3];
    let l2: Array<number> = [4, 5, 6];
    let l3: number[];
    log(l1, l2, l3); // [ 1, 2, 3 ] [ 4, 5, 6 ] undefined
}

// 5.元组 (Tuple): 元素类型不必相同
{
    let t1: [number, string] = [123, 'tome'];
    log(t1); //[ 123, 'tome' ]
}

// 6.枚举
{
    // 1) 方式一
    enum Color1 {Red, Green, Blue};
    let c1: Color1 = Color1.Red;
    log(c1); // 0

    // 2) 方式二
    enum Color2 {Red = 1, Green = 2, Blue = 4}
    let c2: Color2 = Color2.Blue;
    log(c2); // 4
}

// 7.any: 任意类型
{
    let a1: any = 123;
    a1 = 'tom';
    a1 = [1, 2, 3];
    log(a1); // [ 1, 2, 3 ]
}

// 8.void: 与any相反没有任何类型, 一般用作函数返回值
{
    function f1(): void {
        log('no return function');
    }
    let v1: void = undefined;
    let v2: void = null;
}

// 9.null, undefined: 主要用于空判断, 本身类型用户不大
{
    let u: undefined = undefined;
    let n: null = null;
}

// 10.never: 永不存在的值的类型
{
    function error(msg: string): never {
        throw new Error(msg);
    }
}

// 11.object: 非原始类型, 即除number, string, boolean, symbol, null, undefined之外的类型.
{
    let o: object = {};
}

// 12.类型断言
{
    // 1) 方式一: <type>
    let a1: any = 'tom';
    let s: string = <string>a1;
    log(s); // tom

    // 2) 方式二: as
    let a2: any = 123;
    let n: number = a2 as number;
    log(n); // 123
}
