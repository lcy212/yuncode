// calc.js

// 방법 1
// let math = {};


// let sum = (a, b) => {
//   return a + b;
// };
// export default sum;
// // export let myCalc = sum;

const multi = (a,b) => {
  return a * b;
}
const minus = (a,b) => {
  return a - b;
}
export {multi, minus};