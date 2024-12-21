type Length<T extends readonly any[]> = T['length']

// * 入参限制就行了, 符合要求的参数直接返回长度
// * tuple 是定长定类型的数组, 返回值的长度是具体的数值, 而数组的 length 返回值是 number 类型, 并没有精确到字面量
