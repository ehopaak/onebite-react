// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};
animal.age = 2;
animal.name = "깜시"; //수정
delete animal.color; //삭제
console.log(animal);

const person = {
  name: "박성진",
  sayHi: function () {
    console.log("안녕");
  },
};
person.sayHi();
person["sayHi"]();
