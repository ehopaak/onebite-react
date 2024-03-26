// 1. 함수 표현식
function funcA() {
  // console.log("funcA");
}

// 함수를 호출하는게 아니라 함수 자체를 변수에 담으면 변수를 호출하면 자동으로 함수가 실행됨
let varA = funcA;
varA();

//익명함수 (호이스팅 대상 안됨 *사용주의)
let varB = function () {
  // console.log("funcB");
};

varB();

// 2. 화살표 함수

let varC = (value) => {
  return value + 1;
};

console.log(varC(5));
