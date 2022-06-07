const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const TESTCASE = input[0];
const nums = input[1].split(" ").map((item) => +item);

let cnt = 0;

function isPrime(num) {
  if (num === 1) return;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return;
  }
  cnt++;
}
for (let i = 0; i < TESTCASE; i++) {
  isPrime(nums[i]);
}
console.log(cnt);
