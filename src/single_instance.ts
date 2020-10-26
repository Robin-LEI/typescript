class Person2 {
  constructor(public name2: string) {}
  private static instance;
  static getInstance() {
    if (!this.instance) {
      this.instance = new Person2('ts');
    }
    return this.instance;
  }
}

const p2 = Person2.getInstance();
const p3 = Person2.getInstance();
console.log(p2 === p3);