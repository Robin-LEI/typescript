// 类型别名和接口的区别

// 接口不能定义基础类型，但是类型别名可以定义基础类型

interface Person {
  // 只读属性
  readonly name: string;
  // age 可以有也可以没有
  age?: number;
  // address 必传string类型的属性
  address: string;
  // 便于给Person未来扩展属性
  [propName: string]: any;
  // 包含say方法，返回值为string
  say(): string;
}

// 类实现接口
class User2 implements Person {
  name = 'ts';
  address = 'china';
  say() {
    return 'hello world';
  }
}

// 接口继承
interface Teacher extends Person {
  teach(): string;
}

// 定义函数接口
interface sayHi {
  (word: string): string;
}

const say:sayHi = (word: string) => {
  return word;
}