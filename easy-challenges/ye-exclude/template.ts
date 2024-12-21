type MyExclude<T, U> = T extends U ? never : T

// * 在 ts 类型判断中, T 作为一个联合类型, 并不是一次判断的, 而是一个一个依次判断的
// * ts 并非是这样判断的直接判断类型的, 伪实现
// ! 错误的代码, includes 这样传递参数是表示搜索 1, 从下标 2 开始, 这里是伪实现
;[1, 2, 3].includes(1, 2) // ! 再次提醒
// * ts 是一个一个依次判断的
;[1, 2, 3].includes(1) && [1, 2, 3].includes(2) && [1, 2, 3].includes(3)
