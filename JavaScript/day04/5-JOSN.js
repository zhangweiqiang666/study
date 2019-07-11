var obj={
	name:'zhangsan',
	age:12,
	}

	console.log(obj)

	console.log(JSON.stringify(obj)) //将对象转成Json
	var str = '{"name":"zhangsan","age":12}'
	console.log(JSON.parse(str)) //反转json
