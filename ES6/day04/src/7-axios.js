// axios的使用
// 引入axios
const axios = require('axios')
console.log(axios)
axios.get('http://134.175.154.93:8099/manager/category/findAllCategory').then((result) => {
console.log(result.data)
}).catch((err) => {
console.log(err);

});