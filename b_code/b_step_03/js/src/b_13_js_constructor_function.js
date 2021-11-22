// b_13_js_constructor_function.js

// var UserSetting = function(){};

// var user = {};
// user.name = 'xido';
// user.age= 20;
// user.email = 'xido@naver.com';
// console.log(user);

var UserSetting = function(userName, userAge, userEmail){
  this.name = userName;
  this.age = userAge;
  this.email = userEmail;
}
console.log(this.location);
window.console.log('console 결과')
this.console.log('console 결과');

var user1 = new UserSetting('xido', 30, 'xido@gmail.com'); // 인스턴스 처리 : 기존 함수 기능 복제 및 객체로 변환
console.log(user1);
console.log(user1.email)

var user2 = new UserSetting('puppy', 10);
console.log(user2.email);

UserSetting.prototype.group = '가족 명단 체크'; // 생성자에 담길 내용에 대해 별도로 처리되는 기본 객체

console.log(user1);

// 연산되는지 확인
UserSetting.prototype.trueCheck = function(){
  return this.age / 2;
}
console.log(user1.trueCheck()); 

console.clear();
console.log(this);

var ObjFn = function(a){
  this.alpha = a;
}
var alpha = new ObjFn('abccd');
console.log(alpha.alpha);

// -------------------------------------------------------------------
console.clear();

var SetMenu = function(brand, type, narr, link){
  this.brand = brand;
  this.type = type;
  this.narr = narr;
  this.link = link;
} // { this.name = name }

//SetMenu에 기본 내장되어야하는 값(prototype에 들어가 있는 값), 배열의 기능 만들어줌
SetMenu.prototype.title = '겨울에 어울리는 음료';

var coffeeList = [];

var drink1 = new SetMenu('nesspresso', 'coffee', '겨울에 따뜻하게 마실 수 있는 커피', 'http://nesspresso.com'); // SetMenu의 기능을 복사, 객체형식으로 값 집어넣기

coffeeList.push(drink1);
console.log(coffeeList);
console.log(coffeeList[0].title); // 배열의 기능을 넣어서 숫자로 불러올 수 있음

// ---------------------------------

// 유사 배열을 강제로 배열 고유기능을 처리할 수 있도록 해주는 것이 prototype
// 본래 갖고있지않는 형식을 강제로 수행하기위해 설정을 줘야하는데 이를 prototype에 내장시켜 처리 하도록 만든다

var arr = [
  push = 1,
  unshift = 'data'
]
console.log(arr.push(1)); //3
console.log(arr.unshift('data')); //4

var ListFn = function(type, color){ // 유사배열 생성 [ type, color ]
  this.type = type;
  this.color = color;
};

ListFn.prototype.store = 'anyang'; // 강제로 배열 고유기능을 부여 [ type, color, store ]

var coffee = new ListFn('americano', 'brown'); // 인스턴스 처리 : 기존 함수 기능 복제 및 객체로 변환 { type:'americano', color:'brown' } prototype : store:anyang 
console.log(coffee);

// this의 개념, 기능
// 1. window 
// 2. 생성자 함수로 만들어진 객체 
// 3. function(){} 일반함수 - window이지만 use strict(엄격한 모드)로 전환시 undefined
// 4. 메서드 처리시 객체로 처리되어있는 변수명
// 5. 이벤트 핸들러 - 이벤트 주체가 되는 선택자

var n = 0;
var addFn = function(){
  // this.n = 50; // use strick 모드를 사용하면 일반함수내의 this는 undefined를 가르킨다
  n = 50;
  n++;
};
console.log(n);
console.log(window.n);
addFn();
console.log(n);
console.log(window.n);

// -------------------------------------
var lastName = 'lee';
var firstName = 'yoon';

var useFile = {
  firstName : 'yoon',
  lastName : 'lee',
  job : 'nothing',
  subjob : 'nothing2',
  fullName : function(){
    return this.lastName + ' ' + this.firstName;
  }
}
console.log(useFile.fullName());

// -----------------------------------------------------
//call, apply, bind
// call, apply 같은 기능이지만 call 은 value, apply는  객체로 담아진다

var ar1 = [1, 2];
ar1.push('바나나', '키위');
Array.prototype.push.call(ar1, '오렌지', '수박');
console.log( ar1 );

var obj = {
  string:'xido',
  reName : function(){
    console.log('name: ', this.string);
  }
};
obj.reName();

var obj2 = {
  string:'sub name'
};
console.log(obj2.string);
obj.reName.call(obj2); // call을 쓰면 변환/대체?됨

// ----------------------------------------------------
var listFn = function(){
  // return arguments; 유사배열로 만들어짐
  return Array.prototype.slice.call(arguments); // 배열
};
var makeList = listFn('test', 'file', 1,2,5,7,10);
console.log(makeList);

// -------------------------------------------------------
var btn = document.querySelector('#btn');
btn.addEventListener('click',function(){
  console.log(this); // this = #btn
});