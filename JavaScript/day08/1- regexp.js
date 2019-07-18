var str = 'helablo123world567ae'
// var pattern = /[abe]{3}/ig
// var pattern = /[abe][abe]/ig

// var pattern = /[^abe]/ig
var str = 'a9'
var pattern = /^[a-z].*\d$/g

var pattern = /^\d{11}$/g
var pattern = /^([0-9a-z]){3,12}@\1\.[a-z]{3,5}$/ig
str = 'wdwq@q.com'
console.log(str.match(pattern))