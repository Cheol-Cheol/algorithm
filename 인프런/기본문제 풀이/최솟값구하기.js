function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let x of arr) {
    if (x < min) min = x;
  }
  answer = min;
  return answer;
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));
