// d_05_promise.js

// 실행 컨텍스트 : 브라우저에서 실행되는 순서를 파악하고 처리하는 형태
// 스택 : 수행하는 순서에서 처리되는 모양을 보여줌
// 힙   : 스택과 별도로 관리하는 것

const fnOne = function(data, fn){
  const rel3 = data * data;
  return rel3;
}

const fnTwo = function(data, fn){
  const rel2 = data / 2;
  return fn(rel2);
}

const fnThree = function(data, fn){
  const rel1 = data * 5;
  return fn(rel1, fnOne);
}

let valueResult = fnThree(4, fnTwo);

console.log(valueResult);

// ------------------------------------------------------------------------------------

const fn2One = data => data**2;

const fn2Two = (data) => {
  const rel = data / 2;
  return fn2One(rel);
}

const fn2Three = (data) => {
  const rel = data * 5;
  return fn2Two(rel);
}

let valueResult2 = fn2Three(10);
console.log(valueResult2);

// ------------------------------------------------------------------------------------
// promise
// 1. pending : 진행전/진행중
// 2. fulfilled : 성공
// 3. reject : 실패/오류

const fnDataValue = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve('success!');
    reject('fail!');
  }, 500);
});

fnDataValue
  .then((resolve) => { return '성공'; })                     // 값이 resolve(성공)하면 수행
  .catch(function(error){  return '실패';  })                // 값이 reject(실패)하면 수행
  .then(function(data){ return data + ' 하였습니다.';})      // 위 둘 중 하나 수행을 마친 후 수행
  .then(data => console.log( data ) );                       // 위를 마친 후 수행

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

const dataCalc = function(ins){
  const dataResult = new Promise(function(resolve, reject){
    const convertNum = parseInt(ins)            // 들어오는 수치를 숫자로 변환
    const permission = isNaN(convertNum);       // 숫자가 NaN인지 판단
    (permission)? resolve(ins): reject('숫자로 작성해주세요');
  });
  return dataResult;
};

const fnNum = function(n){
  dataCalc(n)
  .then(function(response){return response * 5})
  .then(function(response){return response / 2})
  .then(function(response){return response ** 2})
  .then(function(response){console.log(response)})
  .catch(function(error){console.log(error)})
}

// ----------------------------------------------------------
// 버튼 클릭시 input 값을 파악하여 연산
const input = document.querySelector('#num');
const btn = document.querySelector('button');

btn.addEventListener('click', function(e){
  e.preventDefault();
  const _n = input.value;
  fnNum(_n);
})

// -----------------------------------------------------------

// 문제 : 현재 점수의 합을 계산하시오.
// html 코드 사용여부 : 1, 3, 5
// css 코드 사용여부 : 1, 3, 5
// js 코드 사용여부 : 1, 3, 5
// 위 점수의 합 + 5
// 위의 값 * 5 => 최종 점수 : 값
// 점수도출이 되지 않으면 => 다시 입력하세요

const dataH = function(i){
  const dataIn = new Promise(function(resolve, reject){
    const convertNum = parseInt(i)            // 들어오는 수치를 숫자로 변환
    const permission = isNaN(convertNum);   
    (permission)? resolve(i): reject('점수도출 오류. 다시 입력하세요');
  });
  return dataIn;
};

const dataHap = function(i){
  dataH(i)
  .then(function(response){return response + i})
  .then(function(response){return response + i})
  .then(function(response){return response + i})
  .then(function(response){return response + 5})
  .then(function(response){return response * 5})
  .then(function(response){console.log('최종점수 : ', response)})
  .catch(function(error){console.log(error)})
}

dataHap(1);
