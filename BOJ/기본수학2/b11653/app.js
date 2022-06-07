// // 시간초과
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");

// let num = +input[0];
// let div = 2;

// while (true) {
//   if (num % div === 0) {
//     num = num / div;
//     console.log(div);
//     if (num === 1) break;
//   } else {
//     div++;
//   }
// }

// 에라토스테네스의 체를 이용하면 시간초과 해결
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = +input[0];
let div = 2;

for (let i = 2; i <= Math.sqrt(num); i++) {
  while (num % i === 0) {
    console.log(i);
    num /= i;
  }
}
if (num !== 1) console.log(num);
