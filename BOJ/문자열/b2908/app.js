const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let nums = input[0].split(" ");
let answer = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < nums.length; i++) {
  let num = nums[i].split("").reverse().join("");
  if (answer < num) answer = num;
}
console.log(answer);

// 다른 사람 코드
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ");

// const [a, b] = input.map(v => [...v].reverse().join(''));

// console.log(a > b ? a : b);
// // console.log(Math.max(a, b));
