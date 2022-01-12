// b_10_js_remind_01-2.js

// console.log(i);

var ar1 = ['딸기', '포도', '바나나', '오렌지'];
var cAr = [];

// arFn의 기능은 원하는 배열 arr의 값을 복사하기위한 사전작업 처리
var arFn = function(arr){
    var arEx = [];
    arr.forEach(function(data, index){
        arEx[index] = data
    });
    return arEx;
};
cAr = arFn(ar1); // 배열 ar1의 값을 arFn으로 arEx에 복사하고 cAr 배열에 붙여넣는다

ar1.push('메론');
console.log(ar1);
console.log(cAr);

var car = ['pony', 'bmw', 'granger', 'audi'];
var car2 = arFn(car);
console.log(car2);

console.clear();


/*
var obt = {'a': 1, 'b': 2 };
var cObt = {};
for( var prop in obt ){
    // console.log(prop)
    cObt[prop] = obt[prop];
}
obt.c = 3;
console.log(obt, cObt);
*/


var ob1 = {
    'frutis' : ['딸기', '포도', '바나나', '오렌지'],
    'drink' : ['coffee']
 };
var cOb1 = {};

// for(var prop in ob1){
//     if(ob1[prop].construcor === Array){
//         cOb1[prop].forEach(function(data,index){ // ob1 객체안의 배열(값) 복사
//             cOb1[prop] = [];
//             cOb1[prop][index] = data
//         })
//     }else{
//         cOb1[prop] = ob1[prop]; // ob1 객체 자체를 복사
//     }
// }

for(var prop in ob1){
    if(ob1[prop].construcor === Array){ // 객체의 값이 배열인지
        cOb1[prop] = arFn(ob1[prop]); // 객체의 값이 배열이면 배열을 복사
    }else{
        cOb1[prop] = ob1[prop]; // 배열이 아니면 객체 자체를 복사
    }
}

ob1.car = 'niro';
ob1.frutis.push('메론');
console.log(cOb1);

// -------------------------------------------------
console.clear();

var originAr = {
    'fruits' : ['딸기', '포도', '바나나', '오렌지'],
    'drink' : 'coffee',
    'ade' : { 'ice' : '레몬에이드', 'hot' : 'nothing' }
};

var textAr = JSON.stringify(originAr); // JSON형식을 보이는 그대로 문자화 처리
var copyAr = JSON.parse(textAr); // JSON형식의 객체/배열로 전환
// JSON.stringify : JSON형식을(객체/배열)을 보이는 그대로 stringify(문자화)하겠다
// JSON.parse : JSON형식(객체/배열)로 parse(변환)하겠다

// json형식이란? JavaScript Object Notation 자바스크립트의 객체 형식으로 작성하는 형식
// 1. property, value 모두 쌍따옴표 처리
// 2. 주석 사용 X
// 3. 객체와 배열의 집합

originAr.more = '추가';
originAr.fruits.push('감');

console.log( copyAr );
console.log( originAr );
