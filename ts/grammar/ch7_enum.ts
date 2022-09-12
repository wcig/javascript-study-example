const log = console.log.bind(console);

// ch7: 枚举

// 1.数字枚举
{
    // 1) 不初始化值
    enum Direction1 {
        Up,
        Down,
        Left,
        Right,
    }
    log(Direction1.Up, Direction1.Down, Direction1.Left, Direction1.Right); // 0 1 2 3

    // 2) 初始化值
    enum Direction2 {
        Up = 1,
        Down,
        Left,
        Right,
    }
    log(Direction2.Up, Direction2.Down, Direction2.Left, Direction2.Right); // 1 2 3 4

    enum Direction3 {
        Up = 1,
        Down = 2,
        Left = 4,
        Right = 8,
    }
    log(Direction3.Up, Direction3.Down, Direction3.Left, Direction3.Right); // 1 2 4 8
}

// 2.字符串枚举
{
    enum Direction {
        Up = "UP",
        Down = "DOWN",
        Left = "LEFT",
        Right = "RIGHT",
    }
    log(Direction.Up, Direction.Down, Direction.Left, Direction.Right); // UP DOWN LEFT RIGHT
}