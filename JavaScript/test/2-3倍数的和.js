var sum = 0;
var str = ''
for(let i=1;i<=100;i++){
	if(i%3==0){
		sum += i
		if(i==3)
			str+= i
			else
		str += '+'+ i
	}}
console.log(str + '='+ sum)
