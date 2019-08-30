function* test() {
  console.log(1)
  yield 1
  console.log(2)
  yield 2
  console.log(3)
  yield 3
  console.log(4)
  yield 4
  console.log(5)
  return 5
}

let temp = test()
console.log(temp)
console.log(temp.next());
console.log(temp.next());
console.log(temp.next());
console.log(temp.next());
console.log(temp.next());


function* test() {
  let a = yield 1
  console.log(a)
  let b = yield 2
  console.log(b)
  let c = yield 3
  console.log(c)
}
let temp = test()
console.log(temp.next(temp.next(temp.next().value).value));
