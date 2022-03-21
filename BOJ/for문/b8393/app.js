const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(N) {
  let sum = 0;
  for (let i = N; i > 0; i--) {
    sum += i;
  }
  console.log(sum);
}
