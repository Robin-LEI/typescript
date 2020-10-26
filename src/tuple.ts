// 应用场景--处理csv、excel导出数据转为js数据的时候
// 数组长度固定，每一项的类型也固定的时候可以这么写
const tuple1: [string, string, number] = ['ts', 'hello', 1];

// 处理csv格式的数据
const tuple2: [string, string, number][] = [
  ['ts', 'hello', 1]
];