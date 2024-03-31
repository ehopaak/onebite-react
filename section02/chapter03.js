// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];
let arr1 = [1, 2, 3];

let [one, two, three, four = 4] = arr;
console.log(one, two, three);

let [a, b] = arr1;
console.log(a, b);

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// 2.객체의 구조할당
let person = {
  name: "박성진",
  age: 32,
  hobby: "스쿼트",
};

let { name, age, hobby, extra } = person;
console.log(name, age, hobby, extra);
// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
// const func = (person) => {
//   person.name;
//   person.age;
//   person.hobby;
// };

const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
