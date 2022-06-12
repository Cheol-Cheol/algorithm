const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map((item) => +item);

// 에라토스테네스의 체
const prime = { 1: true };

for (let i = 2; i <= Math.sqrt(m); i++) {
  if (prime[i]) continue;
  for (let j = i ** 2; j <= m; j += i) {
    prime[j] = true;
  }
}
const results = [];

for (let i = n; i <= m; i++) {
  if (!prime[i]) results.push(i);
}
console.log(results.join("\n"));

// function isPrime(num) {
//   if (num === 1) return;
//   for (let j = 2; j <= Math.sqrt(num); j++) {
//     if (num % j === 0) return;
//   }
//   return console.log(num);
// }

// for (let i = M; i <= N; i++) {
//   isPrime(i);
// }
