type MyPick<T, K extends keyof T> = {
  [A in K]: T[A]
}

/**
 * * 1. 从对象 T 中遍历属性名. -> 使用 [A in K], 拿到属性名 A
 * * 2. 返回值就是正常的 T[A]
 * * 3. 但是此时还是有问题, 因为 A 可能存在 K 中但是不存在 T 中
 * * 4. 通过 extends 操作符限制, 当传入不符合条件的参数时, ts 报错
 * *    保证传入 K 中存在的 T 中也存在
 */
