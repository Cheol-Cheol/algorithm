<html>
  <head>
    <meta charset="UTF-8" />
    <title>출력결과</title>
  </head>
  <body>
    <script>
      function solution(arr) {
        let answer = 0;
        let cnt = 0;
        for (let x of arr) {
          if (x === 1) {
            cnt++;
            answer += cnt;
          } else cnt = 0;
        }
        return answer;
      }

      let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
      console.log(solution(arr));
    </script>
  </body>
</html>
