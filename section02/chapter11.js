console.log(1);

// setTimeout을 사용하면 3초뒤에 콜백 함수를 실행시킴
// 비동기 작업들은 자바스크립트 엔진 즉 쓰레드가 아닌 Web APIs에서 실행됨
setTimeout(() => {
  console.log(2);
}, 3000);

console.log(3);
