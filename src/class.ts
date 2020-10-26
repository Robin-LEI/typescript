class Person {
  myName = 'ts';
  getName() {
    return this.myName;
  }
}

const person = new Person();
console.log(person.getName());

// 类的继承
class MyTeacher extends Person {
  getTeacherName() {
    return 'teacher';
  }
  // 子类可以重写父类
  getName() {
    return super.getName() + 'hello';
  }
}

// 访问类型
// private public protected
// 默认是public 访问类型修饰符，允许我在类的内外访问
// private 允许在类的内部使用
// protected 允许在类内核继承的子类中使用
