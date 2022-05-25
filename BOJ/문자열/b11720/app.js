const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let num = +input[0];
let str = input[1];
let result = 0;

solution(num, str);
function solution(num, str) {
  for (let i = 0; i < num; i++) {
    result += Number(str[i]);
  }
  console.log(result);
}
