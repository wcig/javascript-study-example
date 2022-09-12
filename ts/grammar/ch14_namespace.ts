
// ch14: 命名空间: TypeScript中, 内部模块成为命名空间, 外部模块成为模块.

// 1.定义
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}

