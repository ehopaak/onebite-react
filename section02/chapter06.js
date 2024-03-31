// 1. 배열순회
let arr = [1, 2, 3];

// 1. 배열 인덱스
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr2[i]);
}

// 1.1 for of 반복문(배열 순회하기위한 반복문)
for (let item of arr) {
  //   console.log(item);
}
// 2. 객체순회
let person = {
  name: "박성진",
  age: 32,
  hobby: "등산",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
let val = Object.values(person);

for (let i = 0; i <= keys.length; i++) {
  console.log(keys[i]);
}

for (let key of keys) {
  console.log(key);
}

for (let i = 0; i < val.length; i++) {
  console.log(val[i]);
}
for (let key of val) {
  console.log(key);
}

//2.2 for of (객체에만 쓸수있음)
for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

// 2.3 for in (배열에만 쓸 수 있음)
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
