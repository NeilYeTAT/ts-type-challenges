type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [
  ...T,
  ...U,
]

// * 尽量使用 unknown 代替 any
// * 因为存在 tuple, 所以给 readonly 限制
