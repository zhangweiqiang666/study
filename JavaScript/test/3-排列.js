 
var arr = [1, 2, 3, 4];
for (var i = 0; i < 4; i++) {       
    for (var j = 0; j < 4; j++) { 
        for (var k = 0; k < 4; k++) {            
            if (arr[j] != arr[k] && arr[j] != arr[i] && arr[i] != arr[k]) {
                console.log(arr[i] + ' ' + arr[j] + ' ' + arr[k])                      
            } 
        }   
    } 
}
