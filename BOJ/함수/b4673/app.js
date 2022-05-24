// d(n)을 구하고 배열로 저장한 후에 (임의의 배열에 d(n)값을 push한다.)
// i=1부터 10000까지 d(n)에 없다면 출력하면 된다. 즉, 만약 i=42이고 d(n)값이 저장되어있는 배열에 42가 없으므로 출력 = 셀프 넘버

// 배열에 해당 인자가 없다는 것은 어떻게 구할까?
// 방법 1 - if(!arr.includes(i))
// 방법 2 - if(arr.indexof(i) === -1)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let dn = [];
let sum = 0;
for (let n = 1; n <= 10000; n++) {
  sum += n;
  for (let i = 0; i < n.toString().length; i++) {
    sum += +n.toString()[i];
  }
  dn.push(sum);
  sum = 0;
}

for (let i = 1; i <= 10000; i++) {
  if (!dn.includes(i)) console.log(i);
}
