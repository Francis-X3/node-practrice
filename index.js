// console.log("hey")
// const a = 254;
// const b = 55;
// const getnew = require
// var sum = a + b;
// var sum1 = function run1() {
//   if (sum >= 200) {
//     console.log(true)
//   }
//   else {
//     console.log("try a new number")
//   }
// }
// console.log(sum)


// const obj = require("./index.txt")
// console.log(obj)

const fs = require('fs')
const intxt = fs.readFileSync('./index.txt', 'utf-8')
console.log(intxt)
