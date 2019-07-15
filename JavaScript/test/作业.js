var arr = [8, 6, 3, 2, 9, 5, 7, 1, 4]
//反转数组
Array.prototype.rev = function () {
    var later = this.length - 1,
        temp;
    for (let i = 0; i < this.length; i++) {
        temp = this[i];
        this[i] = this[later];
        this[later] = temp;
        if (i == later || later - i == 1) {
            break
        }
        later--;
    }
    return this
}
console.log(arr.rev())

//push
Array.prototype.Push = function () {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i]

    }
    return this.length
}
console.log(arr.Push(555, 77))
console.log(arr)

//pop
Array.prototype.Pop = function () {
    var temp = this[this.length - 1]
    this.length = this.length - 1;
    return temp
}
console.log(arr.Pop())
console.log(arr)

//unshift
// var arr = [8, 6, 3, 2, 9, 5, 7, 1, 4]
Array.prototype.unShift = function () {
    for (let i = 0; i < arguments.length; i++) {
        var later = this.length
        for (let index = 0; index < this.length; index++) {
            this[later] = this[later - 1] //后一个值等于前一个值
            later--
        }
        this[0] = arguments[i]
    }
    return this.length
}
console.log(arr.unShift('ssss', 111))
console.log(arr)

//shift重写
Array.prototype.Shift = function () {
    var first = this[0];
    for (let index = 0; index < this.length; index++) {
        this[index] = this[index + 1] //前一个值等于后一个值
    }
    this.length--
    return first
}
console.log(arr.Shift())
console.log(arr)