
// ch4: 类
// tsc ch4_class.ts -t es5

// 与JavaScript相同处
// 1.定义
{
    class Greeter {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }
    let greeter = new Greeter("world");
}

// 2.继承
{
    class Animal {
        move(distanceInMeters: number = 0) {
            console.log(`Animal moved ${distanceInMeters}m.`);
        }
    }
    class Dog extends Animal {
        bark() {
            console.log('Woof! Woof!');
        }
    }
    const dog = new Dog();
    dog.bark();
    dog.move(10);
    dog.bark();
}

// 3.存取器
{
    let passcode = "secret passcode";
    class Employee {
        private _fullName: string;
        get fullName(): string {
            return this._fullName;
        }
        set fullName(newName: string) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        }
    }
    let employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
}

// 与JavaScript不同处
// 1.公共,私有和保护修饰符
{
    // 1) public: 可被所有访问 (默认值)
    class Animal1 {
        public name: string;
        public constructor(theName: string) { this.name = theName; }
        public move(distanceInMeters: number) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    // 2) private: 不能被类外部访问
    class Animal2 {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }
    // new Animal2("Cat").name; // 错误: 'name' 是私有的.

    // 3) protected: 可被派生类访问
    class Person {
        protected name: string;
        constructor(name: string) { this.name = name; }
    }
    class Employee extends Person {
        private department: string;
        constructor(name: string, department: string) {
            super(name)
            this.department = department;
        }
        public getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }
    let howard = new Employee("Howard", "Sales");
    console.log(howard.getElevatorPitch());
    // console.log(howard.name); // 错误
}

// 2.readonly修饰符
{
    class Octopus {
        readonly name: string;
        readonly numberOfLegs: number = 8;
        constructor (theName: string) {
            this.name = theName;
        }
    }
    let dad = new Octopus("Man with the 8 strong legs");
    // dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
}

// 3.参数属性
{
    class Octopus {
        readonly numberOfLegs: number = 8;
        constructor(readonly name: string) {
        }
    }
}

// 4.静态属性
{
    class Grid {
        static origin = {x: 0, y: 0};
        calculateDistanceFromOrigin(point: {x: number; y: number;}) {
            let xDist = (point.x - Grid.origin.x);
            let yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
        constructor (public scale: number) { }
    }
    let grid1 = new Grid(1.0);  // 1x scale
    let grid2 = new Grid(5.0);  // 5x scale
    console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
    console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
}

// 5.抽象类: 一般作为其他派生类的基类使用
{
    abstract class Animal {
        abstract makeSound(): void;
        move(): void {
            console.log('roaming the earch...');
        }
    }
}

// 6.类作为接口使用
{
    class Point {
        x: number;
        y: number;
    }
    interface Point3d extends Point {
        z: number;
    }
    let point3d: Point3d = {x: 1, y: 2, z: 3};
}
