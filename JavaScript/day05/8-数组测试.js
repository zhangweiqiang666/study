var arr = [1, 2, 3, 4]
console.log(typeof arr) //object
console.log(arr instanceof Array) //true
console.log(arr instanceof Object) //true
console.log(Array.isArray(arr)) // true

function test() {
    console.log(Array.isArray(arguments));
}
test()
var arr = [1, 'hello', 'world', 4]
console.log(arr)
console.log(arr.toString())
console.log(arr.join())
console.log(arr.join('~'))
console.log(JSON.stringify(arr))
