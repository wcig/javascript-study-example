// ch5: 函数
// 1.函数定义: 添加类型
{
    // 1) 定义
    function add(x, y) {
        return x + y;
    }
    // 2) 匿名函数
    var myAdd = function (x, y) { return x + y; };
}
// 2.可选参数: 一般放在最后一个位置
{
    function buildName1(firstName, lastName) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    var result1 = buildName1("Bob"); // works correctly now
    // let result2 = buildName1("Bob", "Adams", "Sr.");  // error, too many parameters
    var result3 = buildName1("Bob", "Adams"); // ah, just right
}
// 3.默认参数
{
    function buildName2(firstName, lastName) {
        if (firstName === void 0) { firstName = "Will"; }
        return firstName + " " + lastName;
    }
    // let result1 = buildName2("Bob");                  // error, too few parameters
    // let result2 = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
    var result3 = buildName2("Bob", "Adams"); // okay and returns "Bob Adams"
    var result4 = buildName2(undefined, "Adams"); // okay and returns "Will Adams"
}
// 4.rest参数: 一般放在最后一个位置
{
    function buildName(firstName) {
        var restOfName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restOfName[_i - 1] = arguments[_i];
        }
        return firstName + " " + restOfName.join(" ");
    }
    var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
}
