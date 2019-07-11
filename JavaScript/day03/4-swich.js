//分支语句 switch 开关语句
//判断星期几

var num = 2,
    res = ''
switch (num) {
    case 1:
        res = '星期一'
        break
    case 2:
        res = '星期二'
        break
    case 3:
        res = '星期三'
        break
    case 4:
        res = '星期四'
        break
    case 5:
        res = '星期五'
        break
    case 6:
        res = '星期六'
        break
    case 7:
        res = '星期天'
        break
		default:
		   res = '无效'
}
console.log(res)
