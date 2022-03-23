const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input.map((x) => +x);

let max = Math.max(...input);
let count = 0;

for (let x of input) {
  count++;
  if (x === max) {
    break;
  }
}
console.log(max);
console.log(count);
