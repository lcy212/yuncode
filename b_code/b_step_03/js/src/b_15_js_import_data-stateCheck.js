// // b_15_js_import_data-stateCheck.js

// var linkFn = function(url, method, async){
//   var http = new XMLHttpRequest();
//   var stateMessage;

// http.onreadystatechange =function(){
//   console.log(http.state);
//   switch (http.readyState) {
//     case XMLHttpRequest.UNSENT: // 0
//       stateMessage = '서버와 데이터 연결 끊어짐'
//       break;
//     case XMLHttpRequest.OPENED : // 1
//       stateMessage = '서버 연결'
//       break;
//     case XMLHttpRequest.HEADERS_RECEIVED : // 2
//       stateMessage = '서버 접근 중, 파일 검색 중'
//       break;
//     case XMLHttpRequest.LOADING : // 3
//       stateMessage = '데이터 불러오는 중'
//       break;
//     case XMLHttpRequest.DONE : // 4
//       stateMessage = '서버와 연결 대기 중'
//       break;
//   }
//   if(http.readyState === XMLHttpRequest.DONE){
//     console.log('서버가 이상없이 연결되어있음');
//   }
//   // console.log(atateMessage);
// }

// var method = method || 'GET'; // 앞의 자료가 undefinded면 뒤의 값으로 대체
// var url = url;
// var async = async || true;

// // http.onreadystatechange();
// http.open(method, url, true);
// http.send();
// }


// var method = 'GET';
// var url = '../data/person_card.json';
// var async = true;

// linkFn(url, method, async);


var xhr = new XMLHttpRequest();
console.log(xhr.onreadystatechange); // 준비상태의 변화를 감지 - 인식
console.log(xhr.readyState); // 준비상태(신호등)
xhr.open('GET', '../data/person_cardd.json', true) // 자료 찾아서 신청
xhr.send();

fetch('../data/person_card.json').then(function(){
  console.log(response.json());
})

