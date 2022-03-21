const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(input);

function solution(input) {
  let testcase = +input[0];
  let answer = "";

  for (let i = 1; i <= testcase; i++) {
    let num = input[i].split(" ").map((item) => +item);
    answer += `Case #${i}: ${num[0] + num[1]}\n`;
  }
  console.log(answer);
}
