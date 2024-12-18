// 不使用 Pick<T, K> ，实现 TS 内置的 Pick<T, K> 的功能。
// 从类型 T 中选出符合 K 的属性，构造一个新的类型。

// Implement the built-in Pick<T, K> generic without using it.
// Constructs a type by picking the set of properties K from T

function yePick(obj, ...keys) {
  const _obj = {}

  for (const k of keys) {
    // obj.obj.hasOwnProperty(k), for...in
    if (Object.hasOwn(obj, k)) {
      _obj[k] = obj[k]
    }
  }

  return _obj
}

const obj = {
  title: 'string',
  completed: false,
}

const o = yePick(obj, 'title', 'com')
console.log(o)
