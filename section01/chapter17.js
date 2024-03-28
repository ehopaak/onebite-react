// 1. 배열
let arrA = new Array(); //배열 생성자
let arrB = []; //배열 리터럴 (대부분 사용)

let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];
true;
// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];
console.log(item1, item2);

arrC[0] = "sexy";
console.log(arrC);
