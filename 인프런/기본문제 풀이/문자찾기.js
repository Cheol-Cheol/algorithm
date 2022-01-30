function solution(s, t) {
  let answer = 0;
  for (let x of s) if (x === t) answer++;
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

// 다른 방법
function solution2(s, t) {
  let answer;
  answer = s.split(t).length - 1;
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution2(str, "R"));
