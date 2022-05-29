const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let cnt = 0;
while (true) {
  if (input[0] % 5 === 0) {
    console.log(input[0] / 5 + cnt);
    break;
  }
  if (0 > input[0]) {
    console.log(-1);
    break;
  }
  cnt++;
  input[0] -= 3;
}
