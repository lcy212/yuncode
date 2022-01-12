"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.promise.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// d_04_fetch.js

/*
// 버튼 클릭시 관련 자료만 모아서 pre에 담기
// 변수
const http = new XMLHttpRequest();                  // 기존 data 불러오기
const elBtn = document.querySelector('button');
const elPre = document.querySelector('pre');

// 기능/함수
const dataList = function(){
  http.open('GET', '../data/person_card.json', true); // (method, url, async)
  http.onreadystatechange = function(){
    const state = http.readyState;
    if(state === XMLHttpRequest.DONE){
      console.log(http.responseText);
      if(sta >= 200 && sta < 400){
        return http.response;
      }
    }
  }
  http.send();
};

// 이벤트
elBtn.addEventListener('click', function(e){
  e.preventDefault();
  const getData = dataList();
  console.log(dataList());
});
*/
// -------------------------------------------------------------------------
// 외부문서 불러오기
// 1. 외부문서의 주소 가져오기 fetch(json주소) 
// 2. json파일 정리하여 보내기 .then()         
// 3. 수행할 기능 넣기         .then()
// 합쳐서 fetch(주소).then().then() 의 형식으로 작성
// fetch : 자료요청을 위해 주소를 보내 처리된것을 then으로 넘김
// then  : 넘겨받는 자료를 수행하는 메소드
// response.json() : 응답받은 data 중 json 내용만 찾아내는 메소드
var elBtn = document.querySelector('button'); // 버튼 가져오기

var elPre = document.querySelector('ul'); // ul 가져오기

var url = "../data/person_card.json"; // 자료주소 가져오기

var dataInsert = // dataInsrt라는 이름의 객체 생성
function dataInsert(title, image) {
  _classCallCheck(this, dataInsert);

  // constructor : 생성자
  this.cardTitle = title; // { cardTitle:"title" }

  this.imageUrl = image; // { imageUrl:"image" }
};

var fnGetData = function fnGetData(jsonData) {
  console.log(jsonData);
  var data = jsonData;
  data.forEach(function (data) {
    var objD = new dataInsert(data.title, data.image);
    var mkLi = document.createElement('li'); // li 만들기

    mkLi.innerText = objD.cardTitle; // li에 cardTitle 텍스트로 넣기

    elPre.append(mkLi); // li를 html에 넣기
  });
}; // const fnFetch = function(path){
//   fetch(path).then(function (response) {
//     return response.json();
//   }).then(function (data) {
//     fnGetData(data);
//   });
// };


var fnFetch = function fnFetch(path) {
  // path = url = "../data/person_card.json";
  fetch(path) // path에서 data를 받아 then으로 넘김
  .then(function (response) {
    // 넘겨받은 data 일부 정제해서 다음 then으로 넘기는 내용을 담음
    return response.json(); // 넘겨받은 data중에서 json내용만 최종 처리
  }) // 정제된 data를 다음 then으로 넘김
  .then(fnGetData); // 넘겨받은 data를 fnGetData함수에 전달
}; // 이벤트
// elBtn.addEventListener('click', function(e){
//   e.preventDefault();
//   fnFetch(url);
// });


var fnEvent = function fnEvent(e) {
  e.preventDefault();
  fnFetch(url);
};

elBtn.addEventListener('click', fnEvent);