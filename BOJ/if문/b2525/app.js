const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let hour = +input[0].split(" ")[0];
let minute = +input[0].split(" ")[1];
let time = +input[1];

minute = minute + time;
if (minute >= 60) {
  hour += Math.floor(minute / 60);
  minute = minute % 60;

  if (hour >= 24) {
    hour -= 24;
  }
}
console.log(hour, minute);
