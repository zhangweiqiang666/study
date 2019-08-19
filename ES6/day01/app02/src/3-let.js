// 闭包
{
    let arr = [];
    for(let i = 1;i<5;i++){
        arr[i] =function(){
            console.log(i)
        }
    }
    arr[3]();
}
console.log(arr)