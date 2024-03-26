// Quiz1
const x = 15;
const y = 20;

let max;
if (x > y) {
  max = x;
  console.log(max);
} else {
  max = y;
  console.log(max);
}

// let max = x > y ? x : y;
// console.log(max);

// Quiz2
const a = true;

if (typeof a === "number") {
  console.log("숫자");
} else if (typeof a === "string") {
  console.log("문자열");
} else if (typeof a === "boolean") {
  console.log("불리언");
} else if (typeof a === null) {
  console.log("널");
} else if (typeof a === "undefined") {
  console.log("언디파인");
} else if (typeof a === "object") {
  console.log("객체");
}

// Quiz3
let temperature = 10;
if (temperature >= 20) {
  console.log("더움");
} else if (10 <= temperature < 20) {
  console.log("적당");
} else if (0 <= temperature < 10) {
  console.log("추움");
} else if (temperature < 0) {
  console.log("매우추움");
}
