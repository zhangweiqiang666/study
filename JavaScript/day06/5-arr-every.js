var arr = [23, 5, 6, 93, 8, 46, 78];
Array.prototype.myEvery = function (fun, funThis) {
    var res
    for (var i = 0; i < this.length; i++) {
        res = fun.bind(funThis)(this[i], i, this)
        if(!res){
           break
        }
    }
     return res
}

var res = arr.myEvery(function (item, index, arr) {
    console.log(this);
    return item > 40
}, {});
console.log(res)