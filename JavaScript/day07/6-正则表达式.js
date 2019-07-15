var str = 'hello world javascript';
//贪婪模式和非贪婪模式 默认是贪婪模式 在次数后面加 ? 修改为懒惰模式
var pattern = /\w{3,8}?/i
console.log(pattern.exec(str))

//验证电话号码
var str = '13548795423'
var pattern = /^\d{11}$/;
console.log(pattern.test(str))