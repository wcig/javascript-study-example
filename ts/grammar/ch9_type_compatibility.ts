
// ch9: 类型兼容性

// 1.示例1
{
    interface Named {
        name: string;
    }
    class Person {
        name: string;
    }
    let p: Named = new Person();
}

// 2.示例2
{
    interface Named {
        name: string;
    }
    let y = { name: 'tom', age: 23 };
    let x: Named;
    x = y;
}

// 3.示例3
{
    let x = (a: number) => 0;
    let y = (b: number, s: string) => 0;

    y = x;
    // x = y; // Error
}