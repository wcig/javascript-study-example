const log = console.log.bind(console);

// ch2: 变量声明

// 1.与JavaScript相同处
// - let/const关键字
// - 变量作用域/块作用域
// - 解构

// 2.与JavaScript不同处
// - 变量声明需要加上类型
// - 函数入参和出参需要加上类型
{
    let name: string = 'tom';

    function cal(x: number, y:number): number {
        return x + y;
    }
}