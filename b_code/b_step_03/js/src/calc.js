"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multi = exports.minus = void 0;

// calc.js
// 방법 1
// let math = {};
// let sum = (a, b) => {
//   return a + b;
// };
// export default sum;
// // export let myCalc = sum;
var multi = function multi(a, b) {
  return a * b;
};

exports.multi = multi;

var minus = function minus(a, b) {
  return a - b;
};

exports.minus = minus;