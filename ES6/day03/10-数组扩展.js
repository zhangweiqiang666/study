// Array.from()
// Array.of()
let temp = { '0': 'hello', '1': 'world', length: 2 }
console.log(Array.from(temp)); //[ 'hello', 'world' ]
console.log(Array.of(10)); //[ 10 ]
console.log(Array.of(10, 11)); //[ 10, 11 ]
console.log(new Array(10));//[ <10 empty items> ]
console.log(new Array(10, 11));//[ 10, 11 ]

let arr = [244, 5, 54, 51, 541, 5, 151, 54, 2]
let set = new Set(arr);
console.log(set); //Set { 244, 5, 54, 51, 541, 151, 2 }
console.log(Array.from(set)); //[ 244, 5, 54, 51, 541, 151, 2 ]

//find findIndex 迭代方法
let res= arr.find((item) => {
    return item > 40
})
console.log(res);
let res1 = arr.findIndex((item) => {
    return item > 40
})
console.log(res1);

