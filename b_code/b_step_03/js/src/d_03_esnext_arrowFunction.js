"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// d_03_esnext_arrowFunction.js
// 생성자 함수 = 화살표 함수
// 함수 표현식 ---------------------------------------------
// return 처리할 값이 없는 함수를 제외하고 사용이 가능하다
var fnBox = function fnBox(a) {
  return a * 10;
};

fnBox(5);
console.log(fnBox); // ------------------------

var fnBox2 = function fnBox2(a) {
  return a * 10;
};

console.log(fnBox2); // 즉시실행함수
// 함수 선언식 ---------------------------------------------

function fnBox3(a, b) {
  var c = (a + b) * 100 + 'size';
  return c;
}

var rel = fnBox3(5, 10);
console.log(rel); // ----------------------------------

var fnBox4 = function fnBox4(a, b) {
  var c = (a + b) * 100 + 'size';
  return c;
};

var rel2 = fnBox4(10, 3);
console.log(rel2); // ----------------------------------

var arrNum = [1, 2, 4, 6, 8, 9, 20, 40, 56, 75, 88]; // 방법 1
// const minNum = arrNum.filter(function(part){
//   return 40 >= part && part > 10 
// });
// 방법 2
// const minNum = arrNum.filter(part => 40 >= part && part > 10);
// 방법3

var minNum = arrNum.filter(function (part) {
  return 40 >= part && part > 10;
});
console.log(minNum); // ----------------------------------------------------------

var TimeTable = function TimeTable(kor, eng, math) {
  this.name = name;
  this.korean = kor;
  this.english - eng;
  this.math = math;
};

TimeTable.prototype.subject = '2021년 학습 과정명';
var data = [];
var st1 = new TimeTable('xido', 60, 70, 70);
data.push(st1);
console.log(data); // ------------------------------------------------------------
// 생성자 함수로 화살표 함수 사용 불가능
// data에 값이 없을때와 생성자로 사용시 타입이 변환 불가능하면 에러

var fnData = function fnData() {};

var myFn = new fnData();
console.log(myFn.prototype); // ---------------------------------------------
// 생성자 함수는 과거의 형태 그대로유지, class라고 불림
// const PersonResult = function(name, kor, eng){
//   this.name = name;
//   this.kor = kor;
//   this.eng = eng;
// };

var PersonResult = function PersonResult(name, kor, eng) {
  _classCallCheck(this, PersonResult);

  this.name = name;
  this.kor = kor;
  this.eng = eng;
};

;
var person = new PersonResult('x', 70, 90);
console.log(person); // -----------------------------------------
// const ItProduct = function(brand, product, year, price){
//   this.brand = brand;
//   this.product = product;
//   this.makeYear = year;
//   this.price = price;
// }

var ItProduct = function ItProduct(brand, product, year, price) {
  _classCallCheck(this, ItProduct);

  this.brand = brand;
  this.product = product;
  this.makeYear = year;
  this.price = parseInt(price).toLocaleString('ko-KR') + '원';
};

;
var mouse1 = new ItProduct('cox', 'mouse', '2020', '10000');
console.log(mouse1);