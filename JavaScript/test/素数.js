var res = ''
for (let i = 100; i <= 200; i++) {
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {break}
    }
		if(i==j)
			res += i + ' '
}
console.log('100到200之间的素数有：' + res)
