// b_14_js_json_1.js

var originData = [
  {"id": 1, "title": "VP Marketing", "link": "https://timesonline.co.uk"}, 
  {"id": 2, "title": "Geologist II", "link": "http://cloudflare.com"}, 
  {"id": 3, "title": "Structural Engineer", "link": "http://yelp.com"}, 
  {"id": 4, "title": "Electrical Engineer", "link": "http://alexa.com"}, 
  {"id": 5, "title": "VP Accounting", "link": "http://newsvine.com"}, 
  {"id": 6, "title": "Account Representative IV", "link": "https://reuters.com"}, 
  {"id": 7, "title": "Occupational Therapist", "link": "https://shareasale.com"}, 
  {"id": 8, "title": "Marketing Assistant", "link": "https://artisteer.com"}, 
  {"id": 9, "title": "Technical Writer", "link": "https://dailymail.co.uk"}, 
  {"id": 10, "title": "Assistant Media Planner", "link": "https://surveymonkey.com"}
];

// originDaTa copy
var textData = JSON.stringify(originData);
var dataList = JSON.parse(textData);

console.log(dataList);



// nav에 ul 및 li 생성 -------------------------------------------------------------------
// <ul><li><a href="originData의 link">originData의 title</a><li></ul>
// 과정 : .navigation 선택 후 ul을 생성하여 담기, li와 a를 생성하여 담기

// document.getElementsByClassName('navigation')[0]; 구버전. 알아둬야함
var navi = document.querySelector('.navigation'); // html의 .navigation을 변수 navi로 지정
// navi.style.width = '100%';
// navi.style.height = '50px';
// navi.style.backgroundColor = '#dcd';
navi.style = "width:100%; height:50px; background-color:#dcd"; // 위 3줄을 한줄로 표현 가능

//생성 -> document.createElement('ul');
// var makeUl2 = '<ul class="list"></ul>'; // innerHTML 사용시 직접 내용 작성
// navi.innerHTML = makeUl2;
var makeUl = document.createElement('ul'); // innHTML방식이아니라 내부에 추가로 삽입할때 요소로 삽입처리
makeUl.classList.add('list'); // ul의 class명 생성
navi.append(makeUl); // html에 ul 삽입

// ---------------------------------------------------------------------
//li를 .list에 담기 : (.list).append(li)
// a에 href=속성처리, text글자 삽입
// console.log( dataList[0].title, dataList[0].link ); -> a태그에 삽입할 값 확인

// li 하나만 생성할 때 사용
// var UlList = document.querySelector('.list'); 
// var makeLi = document.createElement('li');
// var title = dataList[0].title;
// var link =  dataList[0].link; // list에 입력할 값 변수로 생성
// var makeA = '<a class="link" href="' + link + '">' + title + '</a>'; 

// UlList.append(makeLi);



var UlList = document.querySelector('.list'); // ul. list 선택

// step 1 : li요소 하나만 생성하여 삽입하기!
/*
  var makeLi = document.createElement('li'); // li 생성
  var title = dataList[0].title; // list에 입력할 값 변수로 생성
  var link =  dataList[0].link; // list에 입력할 값 변수로 생성
  // var makeA = '<a class="link"></a>';
  // makeLi.innerHTML = makeA;
  // var findA = makeLi.querySelector('a');
  // findA.href = link;
  // findA.innerText = title;)
  var makeA = '<a class="link" href="' + link + '">' + title + '</a>'; // a태그 생성(입력값 삽입). 위 다섯줄을 두줄로 작성가능 
  makeLi.innerHTML = makeA; // li안에 a태그 삽입
  UlList.append(makeLi); // html에서 ul안에 li 삽입
*/


// for문과 forEach문의 차이
// for     : 전체 순환(0~9)    // 순서대로 이견없이 쭉 처리하는 느낌
// forEach : 각각 처리(값자체) // 순서대로 하나하나 따지며 정지, 처리의 반복같은 느낌


