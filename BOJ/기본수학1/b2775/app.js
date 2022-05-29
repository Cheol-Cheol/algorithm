const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const TESTCASE = input.shift();

for (let i = 0; i < TESTCASE; i++) {
  const k = +input.shift();
  const n = +input.shift();
  // k:층 n:호
  const house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
  // 0층 (0층의 i호에는 i명이 산다.)
  for (let i = 1; i <= n; i++) {
    house[0][i] = i;
  }
  // 1 - k층 (k층 n호에는 k-1층 n호 + k층 n-1호만큼 산다.)
  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= n; j++) {
      house[i][j] = house[i - 1][j] + house[i][j - 1];
    }
  }
  console.log(house[k][n]);
}
