const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((item) => +item);

solution(input[0]);

function solution(A) {
  switch (true) {
    case A >= 90 && A <= 100:
      console.log("A");
      break;
    case A >= 80 && A <= 89:
      console.log("B");
      break;
    case A >= 70 && A <= 79:
      console.log("C");
      break;
    case A >= 60 && A <= 69:
      console.log("D");
      break;
    default:
      console.log("F");
  }
}
