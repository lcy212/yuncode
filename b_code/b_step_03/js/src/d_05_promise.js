"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

// d_05_promise.js
// 실행 컨텍스트 : 브라우저에서 실행되는 순서를 파악하고 처리하는 형태
// 스택 : 수행하는 순서에서 처리되는 모양을 보여줌
// 힙   : 스택과 별도로 관리하는 것
var fnOne = function fnOne(data, fn) {
  var rel3 = data * data;
  return rel3;
};

var fnTwo = function fnTwo(data, fn) {
  var rel2 = data / 2;
  return fn(rel2);
};

var fnThree = function fnThree(data, fn) {
  var rel1 = data * 5;
  return fn(rel1, fnOne);
};

var valueResult = fnThree(4, fnTwo);
console.log(valueResult); // ------------------------------------------------------------------------------------

var fn2One = function fn2One(data) {
  return Math.pow(data, 2);
};

var fn2Two = function fn2Two(data) {
  var rel = data / 2;
  return fn2One(rel);
};

var fn2Three = function fn2Three(data) {
  var rel = data * 5;
  return fn2Two(rel);
};

var valueResult2 = fn2Three(10);
console.log(valueResult2); // ------------------------------------------------------------------------------------
// promise
// 1. pending : 진행전/진행중
// 2. fulfilled : 성공
// 3. reject : 실패/오류

var fnDataValue = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('success!');
    reject('fail!');
  }, 500);
});
fnDataValue.then(function (resolve) {
  return '성공';
}) // 값이 resolve(성공)하면 수행
.catch(function (error) {
  return '실패';
}) // 값이 reject(실패)하면 수행
.then(function (data) {
  return data + ' 하였습니다.';
}) // 위 둘 중 하나 수행을 마친 후 수행
.then(function (data) {
  return console.log(data);
}); // 위를 마친 후 수행
// promise 기능 수행 후 다음을 수행
// ------------------------------------------------------------------------------------
// const dataCalc = new Promise(function(resolve,reject){
//   resolve(2);
// });
// dataCalc
//   .then(function(response){
//     return response * 5;
//   })
//   .then(function(response){
//     return response / 2;
//   })
//   .then(function(response){
//     return response ** 2;    // 제곱
//   })
//   .then(function(response){
//     console.log(response);
//   });
// ------------------------------------------------------------------------------------

var dataCalc = function dataCalc(ins) {
  var dataResult = new Promise(function (resolve, reject) {
    var convertNum = parseInt(ins); // 들어오는 수치를 숫자로 변환

    var permission = isNaN(convertNum); // 숫자가 NaN인지 판단

    permission ? resolve(ins) : reject('숫자로 작성해주세요');
  });
  return dataResult;
};

var fnNum = function fnNum(n) {
  dataCalc(n).then(function (response) {
    return response * 5;
  }).then(function (response) {
    return response / 2;
  }).then(function (response) {
    return Math.pow(response, 2);
  }).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
}; // ----------------------------------------------------------
// 버튼 클릭시 input 값을 파악하여 연산


var input = document.querySelector('#num');
var btn = document.querySelector('button');
btn.addEventListener('click', function (e) {
  e.preventDefault();
  var _n = input.value;
  fnNum(_n);
}); // -----------------------------------------------------------
// 문제 : 현재 점수의 합을 계산하시오.
// html 코드 사용여부 : 1, 3, 5
// css 코드 사용여부 : 1, 3, 5
// js 코드 사용여부 : 1, 3, 5
// 위 점수의 합 + 5
// 위의 값 * 5 => 최종 점수 : 값
// 점수도출이 되지 않으면 => 다시 입력하세요

var dataH = function dataH(i) {
  var dataIn = new Promise(function (resolve, reject) {
    var convertNum = parseInt(i); // 들어오는 수치를 숫자로 변환

    var permission = isNaN(convertNum);
    permission ? resolve(i) : reject('점수도출 오류. 다시 입력하세요');
  });
  return dataIn;
};

var dataHap = function dataHap(i) {
  dataH(i).then(function (response) {
    return response + i;
  }).then(function (response) {
    return response + i;
  }).then(function (response) {
    return response + i;
  }).then(function (response) {
    return response + 5;
  }).then(function (response) {
    return response * 5;
  }).then(function (response) {
    console.log('최종점수 : ', response);
  }).catch(function (error) {
    console.log(error);
  });
};

dataHap(1);