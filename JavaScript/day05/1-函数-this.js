function test(a, b) {
    console.log(this, a, b);
}
//test(1, 2)
let obj = {
    name: '张三'
}
test.call(obj, 3, 4)
test.apply(obj,[5,6])
test.bind(obj)(5,6)