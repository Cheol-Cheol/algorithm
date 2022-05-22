// 내장 함수 적용
function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
    // 자릿수의 합이 최대인 것
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    // answer에 원본 x 값이 필요하기 때문에
    // tmp - x를 담을 임시변수를 둔다.
    let sum = 0,
      tmp = x;
    // 자릿수의 합 구하기 - 몫이 0이 되면 종료
    while (tmp) {
      sum += tmp % 10;
      // 몫 구하기
      tmp = Math.floor(tmp / 10);
    }
    // 자릿수의 합이 최대인 것
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
