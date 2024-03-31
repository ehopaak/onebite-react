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

// const book1 = {
//   title: "한 입 크기로 잘라먹는 리액트",
//   author: "이정환",
// };

// if ("publishedYear" in book1) {
//   console.log(`출판년도는 ${publishedYear}입니다.`);
// } else {
//   console.log("출판년도 정보가 없습니다.");
// }

// //다른표현
// const book2 = {
//   title: "한 입 크기로 잘라먹는 리액트",
//   author: "이정환",
// };

// const result = book2.publishedYear;
// if (result) {
//   console.log(result || `출판년도는 ${publishedYear}입니다.`);
// } else {
//   console.log("출판년도 정보가 없습니다.");
// }

// Quiz1. 영화 리뷰 정보 출력하기
// function printMovieReview({ title, releaseYear, reviewers }) {
//   console.log(`제목 : ${title}`);
//   console.log(`개봉 : ${releaseYear}`);
//   if (reviewers.length !== 0) {
//     console.log(`첫 번째 리뷰어 : ${reviewers[0]}`);
//   } else {
//     console.log("첫 번째 리뷰어 : 리뷰어 미정");
//   }

//   //   const [fistReviewer = "리뷰어 미정"] = reviewers;
//   //   console.log(`첫 번째 리뷰어 : ${fistReviewer}`);
// }

// printMovieReview({
//   title: "오펜하이머",
//   releaseYear: 2023,
//   reviewers: ["이정환", "김효빈", "김고은"],
// });

// printMovieReview({
//   title: "웡카",
//   releaseYear: 2024,
//   reviewers: [],
// });

// // 출력 결과 :
// // 제목 : 오펜하이머
// // 개봉 : 2023
// // 첫 번째 리뷰어 : 이정환

// // Quiz2. 평균 성적 출력하기
// function printAvgScore(students) {
//   for (let name in students) {
//     let sum = 0;
//     const { scores } = students[name];

//     for (let score of scores) {
//       sum += score;
//     }
//     const avg = sum / scores.length;
//     console.log(`${name}: ${avg}`);
//   }
// }

// printAvgScore({
//   이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
//   김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
//   홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
// });

// // 출력 결과 :
// // 이정환: 30
// // 김효빈: 64
// // 홍길동: 58

// Quiz1. 배열 분할 및 결합하기
function splitAndCombine(arr) {
  let arr1 = arr.slice(4);
  console.log(arr1);
  let arr2 = arr.slice(0, 4);
  console.log(arr2);
  return arr2.concat(arr1);
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
const result = splitAndCombine(arr);
console.log(result);

// 출력 결과 :
// [4,5,6,7,0,1,2,3]

// Quiz2. 클릭 이벤트 로그 처리하기
function printClickEventLogs(logs) {
  let date = new Date();

  logs.forEach((logs) => {
    if (logs.type === "click") {
      console.log(`${logs.type}:: ${new Date(logs.date).toLocaleString()}`);
    }
  });
}

printClickEventLogs([
  {
    type: "click",
    date: "2023-01-01T12:00:00Z",
  },
  {
    type: "hover",
    date: "2023-01-01T12:10:00Z",
  },
  {
    type: "scroll",
    date: "2023-01-01T12:15:00Z",
  },
  {
    type: "click",
    date: "2023-01-01T12:20:00Z",
  },
]);

// 출력 결과
// click :: 2023. 1. 1. 오후 9:00:00
// click :: 2023. 1. 1. 오후 9:20:00

// Quiz3. 카페 할인 이벤트
function getDiscountedMenus(menus) {
  menus.forEach((menus) => {
    menus.discountedPrice = menus.price - 500;
  });
  return menus;
}

const discountedMenus = getDiscountedMenus([
  { itemId: 1, name: "아메리카노", price: 3000 },
  { itemId: 2, name: "라떼", price: 3500 },
  { itemId: 3, name: "초콜릿 케이크", price: 5000 },
  { itemId: 4, name: "크로와상", price: 2800 },
]);

console.log(discountedMenus);
// 출력 결과 :
// { itemId: 1, name: '아메리카노', price: 3000, discountedPrice: 2500 },
// { itemId: 2, name: '라떼', price: 3500, discountedPrice: 3000 },
// { itemId: 3, name: '초콜릿 케이크', price: 5000, discountedPrice: 4500 },
// { itemId: 4, name: '크로와상', price: 2800, discountedPrice: 2300 }

// Quiz4. 도서 정리하기
function getSortedBooks(books) {
  return books.sort((a, b) => {
    const aTime = a.published.getTime();
    const bTime = b.published.getTime();
    return bTime - aTime;
  });
}

const sortedBooks = getSortedBooks([
  {
    title: "한입 리액트",
    published: new Date("2023. 04. 06"),
  },
  {
    title: "웹 프론트엔드 첫 걸음",
    published: new Date("2024. 04. 30"),
  },
  {
    title: "이펙티브 타입스크립트",
    published: new Date("2021. 06. 27"),
  },
  {
    title: "클린코드",
    published: new Date("2013. 12. 24"),
  },
]);

console.log(sortedBooks);
// 출력 결과 :
// { title: '웹 프론트엔드 첫 걸음', published: 2024-04-29T15:00:00.000Z},
// { title: '한입 리액트', published: 2023-04-05T15:00:00.000Z },
// { title: '이펙티브 타입스크립트', published: 2021-06-26T15:00:00.000Z},
// { title: '클린코드', published: 2013-12-23T15:00:00.000Z }
