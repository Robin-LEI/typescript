class MyPerson {
  // public My: string;
  // constructor(My: string) {
  //   this.My = My;
  // }
  // 等价于
  constructor(public My: string) {}
}

const p = new MyPerson('ts');
console.log(p.My);

// 子类如果有构造器，需要手动调用父类的构造器，并传入参数，父类如果没有构造器，则写super();