const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let i = 0;
while (i < input.length - 1) {
  let nums = input[i].split(" ").map((x) => +x);

  console.log(nums[0] + nums[1]);
  i++;
}
