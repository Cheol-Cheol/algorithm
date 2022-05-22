function isPrime(num) {
  if (num === 1) return false;
  // 소수 판별법 - 약수를 구한다 생각하고 1과 자기 자신을 제외했을 경우 값이 있으면 약수가 존재하니깐, 소수가 아닌 것이다.
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      // 숫자 뒤집기
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

// 내장 함수 적용
function isPrime(num) {
  if (num === 1) return false;
  // 소수 판별법 - 약수를 구한다 생각하고 1과 자기 자신을 제외했을 경우 값이 있으면 약수가 존재하니깐, 소수가 아닌 것이다.
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = Number(x.toString().split("").reverse().join(""));
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
