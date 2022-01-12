"use strict";

// d_01_esnext_variable.js
i = 1;
i = 10;
var i = 0; // 위와 같은 var의 문제점(호이스팅, 외부노출 등)
// 변수 설정 방법 ( const, let )
// const : 변하지않는 수 - 상수     -> 생성과 동시에 값 작성
// let   : 변하게 하는 수 - 변수    -> 추후 값 변경 가능
// const의 주 사용처 : function(){}, {}, []

var arr = [];
arr.push(1);
arr.push(4, 'a');
arr.push(9);
console.log(arr); // const option = true;
// console.log(option);
// option = false;
// console.log(option);
// const option = { rel: true };
// console.log(option.rel);
// option.rel = false;
// console.log(option.rel);
// -----------------------------------

var arrayList = [1, 2, 4, 5, 9];
console.log(arrayList);
arrayList = []; // ---------------------------------------

var fnTest = function fnTest(a, b) {
  var k = a * b; // a, b 자체가 아니라 변수에 저장된 값이 변하는거라서 const 가능

  return k;
};

fnTest(4, 5);
fnTest(3, 100); // ---------------------------------------

for (var _i = 0; _i < 10; _i += 1) {
  console.log(_i);
} // ---------------------------------------


var b = 0;
console.log(b); // 한 번 선언한 변수명은 다시 선언할 수 없다
// let b = 100;
// console.log(b);