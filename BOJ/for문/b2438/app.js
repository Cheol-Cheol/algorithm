const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input[0]);

function solution(input) {
  let answer = "";

  for (let i = 0; i < input; i++) {
    answer += "*";
    console.log(answer);
  }
}
