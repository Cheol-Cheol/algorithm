const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num = input[0].split(" ").map((item) => +item);
let arr = input[1].split(" ").map((item) => +item);

solution(num, arr);
function solution(num, arr) {
  let answer = [];
  for (let x of arr) {
    if (x < num[1]) {
      answer.push(x);
    }
  }
  console.log(answer.join(" "));
}
