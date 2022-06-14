const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let num = input.map((item) => +item);

function isPrime(num) {
  let arr = [];
  for (let i = num; i < num * 2; i++) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) return;
    }
    arr.push(i);
  }
  return arr.length;
}

for (let i = 0; i < num.length; i++) {
  if (num[i] === 1) continue;
  console.log(isPrime(num[i]));
}
