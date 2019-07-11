function gcdLcm(a, b) {
	var m = a
	var n = b
	gcd(a,b)
    function gcd(a,b) {

        if (b == 0) {
               console.log('最大公约数为：' + a)
							 console.log('最小公倍数为：' + m*n/a)
							 return a ;
        }

        var c = a % b
        gcd(b, c)
    }
}


gcdLcm(20,10)
