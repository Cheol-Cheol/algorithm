const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let N = +input[0];
let nums = input[1].split(" ").map((x) => +x);

solution(N, nums);
function solution(N, nums) {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < N; i++) {
    if (max < nums[i]) max = nums[i];
    if (min > nums[i]) min = nums[i];
  }
  console.log(`${min} ${max}`);
}
