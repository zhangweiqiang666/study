function mult(n) {
    sum = 1
    str = ''
    if (n == 0) {
        sum = 1;
    } else {
        for (let i = 1; i <= n; i++) {
            sum *= i
            if (i == 1)
                str = i
            else
                str += '*' + i
        }
        console.log(n+'!'+'='+ str +'=' + sum)
    }
}

mult(10)
