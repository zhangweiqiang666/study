function swap(a, b) {
    var temp = a
    a = b
    b = temp
    //console.log(a+ ' ' +b)
}


function Perm(arr, start, end) {
    var res
    if (start == end - 1) {
        for (let i = 0; i < end; i++) {
            res += arr[i] + ' '
            console.log(res)
            return res
        }
    } else {
        for (let i = start; i < end; i++) {
            swap(arr[i], arr[start])
            Perm(arr, start + 1, end)
            swap(arr[i], arr[start])
        }
    }
}
var arr = [1, 2, 3, 4, 5]
console.log(Perm(arr, 0, 3))

//swap(111,222)