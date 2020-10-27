// 联合类型 |

// 类型保护
// 类型断言
// animal as Bird

interface Bird {
  fly: boolean;
  sing: () => {};
}

interface Dog {
  fly: boolean;
  bark: () => {};
}

// 通过类型断言的形式实现类型保护
function trainAnimal(animal: Bird | Dog) {
  if (animal.fly) {
    (animal as Bird).sing();
  } else {
    (animal as Dog).bark();
  }
}

// in 语法来做类型保护
function trainAnimal2(animal: Bird | Dog) {
  if ('sing' in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}

// 使用typeof语法来做类型保护
function add(first: string | number, second: string | number) {
   if (typeof first === 'string' || typeof second === 'string') {
     return `${first}${second}`;
   }
   return first + second;
}

class NumberObj {
  count: number = 0
}

function add2(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0
}