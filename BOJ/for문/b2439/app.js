const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);

function solution(num) {
  let answer = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i - 1; j++) {
      answer += " ";
    }
    for (let k = 0; k <= i; k++) {
      answer += "*";
    }
    answer += "\n";
  }
  console.log(answer);
}
