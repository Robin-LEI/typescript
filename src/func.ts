function add(first: number, second: number) :number {
  return first + second;
}

function add2(first): void {
  console.log(first);
}

function add3(): never {
  throw new Error('error');
  // 或者
  while(true) {}
}

function add4({first, second}: {first: number, second: number}) {
  console.log(first + second);
}

function add5({first}: {first: string}) {
  console.log(first);
}