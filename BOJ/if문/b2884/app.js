const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
input = input.split(" ").map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
  // 10시 10분 -> 9시 25분
  // 0시 30분 -> 23시 45분
  if (B - 45 < 0) {
    B = 60 + (B - 45);
    A--;

    if (A === -1) {
      A = 23;
    }
  } else {
    B -= 45;
  }
  console.log(A, B);
}
