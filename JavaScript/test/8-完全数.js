for(let i=2 ;i<=1000 ;i++){
	var sum = 0;
	for(let j= 1; j<i;j++){
		if(i%j==0){
			sum += j;
			}
		}
		if(sum== i ){
			console.log(sum)
			}
	}
