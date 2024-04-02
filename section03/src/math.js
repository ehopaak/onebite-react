// math 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// common js 이용
// module.exports = {
//   add,
//   sub,
// };

// ES module 이용 (함수 앞에 export를 붙혀주면 됨)
export { add, sub };

// default 기본값으로 설정
export default function multiply(a, b) {
  return a * b;
}
