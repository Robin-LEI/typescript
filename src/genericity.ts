// 泛型 泛指的类型
// 针对不确定 模糊的类型
function join<ABC>(first: ABC, second: ABC) {
  return `${first}-${second}`;
}

function map<ABC>(params: ABC[]) {
  return params;
}

// 等价于

function map2<ABC>(params: Array<ABC>) {
  return params;
}

function equal<T, P>(first: T, second: P) {
  return `${first}-${second}`;
}

join<string>('1', '1');

map<number>([1]);
map2<string>(['1']);

equal<number, string>(1, '2');
equal(1, '2'); // 不写，会默认推断
