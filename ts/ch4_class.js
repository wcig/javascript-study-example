// ch4: 类
// tsc ch4_class.ts -t es5
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 与JavaScript相同处
// 1.定义
{
    var Greeter = /** @class */ (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter;
    }());
    var greeter = new Greeter("world");
}
// 2.继承
{
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 0; }
            console.log("Animal moved ".concat(distanceInMeters, "m."));
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.bark = function () {
            console.log('Woof! Woof!');
        };
        return Dog;
    }(Animal));
    var dog = new Dog();
    dog.bark();
    dog.move(10);
    dog.bark();
}
// 3.存取器
{
    var passcode_1 = "secret passcode";
    var Employee = /** @class */ (function () {
        function Employee() {
        }
        Object.defineProperty(Employee.prototype, "fullName", {
            get: function () {
                return this._fullName;
            },
            set: function (newName) {
                if (passcode_1 && passcode_1 == "secret passcode") {
                    this._fullName = newName;
                }
                else {
                    console.log("Error: Unauthorized update of employee!");
                }
            },
            enumerable: false,
            configurable: true
        });
        return Employee;
    }());
    var employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
}
// 与JavaScript不同处
// 1.公共,私有和保护修饰符
{
    // 1) public: 可被所有访问 (默认值)
    var Animal1 = /** @class */ (function () {
        function Animal1(theName) {
            this.name = theName;
        }
        Animal1.prototype.move = function (distanceInMeters) {
            console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
        };
        return Animal1;
    }());
    // 2) private: 不能被类外部访问
    var Animal2 = /** @class */ (function () {
        function Animal2(theName) {
            this.name = theName;
        }
        return Animal2;
    }());
    // new Animal2("Cat").name; // 错误: 'name' 是私有的.
    // 3) protected: 可被派生类访问
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, department) {
            var _this = _super.call(this, name) || this;
            _this.department = department;
            return _this;
        }
        Employee.prototype.getElevatorPitch = function () {
            return "Hello, my name is ".concat(this.name, " and I work in ").concat(this.department, ".");
        };
        return Employee;
    }(Person));
    var howard = new Employee("Howard", "Sales");
    console.log(howard.getElevatorPitch());
    // console.log(howard.name); // 错误
}
// 2.readonly修饰符
{
    var Octopus = /** @class */ (function () {
        function Octopus(theName) {
            this.numberOfLegs = 8;
            this.name = theName;
        }
        return Octopus;
    }());
    var dad = new Octopus("Man with the 8 strong legs");
    // dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
}
// 3.参数属性
{
    var Octopus = /** @class */ (function () {
        function Octopus(name) {
            this.name = name;
            this.numberOfLegs = 8;
        }
        return Octopus;
    }());
}
// 4.静态属性
{
    var Grid_1 = /** @class */ (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDist = (point.x - Grid.origin.x);
            var yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        };
        Grid.origin = { x: 0, y: 0 };
        return Grid;
    }());
    var grid1 = new Grid_1(1.0); // 1x scale
    var grid2 = new Grid_1(5.0); // 5x scale
    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
}
// 5.抽象类: 一般作为其他派生类的基类使用
{
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.move = function () {
            console.log('roaming the earch...');
        };
        return Animal;
    }());
}
// 6.类作为接口使用
{
    var Point = /** @class */ (function () {
        function Point() {
        }
        return Point;
    }());
    var point3d = { x: 1, y: 2, z: 3 };
}
