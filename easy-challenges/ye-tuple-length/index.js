// 创建一个Length泛型，这个泛型接受一个只读的元组，返回这个元组的长度。

// For given a tuple, you need create a generic Length, pick the length of the tuple

function yeTupleOfLength(readonlyTuple) {
  if (Array.isArray(readonlyTuple)) {
    return readonlyTuple.length
  }
  throw new Error('type error')
}

// * 限制传入的必须要是数组
