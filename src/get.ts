class Person1 {
  constructor(private _name: string) {}
  get getName1() {
    // 加密
    return this._name + ' hello world';
  }
  set name1(name: string) {
    this._name = name;
  }
}

const p1 = new Person1('ts');
p1.name1 = 'robin';
console.log(p1.getName1)