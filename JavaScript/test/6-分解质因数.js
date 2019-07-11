function main(n) {
	var res = ''
	var num = n
    for (let i = 2; i <= n; i++) {
        while (n != 1) {
            if (n % i ==0){
							res += i + ' '
                n = n / i
            } else
                break
        }

    }
		 console.log(num+'的质因数为：'+ res)    
}
main(100)
