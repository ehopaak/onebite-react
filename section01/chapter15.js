// 1.객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴(대부분 사용)

let person = {
  name: "박성진",
  age: 32,
  hobby: "등산",
  job: "FE Deveploper",
  extra: {},
  10: 20,
  "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근(점 표기법, 괄효 표기법)
let name = person.name;

let age = person["age"];

let property = "hobby";
let hobby = person[property];

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "FE Deveploper";
person["favoriteFood"] = "평양냉면";

// 3.3 프로퍼티를 수정하는 방법
person.job = "back Deveploper";
person["favoriteFood"] = "떡볶이";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;

// 프로퍼티의 존재 유무를 확인하는 방법(in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result2);
