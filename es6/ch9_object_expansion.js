const log = console.log.bind(console);

// ch9: 对象的扩展

// 1. 属性的简洁表示
{
    let foo = 'bar';
    let obj1 = {foo};
    log(obj1); // { foo: 'bar' }
    // 等同于
    let obj2 = {foo: 'bar'};

    function f1(x, y) {
        return {x, y};
    }
    // 等同于
    function f2(x, y) {
        return {x: x, y: y};
    }

    let obj3 = {
        method() {
            return 123;
        }
    }
    // 等同于
    let obj4 = {
        method: function() {
            return 123;
        }
    }
}

// 2.属性名表达式 TODO
