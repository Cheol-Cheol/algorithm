function solution(str) {
  let answer = "";
  answer = str.replace(/[^0-9]/g, "");
  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
