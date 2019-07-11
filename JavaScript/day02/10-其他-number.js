console.log(Number(123));
console.log(Number('123'));
console.log(Number('+123'));
console.log(Number(' 123'));
console.log(Number('abc')); //NaN
console.log(Number('1+2'));
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number('0xc')); //12  解析16进制
console.log(Number('010'));  //10  八进制不解析

console.log('------------parseInt---------------')
console.log(parseInt(123.4)); //123
console.log(parseInt('123.4sd323')); //123
console.log(parseInt('abd123.4')); //NaN
console.log(parseInt('0xa')); //10
console.log(parseInt('010')); //10
console.log(parseInt('')) 

console.log('----------parseFloat--------------')
console.log(parseFloat(123.4)); //123.4
console.log(parseFloat('123.4sd323')); //123.4
console.log(parseFloat('abd123.4')); //NaN
console.log(parseFloat('0xa')); //0
console.log(parseFloat('010')); //10

console.log('--------------------')
console.log(Boolean('false'))
console.log(Boolean('0'));
