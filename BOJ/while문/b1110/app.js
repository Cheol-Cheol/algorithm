const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = parseInt(input[0]);

let cnt = 0;
let num = N;

while (true) {
  let sum = parseInt((num % 10) + num / 10);
  num = (num % 10) * 10 + (sum % 10);
  cnt++;
  if (num === N) break;
}

console.log(cnt);
