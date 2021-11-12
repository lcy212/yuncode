// b_08_js_repeat1.js


// while(){} -----------------------------------------
var i = 0;
while(i < 10){
    console.log(i)
    i+=1;
}

// do{} while() --------------------------------------
var j = 0;
do{
    console.log(j);
    j+=1;
}while(j < 5)


// for ------------------------------------------------

// 예시
// var w = 0;
// while(w < 20){
//     console.log('w: ', w);
//     w += 2;
// }

var y= 0;
for( ; y < 20; ){
    console.log('y: ', y);
    y += 2;
}

// for(var z = 0; z < 20; z +=2 ){
//     console.log('z: ', z)
// }
// console.log(z); 내부에서 함수가 선언되어서 console로 확인 못함

var z = 0;
for(; z < 20; z +=2 ){
    console.log('z: ', z)
}
console.log(z);

console.clear();

// 2021년 기준으로 과거 50년 도출 1. console 2. document

var year =2021;
var a = 0;
for(; a <=50 ; a+=1){    
    console.log(year+'년');
    year-=1;
}

// 풀이
var yy = 2021;
var text = '년';
var targetY = 2021-50;
for(; yy>=targetY; yy -= 1){
    console.log(yy+text);
    document.write(yy+text);
}

// 생성자 사용법
// 1. 첫글자가 대문자
// 2. 생성자 그대로 사용하지않고 함수를 복제하여 'new' 연산자를 붙여 사용
// 3. 함수 중 기존에 존재하는 함수는 내장함수, 생성자함수도 내장기능 있음

// 날짜 관렴 함수 : Date(); , getFullYear() : 현재년도라 생각하면될듯
var date = new Date();
// console.log( date.getFullYear());
var yy = date.getFullYear();
var text = '년';
var targetY = yy-50;
var ul = document.querySelector('.test');
var li;

for(; yy>=targetY; yy -= 1){
    li = document.createElement('li');
    li.innerText = yy+text;   
    ul.append(li);
}

// 요소 생성법
// 1. document.create(요소이름);
// 2. 생성된 요소에 기능 첨부
// 3. 생성된 요소를 (실행시키기위해)선택된 요소에 담기 : append()