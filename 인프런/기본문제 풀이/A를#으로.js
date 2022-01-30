function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === "A") answer += "#";
    else answer += x;
  }
  return answer;
}

let str = "BANANA";
console.log(solution(str));

// 다른 방법
function solution2(s) {
  let answer = "";
  answer = s.replace(/A/g, "#");
  return answer;
}

let str = "BANANA";
console.log(solution2(str));
