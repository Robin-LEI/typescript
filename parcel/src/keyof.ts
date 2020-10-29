
interface Person {
  name: string,
  age: number,
  gender: string
}

class Teacher {
  constructor(private info: Person) {}
  getInfo<T extends keyof Person>(key: T): Person[T] {
    return this.info[key];
  }
}

const teacher = new Teacher({
  name: 'ts',
  age: 10,
  gender: 'male'
});

console.log(teacher.getInfo('age'));