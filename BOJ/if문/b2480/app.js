const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input
  .split(" ")
  .map((item) => +item)
  .sort((a, b) => a - b);

solution(input[0], input[1], input[2]);

function solution(A, B, C) {
  if (A === B && B === C) {
    console.log(10000 + A * 1000);
  } else if (A === B || B === C) {
    console.log(1000 + B * 100);
  } else {
    console.log(C * 100);
  }
}
