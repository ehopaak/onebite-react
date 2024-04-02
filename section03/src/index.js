//common js module 시스템 이용

// const moduleData = require("./math");
// console.log(moduleData);

// const { add, sub } = require("./math");
// console.log(add(1, 2));
// console.log(sub(1, 2));

//ES module 시스템 이용(common js와 같이 사용할 수 없음, package.js에 "type": "module" 추가하여 사용가능)

// import mul from "./math.js"; //함수 이름 임의로 설정 가능함
// import { add, sub } from "./math.js";
// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
