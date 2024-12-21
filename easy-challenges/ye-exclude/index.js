// 实现内置的 Exclude<T, U> 类型，但不能直接使用它本身。

// Implement the built-in Exclude<T, U>
// Exclude from T those types that are assignable to U

function yeExclude(obj, ...excludeKey) {
  const keys = Object.keys(obj)
  // return keys.filter(f => !excludeKey.includes(f))
  const _o = {}
  for (let k in obj) {
    if (!excludeKey.includes(k)) {
      _o[k] = obj[k]
    }
  }
  return _o
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
}

const res = yeExclude(obj, 'a', 'c')
console.log(res)

// * 从 T 中取出所有的 key, 然后判断是否包含在 U 中
