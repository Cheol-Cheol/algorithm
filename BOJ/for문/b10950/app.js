const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const testcaseArray = [];
for (let i = 1; i <= +input[0]; i++) {
  testcaseArray.push(input[i].split(" ").map((item) => +item));
}
solution(+input[0], testcaseArray);

function solution(T, testcaseArray) {
  for (let i = 0; i < T; i++) {
    console.log(testcaseArray[i][0] + testcaseArray[i][1]);
  }
}