// // step2 : li 요소를 ul에 각각 여러개 삽입 // for(){}, 
// var i=0; // 반복문에 쓰일 변수
// var len = dataList.length; // dataList 객체 수 10
// var makeLi, makeA, findA, title, link; // 사용할 변수 생성
// for(; i<len; i+=1){
//   makeLi = document.createElement('li'); // li 생성
//   makeA = '<a class="link">sample text</a>'; // a태그 생성
//   makeLi.innerHTML = makeA; // li안에 a태그 삽입
//   findA = makeLi.querySelector('a');
//   title = dataList[i].title; // list에 입력할 값 변수안에 담기
//   link =  dataList[i].link; // list에 입력할 값 변수안에 담기
//   findA.href = link; // <a href="dataList의 link"></a>
//   findA.innerText = title; // <a href="dataList의 link">dataList의 title</a>
//   UlList.append(makeLi); // html에서 ul안에 li 삽입
// }

// 함수화
// var loopFn2 = function(i){
//   var makeLi, makeA, findA, title, link;
//   makeLi = document.createElement('li'); // li 생성
//   makeA = '<a class="link">sample text</a>'; // a태그 생성
//   makeLi.innerHTML = makeA; // li안에 a태그 삽입
//   findA = makeLi.querySelector('a');
//   title = dataList[i].title; // list에 입력할 값 변수안에 담기
//   link =  dataList[i].link; // list에 입력할 값 변수안에 담기
//   findA.href = link; // <a href="dataList의 link"></a>
//   findA.innerText = title; // <a href="dataList의 link">dataList의 title</a>
//   UlList.append(makeLi); // html에서 ul안에 li 삽입
// };

// for(; i<len; i+=1){
//   loopFn2(i);
// }



// step3 : forEach()
dataList.forEach(function(data){
  // console.log(data.title, data.link, index); console에서 값 확인가능
  var makeLi = document.createElement('li'); // li 생성
  var makeA = '<a class="link">sample text</a>'; // a태그 생성
  makeLi.innerHTML = makeA; // li안에 a태그 삽입
  var findA = makeLi.querySelector('a');
  findA.href = data.link; // <a href="dataList의 link"></a>
  findA.innerText = data.title; // <a href="dataList의 link">dataList의 title</a>
  UlList.append(makeLi); // html에서 ul안에 li 삽입
});

// 함수화
var loopFn1 = function(data){
  var makeLi = document.createElement('li'); // li 생성
  var makeA = '<a class="link">sample text</a>'; // a태그 생성
  makeLi.innerHTML = makeA; // li안에 a태그 삽입
  var findA = makeLi.querySelector('a');
  findA.href = data.link; // <a href="dataList의 link"></a>
  findA.innerText = data.title; // <a href="dataList의 link">dataList의 title</a>
  UlList.append(makeLi); // html에서 ul안에 li 삽입
};


// javascript로 순수하게 처리하는 것 : 모든 것을 수동으로 처리
// jQuery로 처리하는 것 : 반자동처리. if, for, forEach 등 그대로 활용가능. 단, forEach와 동일기능의 메소드 있음
// jQuery의 append는 javascript에서의 create와 append의 기능을 둘 다 가진다

(function($){
  // var ul = document.querySelector('list'); // javascript
  var ul = $('.list');
  
  dataList.forEach(function(content,index){ // li, a 생성 및 삽입 content 수 만큼 수행
    // ul.append('<li><a class="link href="'+ content.link +'">' + content.title + '</a></li>'); 첫번째 방법
    ul.append('<li><a class="link" href=""></a></li>'); // 두번째 방법
    var list = ul.children('li').eq(index).children('a');
    list.text(content.title);            // 선택자.innerText = '값';
    list.attr('href', content.link);     // 선택자.setAttribute('속성명', '값')
  })
})(jQuery)
