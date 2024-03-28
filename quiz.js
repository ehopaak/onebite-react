// Quiz1
// const x = 15;
// const y = 20;

// let max;
// if (x > y) {
//   max = x;
//   console.log(max);
// } else {
//   max = y;
//   console.log(max);
// }

// // let max = x > y ? x : y;
// // console.log(max);

// // Quiz2
// const a = true;

// if (typeof a === "number") {
//   console.log("숫자");
// } else if (typeof a === "string") {
//   console.log("문자열");
// } else if (typeof a === "boolean") {
//   console.log("불리언");
// } else if (typeof a === null) {
//   console.log("널");
// } else if (typeof a === "undefined") {
//   console.log("언디파인");
// } else if (typeof a === "object") {
//   console.log("객체");
// }

// // Quiz3
// let temperature = 10;
// if (temperature >= 20) {
//   console.log("더움");
// } else if (10 <= temperature < 20) {
//   console.log("적당");
// } else if (0 <= temperature < 10) {
//   console.log("추움");
// } else if (temperature < 0) {
//   console.log("매우추움");
// }

// Quiz1. 모든 약수찾기
// let num = 100;
// for (i = 1; i <= num; i++) {
//   if (num % i === 0) {
//     console.log(i);
//   }
// }

// // Quiz2. 소수 판별기(에라토스테네스의 체)
// function isPrimeNumber(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrimeNumber(1));
// console.log(isPrimeNumber(4));
// console.log(isPrimeNumber(11));
// console.log(isPrimeNumber(12));

// // Quiz3. 계산기 만들기
// function add(num1, num2) {
//   return num1 + num2;
// }

// function subtract(num1, num2) {
//   return num1 - num2;
// }

// function calculate(num1, num2, opertation) {
//   let result = opertation(num1, num2);
//   console.log(result);
// }

// calculate(5, 3, add);
// calculate(5, 3, subtract);

// Quiz1. 책 정보 확인하기

const book1 = {
  title: "한 입 크기로 잘라먹는 리액트",
  author: "이정환",
};

if ("publishedYear" in book1) {
  console.log(`출판년도는 ${publishedYear}입니다.`);
} else {
  console.log("출판년도 정보가 없습니다.");
}

//다른표현
const book2 = {
  title: "한 입 크기로 잘라먹는 리액트",
  author: "이정환",
};

const result = book2.publishedYear;
if (result) {
  console.log(result || `출판년도는 ${publishedYear}입니다.`);
} else {
  console.log("출판년도 정보가 없습니다.");
}
