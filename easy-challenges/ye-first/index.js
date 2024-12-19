// 实现一个First<T>泛型，它接受一个数组T并返回它的第一个元素的类型。

// Implement a generic First<T> that takes an Array T and returns its first element's type.

function yeFirst(array) {
  return array.length ? typeof array[0] : 'never'
}
