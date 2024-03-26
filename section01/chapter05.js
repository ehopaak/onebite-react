// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity;
let minf = -Infinity;

let nan = NaN;

console.log(1 * "Hello");

// 2. String Type
let myName = "이정환";
let myLocation = "목동";

//output = 이정환목동
let introduce = myName + myLocation;
console.log(introduce);

//템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type(아무것도 없다.를 표현함)
let empty = null;

// 5. Undefined Type(초기화 하지 않았거나 존재하지 않은 어떠한 값을 불러올떄 )
let none;
console.log(none);
