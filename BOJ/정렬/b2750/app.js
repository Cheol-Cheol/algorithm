const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const TESTCASE = input.shift();
const sorted = input.sort((a, b) => a - b);

for (let x of sorted) {
  console.log(x);
}
