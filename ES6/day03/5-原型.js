let obj = { name: 'zhangsan' }
console.log(obj.__proto__ === Object.prototype)
console.log(Object.getPrototypeOf(obj) === Object.prototype);

let objPro={
    toString(){
        return 'hello'
    }
}
Object.setPrototypeOf(obj,objPro)
console.log(Object.getPrototypeOf(obj) === objPro);
console.log(obj.valueOf());
