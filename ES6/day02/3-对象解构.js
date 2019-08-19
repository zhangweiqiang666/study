let {
    a,
    b
} = {
    a: 2,
    b: 15
}
console.log(a,b)

{
    let {name:myName,age:myAge,address:myAddress='江苏'} = {
        name:'zhangsan',
        gender:'男',
        age:12,
        address:undefined
    }
    console.log(myName,myAge,myAddress)
}