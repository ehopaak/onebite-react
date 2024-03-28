// 1. 단락평가(특정 조건에 맞춰서 함수를 호출할지 안할지 평가함)
function returnFalse() {
  console.log("False 함수");
  return undefined;
}
function returnTrue() {
  console.log("True 함수");
  return 10;
}

//단락평가 미진행 : False함수, false
console.log(returnFalse() && returnTrue());
//단락평가 진행 : True 함수, False함수, false
console.log(returnTrue() && returnFalse());

//단락평가 진행 : Treu함수, true
console.log(returnFalse() || returnTrue());

// 단락평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "박성진" });
