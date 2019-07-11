for (let i = 100; i <= 1000; i++) {
    var n = i
    var sum = 0
    while (n > 0) {
        var t = n % 10;
        sum += t * t * t
				n = n / 10
				n = parseInt(n)
    }
    if (i == sum) {
        console.log(i)
    }
}
