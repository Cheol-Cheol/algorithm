const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function solution(input) {
  for (let alphabet of croatia) {
    // split() - 배열을 구분자로 사용할 경우
    input = input.split(alphabet).join("K");
  }

  return input.length;
}

console.log(solution(input[0]));
