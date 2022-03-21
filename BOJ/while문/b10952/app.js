const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// for (i = 0; i < input.length - 1; i++) {
//   let numbers = input[i].split(" ").map((x) => +x);
//   console.log(numbers[0] + numbers[1]);
// }
while (input[0][0] != 0) {
  const numbers = input
    .shift()
    .split(" ")
    .map((x) => +x);
  console.log(numbers[0] + numbers[1]);
  console.log(numbers);
}
