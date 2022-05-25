const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let result = [];
for (let i = 97; i <= 122; i++) {
  result.push(input[0].indexOf(String.fromCharCode(i)));
}
console.log(result.join(" "));

// String.fromCharCode(): UTF-16 코드를 문자열로 바꿔준다
// a-z 97~122
