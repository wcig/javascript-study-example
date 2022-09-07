const log = console.log.bind(console);

// ch23: Module的语法

// 1.概述
{
    // // 1) CommonJS模块
    // let { stat, exists, readfile } = require('fs');
    // // 等同于
    // let _fs = require('fs');
    // let stat = _fs.stat;
    // let exists = _fs.exists;
    // let readfile = _fs.readfile;
    //
    // // 2) ES6模块
    // let { stat, exists, readfile } from 'fs';
}

// 2.严格模式: ES6模块默认采用严格模式
// 严格模式主要有以下限制。
//     - 变量必须声明后再使用
//     - 函数的参数不能有同名属性，否则报错
//     - 不能使用with语句
//     - 不能对只读属性赋值，否则报错
//     - 不能使用前缀 0 表示八进制数，否则报错
//     - 不能删除不可删除的属性，否则报错
//     - 不能删除变量delete prop，会报错，只能删除属性delete global[prop]
//     - eval不会在它的外层作用域引入变量
//     - eval和arguments不能被重新赋值
//     - arguments不会自动反映函数参数的变化
//     - 不能使用arguments.callee
//     - 不能使用arguments.caller
//     - 禁止this指向全局对象 (顶层的this指向undefined)
//     - 不能使用fn.caller和fn.arguments获取函数调用的堆栈
//     - 增加了保留字（比如protected、static和interface）

// 3.export命令
{
    // 1) export命令用于归档模块对外接口, import命令用于输入其他模块的功能.

    // 2) 导出变量
    // 错误:
    // export 1;
    // let m = 1;
    // export m;
    // 正确:
    // 写法一
    // export let m = 1;
    // 写法二
    // let m = 1;
    // export {m};
    // 写法三
    // let m = 1;
    // export {m as n};

    // 3) 导出函数
    // 错误:
    // function f() {}
    // export f;
    // 正确:
    // 写法一
    // export function f() {}
    // 写法二
    // function f() {}
    // export {f};
    // 写法三
    // function f() {}
    // export {f as m};

    // 3) 合并导出
    // export let a = 1;
    // export let b = 1;
    // export let c = 1;
    // // 等同于
    // let a = 1;
    // let b = 1;
    // let c = 1;
    // export {a, b, c};

    // 4) 别名
    // function f1() {}
    // function f2() {}
    // export {
    //     f1 as m1,
    //     f2 as m2,
    // };

    // 5) export输出的接口, 对应值是动态绑定关系.
}

// 4.import命令
{
    // 1) 导入变量和函数
    // import {firstName, lastname, calAge} from './profile.js';

    // 2) import会执行所加载的模块, 但不会输入任何值.
    // import 'lodash';
}

// 5.模块的整体加载
{
    // 方式一
    // import { area, circumference } from './circle';

    // 方式二
    // import * as circle from './circle';
}

// 6.export default命令
{
    // 1) export default命令简化模块加载
    // export-default.js
    // export default function () {
    //     console.log('foo');
    // }

    // import-default.js
    // import customName from './export-default';
    // customName(); // 'foo'
}

// 7.export和import的复合写法
{
    // 复合写法
    // export { foo, bar } from 'my_module';

    // 等同于
    // import { foo, bar } from 'my_module';
    // export { foo, bar };
}

// 8.模块的继承
{
    // circleplus模块继承circle模块
    // circleplus.js
    // export * from 'circle';
    // export var e = 2.71828182846;
    // export default function(x) {
    //   return Math.exp(x);
    // }
}

// 9.跨模块常量
{
    // // constants/db.js
    // export const db = {
    //   url: 'http://my.couchdbserver.local:5984',
    //   admin_username: 'admin',
    //   admin_password: 'admin password'
    // };
    //
    // // constants/user.js
    // export const users = ['root', 'admin', 'staff', 'ceo', 'chief', 'moderator'];

    // // constants/index.js
    // export {db} from './db';
    // export {users} from './users';

    // // script.js
    // import {db, users} from './constants/index';
}

// 10.import()
