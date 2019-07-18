//日期对象 Date()
//当前时间对象

//时间戳 秒时间戳 毫秒时间戳 1000
//将时间戳转换成JS的Date对象 获取年月日时分秒 
//2019-07-17 17:18:18

function getDate(time) {
    var date = new Date(time)
    var year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours(),
        minutes = date.getMinutes(),
        sec = date.getSeconds()

    month = month < 10 ? '0' + month : month
    day = day < 10 ? '0' + day : day
    hour = hour < 10 ? '0' + hour : hour
    minutes = minutes < 10 ? '0' + minutes : minutes
    sec = sec < 10 ? '0' + sec : sec

    str = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + sec
    console.log(str)
}
getDate(1563362145398)

//转化为时间戳

function getTime(d) {
    var res = d.match(/\d+/g)
    var date = new Date(res[0], res[1] - 1, res[2], res[3], res[4], res[5])
    console.log(date)
    console.log(date.toString())
    console.log(date.getTime())
    return date.getTime()
}

getTime('2019年 07月17日 19:15:45')


var date = new Date('2019/07/17 19:15:45')
console.log(date)
console.log(date.toString())
console.log(date.getTime())