const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let t = input.shift();
for (let i = 0; i < t; i++) {
  let answer = "";
  // 구조분해할당
  let [num, str] = input[i].split(" ");

  for (let j = 0; j < str.length; j++) {
    for (let k = 0; k < num; k++) {
      answer += str[j];
    }
  }
  console.log(answer);
}
