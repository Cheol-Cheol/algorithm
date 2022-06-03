const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let num = +input[0];

function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(num));
