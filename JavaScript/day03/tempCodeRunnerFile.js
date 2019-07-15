 var arr= [1, 2, 333, 454, 4, 64, 56, 96, 52, 6, 47, 6, 7, 516, 75, 67    , 56, 756, 7, 5]
function bubble(){
    for (let k = 0; k < arr.length-1; k++) {
        for (let i = 0; i < arr.length-k; i++) {
            if (arr[i] > arr[i + 1]) {
               var temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
    }
		console.log(arr)
}

bubble(arr)