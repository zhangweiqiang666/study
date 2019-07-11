//判断一个成绩属于什么级别
var grade = 76;

//要求输出 不及格60以下 中 60-70 良 70-90 优90以上
var res
if (grade&&(typeof grade)==='number'&&grade >= 0 && grade <= 100)) {
    if (grade < 60) {
        res = '不及格'
    } else if (grade < 70) {
        res = '中等'
    } else if (grade < 90) {
        res = '良好'
    } else if (grade > 90) {
        res = '优秀'
    }
} else {
    res = '成绩格式错误，请更改'
}

console.log(res)
