const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let c = +input[0];

for (let i = 1; i <= c; i++) {
  let sum = 0;
  let count = 0;

  let scores = input[i].split(" ").map((x) => +x);
  const n = scores[0];

  for (let j = 1; j <= n; j++) {
    sum += scores[j];
  }
  const avg = sum / n;
  for (let k = 1; k <= n; k++) {
    if (avg < scores[k]) count++;
  }
  console.log(((count / n) * 100).toFixed(3) + "%");
}
