type First1<T extends any[]> = T extends [] ? never : T[0]
// 1
// * 返回值不是对象, 直接返回第一个值的类型
// * 如果是空数组, T[0] 取到的就是值 undefined, 类型也就是 undefined, 所以使用 extends 和 三元运算符判断

type First2<T extends any[]> = T['length'] extends 0 ? never : T[0]
// 2
// * 使用 js 可以判断数组的长度, ts 的类型同样也可以, 使用索引签名 indexed

type First3<T extends any[]> = T[0] extends T[number] ? T[0] : never
// 3
// * 利用 T[number] 返回的是联合类型, 我们可以直接取第一个元素的类型, 然后判断是否存在联合类型中, 解法类似第一种

type First<T extends any[]> = T extends [infer FirstType, ...infer Rest]
  ? FirstType
  : never
// 4
// * 利用 infer 推断, infer 类型 js 中解构赋值
