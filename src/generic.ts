
// class DataManager {
//   constructor(private data: string[] | number[]) {}

//   getItem(index: number): string | number{
//     return this.data[index];
//   }
// }

// const data = new DataManager(['1']);

// 类的泛型
// class DataManager<T> {
//   constructor(private data: T[]) {}
//   getItem(index: number): T {
//     return this.data[index];
//   }
// }
// const data = new DataManager<string>(['1']);

// 泛型继承
interface Item {
  name: string;
}

class DataManager<T extends Item> {
  constructor(private data: T[]) {}
  getItem(index: number): string {
    return this.data[index].name;
  }
}

const data = new DataManager([{
  name: 'ts'
}]);

// 使用泛型作为一个具体的类型注解
function hello<T>(params: T) {
  return params;
}

const func: <T>(params: T) => T = hello;

const tst: <T>(params: T) => T = <T>(params: T) => {
  return params;
};