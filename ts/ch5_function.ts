
// ch5: 函数

// 1.函数定义: 添加类型
{
    // 1) 定义
    function add(x: number, y: number): number {
        return x + y;
    }

    // 2) 匿名函数
    let myAdd = function(x: number, y: number): number { return x + y; };
}

// 2.可选参数: 一般放在最后一个位置
{
    function buildName1(firstName: string, lastName?: string) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    let result1 = buildName1("Bob");  // works correctly now
    // let result2 = buildName1("Bob", "Adams", "Sr.");  // error, too many parameters
    let result3 = buildName1("Bob", "Adams");  // ah, just right
}

// 3.默认参数
{
    function buildName2(firstName = "Will", lastName: string) {
        return firstName + " " + lastName;
    }
    // let result1 = buildName2("Bob");                  // error, too few parameters
    // let result2 = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
    let result3 = buildName2("Bob", "Adams");         // okay and returns "Bob Adams"
    let result4 = buildName2(undefined, "Adams");     // okay and returns "Will Adams"
}

// 4.rest参数: 一般放在最后一个位置
{
    function buildName(firstName: string, ...restOfName: string[]) {
        return firstName + " " + restOfName.join(" ");
    }
    let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
}