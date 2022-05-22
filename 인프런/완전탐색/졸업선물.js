// 어떤 상품을 할인받을지? 상품들을 하나씩 할인했을 때의 총 경우의 수를 구한다.
function solution(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    // 할인한 상품 비용을 뺀 남은 예산
    let money = m - product[i][0] / 2 + product[i][1];
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      // 할인된 상품은 제외하고, 남은 예산에서 물건을 살 수 있는 지
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
