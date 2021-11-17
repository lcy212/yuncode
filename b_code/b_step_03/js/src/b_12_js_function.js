// b_12_function.js


// alert 창띄우기-----------------------------------------------------
// var message = "메세지창을 띄워 확인"
// // alert(message);


// promt 값 입력받기 -------------------------------------------------
// var userOld = '나이를 입력하세요';
// var propResult = prompt(userOld);

// // 첫번째 방법
// if(propResult < 20){
//     location = "https://naver.com";
// }else{
//     document.write('어서오세요');
// }

// // 두번째 방법
// // (propResult < 20)? location = "https://naver.com": document.write('어서오세요');


// confirm 참, 거짓 값 받기 -----------------------------------------
// var adultCheck = '당신은 성인입니까?';
// var confirmCheck = confirm(adultCheck);
// (confirmCheck)? document.write('성인입니다'): document.write('미성년자입니다');


// console의 종류 및 기능---------------------------------------------

// var console = {
//     log : function() { return arguments },
//     warn : function() { return arguments },
//     error : function() { return arguments },
//     info : function() { return arguments },
//     dir : function() { return arguments },
//     table : function() { return arguments },
//     time : function() { return arguments },
//     timeEnd : function() { return arguments },
//     group : function() { return arguments },
//     groupEnd : function() { return arguments }
// }

// var arr = ['one', 'two', 'three', 'four', 'five'];
// var obj = {'a':'one', 'b':'two', 'c' : 'three'};
// console.log('결과 띄워주세요');
// console.table(arr); // 표의 형태로 값이 출력됨
// console.table(obj); // 표의 형태로 값이 출력됨

// // 스톱워치 기능(arr을 출력하기까지 걸리는 시간)
// console.time();
// console.log(arr);
// console.timeEnd();


// Math ---------------------------------------------------

var random = Math.ceil(Math.random() * 10); // 1~10 사이의 난수
console.log(random);

// 가능한부분까지 숫자로 변환하는 함수 : parseInt() - 정수, parseFloat() - 실수(소수점)
var num = 20.456789;
var num2 = '50.9876543vw'; // vw단위의 소수점은 유지되어야함
var unit = '30px';

console.log(parseFloat(num2));


// ----------------------------------------------------------
var sum = eval('5' + '5'); // 숫자 55 : 연산값을 숫자로 변환
console.log(sum + 10); // 연산가능

// 문자형태의 숫자는 암묵적변환으로 숫자가 되어 기본 연산이 된다(단 +는 문자연결 형태로 처리된다)
var n1 = "7";
var n2 = 'c';
var n = n2 - n2; // NaN
var nRel = isNaN();  // is~~() : ~~가 맞는지 판별하는 함수
console.log(n, nRel);

// -----------------------------------------------------------
// 인터넷에서 식별가능한 형태 UTF-8로 변환하는 함수 encodeURI
// 변환불가능 : A-Z a-z 0-9 - _ . ! ~ * ' ()
var space = ' ';
var encodeS = encodeURI(space);
console.log(space, encodeS);

var url = 'http://naver.com';
var encode = encodeURIComponent(url);
console.log(encode);

var korea = 'https://대한민국.kr';
var enKorea = encodeURI(korea);
console.log(enKorea);

// 복원
var deKorea = decodeURI(enKorea);
console.log(deKorea);


console.clear();

// -------------------------------------------------------

// setTimeout() 일정시간 뒤 수행
console.log('글자');
setTimeout(function(){
    console.log('3초 뒤 글자')
}, 3000);

// setTnterval() - 일정시간마다 수행
// clearInterval() - setInterval 강제 삭제
var i = 0;
// var setI = setInterval(function(){
//                 console.log('i: ', i);
//                 // (i>=5)? i=0: i++; 0~5 반복문(인디케이터에서 활용가능)
//                 i++;
//                 if(i > 20){
//                     clearInterval(setI);
//                 }
//             }, 500);


// ---------------------------------------------------------


// 생성자함수(객체 생성시에 호출되어 메모리 생성과 동시에 객체 데이터를 초기화)
// instance : 추상회 개념 객체를 실제 구현

// 날짜함수
var date = new Date(); // new가 붙으면 함수형태를 객체로 변환하여 사용할 수 있게 함
console.log(date);
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(year, month, day);


// ---------------------------------------------
// 내장함수 - js에 있는 함수, 기본형태 그대로 사용할 수 있도록 만들어진 함수
// 원시함수 - 생성자함수, js를 기본구성하는 함수, 형타입을 구성하게하는 최소한의 세팅, 만들어져있는 기본 개념을 담은 함수
// Number(), String(), Boolean(), Function(), Object(), Array()

// 생성자함수 - 원함수를 그대로 사용하지않고 객체로 변환하여 사용하는 함수(첫글자 대문자)


//instancd - 함수를 객체로 변환 처리(this와 new는 짝꿍)
var fn = function(){};
var Fn2 = function(a, b){
    this.name = a;
    this.age = b;
}
Fn2.prototype.middle = 'lee';

var afn = new Fn2('xido', 10); // { name:'xido', age:10 }
console.log(afn.name);
console.log(afn.middle);

var ul = document.querySelector('ul'); // getElementsByTagName 쿼리보다 먼저 사용되던 것, 쿼리 작동안되면 겟엘리먼트 써야함 
var li = ul.querySelectorAll('li');
var li2 = ul.children; // childNodes
console.log(li, li2);

// 유사배열 : li 요소를 단순 나열하여 배열로 처리, 객체로 모은 형식
// 객체이지만 배열처럼 순서로 값을 뽑아낼 수 있음
var arr = ['a', 'b', 'c'];
var arr2 = { 0:'a', 1:'b', 2:'c' };