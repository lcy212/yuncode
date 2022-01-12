"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

// d_05_promise_ex_01.js
// promise
// 어떠한 값을 순차적으로 진행 할 수 있도록 만드는 기능
// 비동기처리시 콜백함수의 그능을 사용하지않고 수행할 수 있도록 만드는 역할
// 1. 생성자 함수이며 받아들이는 값은 1:resolve(성공), 2:reject(실패)
// 2. 생성자함수에의한 결과를 다음 작업을 수행하도록 하는 메소드( .then() )
// 3. then에 들어가는 인자는 성공의 결과로서 이전에 처리된 기능의 결과물을 담는다.
// 4. 이후에도 then에 관련내용을 수행하고 다시 그다음 수행을 하려면
// 5. 뒤에 .then을 이어 붙여서 사용하게 만들면 된다.
// 6. 만약 promise함수에서 reject를 도출시켰다면 .then()이아닌 .catch() 메소드를 수행
// 7. catch메소드에서는 error인 결과물을 수행하게 만들거 처리하게 된다.
// 8. 성공여부를 떠나서 무조건 적인 결과를 수행해야 하는 상황인 경우에는 .finaly() 메소드를 수행
// 시나리오
// 국영수 값을 모두 합쳐 결과도출
// 1. 점수입력 후 버튼 클릭
// 2. 해당하는 값 모두 더하기
// 3. 합 + 5
// 4. (합+5)*5
// 5. 최종점수 도출 (.result > span)
// 값 입력이 안되어있다면 입력 요구, 입력값 0~5
// -------------------------------------------------------------------
// 변수
var testBox = document.querySelector('#testBox');
var elKorean = document.querySelector('#korean');
var elEnglish = document.querySelector('#english');
var elMath = document.querySelector('#math');
var btn = testBox.querySelector('button');
var result = testBox.querySelector('.result > span'); //

var fnRel = function fnRel(score, score2) {
  var _n = parseInt(score); // 숫자로 변환


  var nanCheck = isNaN(_n) === false; // _n은 NaN이 아니다 

  var numArea = _n >= 0 && _n <= 5; // n이 0 ~5일 떼

  var _n2 = score2 || 0; // 아래의 rel값이 들어갈 곳?


  var sendData = new Promise(function (resolve, reject) {
    // Promise는 생성자함수이기때문에 new를 붙여줘야함
    if (nanCheck && numArea) {
      // 값이 NaN이 아니고 0~5일 때
      var nRel = _n + _n2; // 입력값 + 누적값

      resolve(nRel);
    } else {
      reject('숫자를 정확하게 입력해주세요.');
    }
  });
  return sendData;
};

var fnSubject = function fnSubject(n, i, j) {
  fnRel(n) // 국어점수 입력받음 -> n 조건판단 후 맞다면 then으로, 거짓이면 catch로
  .then(function (rel1) {
    // 값을 전달 받았을때 (ok) 
    return fnRel(i, rel1); // 영어점수 입력받음 -> i 조건판단 후 맞다면 영어점수와 국어점수를 더한값을 return 한다, 거짓이면 catch로
  }).then(function (rel2) {
    return fnRel(j, rel2); // 수학점수 입력받음 -> j 조건판단후 맞다면 수학점수 + (국어+영어) 값을 return한다, 거짓이면 catch로
  }).then(function (rel3) {
    var numResult = (rel3 + 5) * 5; // 최종점수 = ((국어+영어+수학)+5)*5

    result.innerHTML = numResult; // 최종점수를 html에 표시한다
  }).catch(function (error) {
    // 값에 에러가 났을때 (reject)
    result.innerHTML = error; // 에러 안내메시지를 html에 표시한다
  });
}; // 이벤트


btn.addEventListener('click', function (e) {
  e.preventDefault();
  var _ref = [elKorean.value, elEnglish.value, elMath.value],
      kr = _ref[0],
      en = _ref[1],
      mt = _ref[2];
  fnSubject(kr, en, mt);
});