const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
// 빈 값만 들어오는 테스트 케이스도 있음
console.log(input[0] === "" ? 0 : input.length);
