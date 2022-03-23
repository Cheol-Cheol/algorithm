const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const result = [];

input.forEach((x) => {
  const num = x % 42;
  if (result.indexOf(num) === -1) {
    result.push(num);
  }
});
console.log(result.length);
