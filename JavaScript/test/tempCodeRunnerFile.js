var arr = [1, 2, 3];

function pop(a) {
    for (i = 0; i <= arguments.length; i++) {
        if (i == arguments.length)
            arr[arr.length] = a;

    }
    return arr.length;


}
console.log(pop(5));
console.log(arr)