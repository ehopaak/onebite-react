// 함수 선언
let result = getArea(30, 40);
console.log(`직사각형의 넓이는: ${result}입니다.`);

// 호이스팅 -> 끌어올리다. java나 c같은 경우는 선언이 먼저 안된 함수를 호출하게되면 에러발생하지만
// 자바스크립트는 함수들을 알아서 끌어올려 읽어서 실행한다.
function getArea(width, height) {
  let area = width * height;
  //   console.log(`직사각형의 넓이는: ${area}입니다.`);
  // 중첩함수 : 함수(function) 안에 또다른 함수를 호출할 수 있음
  function another() {
    let anotherArea = width * height * 2;
    console.log(anotherArea);
  }
  another();

  return area;
  // return 밑으로는 실행 x return 실행후 종료됨
}
