function solution(s) {
  let answer,
    mid = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    answer = s.substr(mid - 1, 2);
  } else answer = s[mid];
  return answer;
}
console.log(solution("good"));
