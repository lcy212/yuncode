// d_03_esnext_arrowFunction.js


// 생성자 함수 = 화살표 함수



// 함수 표현식 ---------------------------------------------
// return 처리할 값이 없는 함수를 제외하고 사용이 가능하다
const fnBox = function(a){
  return a * 10;
};
fnBox(5);
console.log(fnBox);
// ------------------------
const fnBox2 = a => a * 10;
console.log(fnBox2);

// 즉시실행함수

// 함수 선언식 ---------------------------------------------
function fnBox3 (a, b){
  const c = (a+b) * 100 + 'size';
  return c;
}
let rel = fnBox3(5, 10);
console.log(rel);
// ----------------------------------
const fnBox4 = (a, b) => {
  const c = (a+b) * 100 + 'size';
  return c;
}
let rel2 = fnBox4(10, 3);
console.log(rel2);

// ----------------------------------

const arrNum = [1, 2, 4, 6, 8, 9, 20, 40, 56, 75, 88];
// 방법 1
// const minNum = arrNum.filter(function(part){
//   return 40 >= part && part > 10 
// });

// 방법 2
// const minNum = arrNum.filter(part => 40 >= part && part > 10);

// 방법3
const minNum = arrNum.filter((part) => { 
  return 40 >= part && part > 10 
});

console.log(minNum);

// ----------------------------------------------------------


const TimeTable = function(kor, eng, math){
  this.name = name;
  this.korean = kor;
  this.english - eng;
  this.math = math;
};
TimeTable.prototype.subject = '2021년 학습 과정명'

const data = []

const st1 = new TimeTable('xido', 60, 70, 70);
data.push(st1);
console.log(data);

// ------------------------------------------------------------
// 생성자 함수로 화살표 함수 사용 불가능
// data에 값이 없을때와 생성자로 사용시 타입이 변환 불가능하면 에러

const fnData = () => {};
const myFn = new fnData();
console.log(myFn.prototype);

// ---------------------------------------------
// 생성자 함수는 과거의 형태 그대로유지, class라고 불림

// const PersonResult = function(name, kor, eng){
//   this.name = name;
//   this.kor = kor;
//   this.eng = eng;
// };

class PersonResult {
  constructor(name, kor, eng){
    this.name = name;
    this.kor = kor;
    this.eng = eng;
  }
};

const person = new PersonResult('x', 70, 90);
console.log(person);

// -----------------------------------------

// const ItProduct = function(brand, product, year, price){
//   this.brand = brand;
//   this.product = product;
//   this.makeYear = year;
//   this.price = price;
// }

class ItProduct {
  constructor (brand, product, year, price){
    this.brand = brand;
    this.product = product;
    this.makeYear = year;
    this.price = parseInt(price).toLocaleString('ko-KR') + '원';
  }
};


let mouse1 = new ItProduct('cox', 'mouse', '2020', '10000');
console.log( mouse1);

