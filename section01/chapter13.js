// 1. 콜백함수
// main함수에서 value()을 쓰는이유: sub로 호출하는게 아니라서
// 원하는 순서에 함수를 호출할 수 있음
function main(value) {
  console.log(1);
  console.log(1);
  value();
  console.log(2);
  console.log("end");
}

function sub() {
  console.log("sub함수 실행");
}

main(sub);

main(function () {
  console.log("이것도 가능함");
});

main(() => {
  console.log("화살표함수로도 가능함");
});

// 2. 콜백함수의 활용 : 비슷한 기능의 함수중복을 예방하기 위해
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
    // console.log(idx);
  }
}

// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }
// function repeattriple(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 3);
//   }
// }

repeat(5, (idx) => {
  console.log(idx);
});
repeat(5, (idx) => {
  console.log(idx * 2);
});
repeat(5, (idx) => {
  console.log(idx * 3);
});
