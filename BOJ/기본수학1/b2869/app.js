// 시간초과 ㅠㅠ
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0].split(" ");
let A = +input[0];
let B = +input[1];
let V = +input[2];

let sum = 0;
let day = 1;

while (sum < V) {
  sum += A;
  if (sum >= V) break;
  sum -= B;
  day++;
}
console.log(day);

// 다른 사람 코드
// input = input[0].split(" ");

// const A = input[0];
// const B = input[1];
// const V = input[2];

// console.log(Math.ceil((V - B) / (A - B)));
