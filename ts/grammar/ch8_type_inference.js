// ch8: 类型推论
// 1.介绍: TypeScript中, 在没有明确指出类型地方, 类型推论会帮助提供类型.
{
    var x = 123;
    var arr = [0, 1, null];
    // any类型
    // window.onmousedown = function(mouseEvent) {
    //     console.log(mouseEvent.button);  // Error
    // };
    // window.onmousedown = function(mouseEvent: any) {
    //     console.log(mouseEvent.button);
    // };
}
