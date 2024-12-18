const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  // * keyof 遍历返回的是数组中的下标, 即 '0', '1', '2'
  // * T[number] 返回的就是数组中的元素了, 即 A 就是 element
  [A in T[number]]: A
}

// * 想要拿到 元组 中元素, 需要通过特殊语法 T[number]
// * 数组的索引值只有三种类型, 即 number, string, symbol, 因此还需要在入参限制一下传入的类型
