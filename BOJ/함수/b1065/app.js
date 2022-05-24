const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num = +input[0];
let cnt = 0;

for (let i = 1; i <= num; i++) {
  nArr = String(i);
  if (i < 100) {
    cnt++;
    continue;
  }
  let A = Number(nArr[0]) - Number(nArr[1]);
  let B = Number(nArr[1]) - Number(nArr[2]);
  if (A === B) cnt++;
}
console.log(cnt);
