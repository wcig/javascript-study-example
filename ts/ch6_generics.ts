
// ch6: 泛型

// 1.泛型函数
{
    function identity<T>(arg: T): T {
        return arg;
    }
    let i1 = identity<string>('tom');
    let i2 = identity<number>(123);
}

// 2.泛型接口
{
    interface GenericIdentityFn {
        <T>(arg: T): T;
    }
}

// 3.泛型类
{
    class GenericNumber<T> {
        zeroValue: T;
        add: (x: T, y: T) => T;
    }
    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function(x, y) { return x + y; };
}

// 4.泛型约束
{
    // 1) 接口约束
    interface Lengthwise {
        length: number;
    }
    function loggingIdentity<T extends Lengthwise>(arg: T): T {
        console.log(arg.length);  // Now we know it has a .length property, so no more error
        return arg;
    }

    // 2) 类约束
    class BeeKeeper {
        hasMask: boolean;
    }
    class ZooKeeper {
        nametag: string;
    }
    class Animal {
        numLegs: number;
    }
    class Bee extends Animal {
        keeper: BeeKeeper;
    }
    class Lion extends Animal {
        keeper: ZooKeeper;
    }
    function createInstance<A extends Animal>(c: new () => A): A {
        return new c();
    }
}