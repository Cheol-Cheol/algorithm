const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let str = input[0];
let arr = {
  A: 3,
  B: 3,
  C: 3,
  D: 4,
  E: 4,
  F: 4,
  G: 5,
  H: 5,
  I: 5,
  J: 6,
  K: 6,
  L: 6,
  M: 7,
  N: 7,
  O: 7,
  P: 8,
  Q: 8,
  R: 8,
  S: 8,
  T: 9,
  U: 9,
  V: 9,
  W: 10,
  X: 10,
  Y: 10,
  Z: 10,
};
let answer = 0;
for (let x of str) {
  answer += arr[x];
}
console.log(answer);

// 다른 사람 풀이
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
// let phone = {
// 	2: "ABC",
// 	3: "DEF",
// 	4: "GHI",
// 	5: "JKL",
// 	6: "MNO",
// 	7: "PQRS",
// 	8: "TUV",
// 	9: "WXYZ",
// };
// let result = 0;

// for (let i = 0; i < input.length; i++) {
// 	for (let j = 2; j <= 9; j++) {
// 		if (phone[j].includes(input[i])) {
// 			result += j + 1;
// 			break;
// 		}
// 	}
// }

// console.log(result);
