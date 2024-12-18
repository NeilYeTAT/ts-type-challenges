type MyReadonly<T> = {
  readonly [A in keyof T]: T[A]
}

// * 遍历对象中的所有属性, 然后添加 readonly 修饰符就行了
