// 将一个元组类型转换为对象类型，这个对象类型的键/值和元组中的元素对应。

// Given an array, transform it into an object type and the key/value must be in the provided array.

function yeTupleToObject(tuple) {
  const _obj = {}

  tuple.forEach(element => {
    if (
      typeof element !== 'number' ||
      typeof element !== 'string' ||
      typeof element !== 'symbol'
    ) {
      throw new Error('args type error')
    }

    _obj[element] = element
  })

  return _obj
}

// * 命名空间, 值 和 类型 之间通过 typeof 来沟通传递
