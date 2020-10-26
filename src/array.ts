const arr: (number | string)[] = [1, '2'];

const arr2: string[] = ['1'];

const arr3: undefined[] = [undefined];

// 数组中的每一项对象只能包含name属性
const arr4: {name: string, age: number}[] = [{name: 'ts', age: 1}, {name: 'type', age: 2}]

// 类型别名
type User = {name: string, age: number}
const arr5: User[] = [{name: 'ts', age: 1}]

class Teacher {
  name: string;
  age: number;
}
const arr6: Teacher[] = [new Teacher(), {name: 'ts', age: 1}]
