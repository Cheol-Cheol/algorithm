const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const TESTCASE = input.shift();
let answer = [];

answer = [avg(...input), mid(...input), mode(...input), range(...input)];
function avg(...arr) {
  let sum = 0;
  sum = arr.reduce((acc, cur) => acc + cur, 0);
  return Math.round(sum / arr.length);
}
function mid(...arr) {
  arr.sort((a, b) => a - b);
  return +arr[Math.floor(arr.length / 2)];
}
function mode(...arr) {
  let idx = arr.findIndex(() => Math.min(...arr));
  console.log(idx);
}
function range(...arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}
// answer.forEach((item) => console.log(item));
