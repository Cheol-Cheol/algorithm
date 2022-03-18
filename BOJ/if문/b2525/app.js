const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let curHour = input[0].split(" ").map((item) => +item)[0];
let curMin = input[0].split(" ").map((item) => +item)[1];
let cookTime = +input[1];

solution(curHour, curMin, cookTime);

function solution(H, M, T) {
  if (M + T > 60) {
    M = M + T - 60;
    H++;
    if (M >= 60) {
      M = M - 60;
      H++;
    }
    if (H >= 23) {
      H = H - 24;
    }
  } else {
    M += T;
  }
  console.log(H, M);
}
