
console.clear();

// 형타입
// 1. 숫자 : 값을 더하면 계산됨
// 2. 문자 : 깂을 더하면 연결됨
// 3. 논리 : 내용 비교 후 맞으면 true 아니면 false
// 4. undefined : 존재하지만 값이 없을때
// 5. null
// 6. 객체, 배열
// 6-1. 배열 : 단순 목록 나열[]
// 6-2. 객체 : 속성명 : 값으로 존재하는 내용을 나열{}
// 7. 함수 : 선언식, 표현식, 즉시실행함수 등. function(){} 형태, 호출위해 이름 필요
// 7-1. 함수에 이름 다는 방법 : 변수명 = function(){}
// 7-2. 함수 return : 최종 결론도출
// 8. 스코프(범위) : 변수가 사용할 수 있는 범위 - 전역/지역

var a = '2021년';
var b = '11월';
var c = '04일';
var dot = '.';
var date;
    date = parseInt(a) + dot + parseInt(b) + dot + '0' + parseInt(c)
var iFn = function(i){
    return parseInt(i);
};
date = iFn(a) + dot + iFn(b) + dot + '0' + iFn(c) 

console.log( date );

// ---------------------------------------

var user = function(a){
    var go = '님 오늘도 고생하셨어요!';
    return a + go;
};

console.log( user('이름') ); // xx님 오늘도 고생하셨어요!

var ran = parseInt(Math.random()*3);

console.clear();

var content = [
    '오늘도 고생하셨어요!',
    '힘내세요!',
    '내일도 또 다시!'
]

// var content2 = [];
// content2[0] = '힘내세요';

var userFn = function(data){
    var random = Math.random()*3;
    var int = parseInt(random);
    var plusText = data + '님 ' + content[int];
    return plusText;
}
var userRel = userFn('me');
console.log( userRel );


// ---------------------------------------------

var wrap = document.getElementById('wrap');
var p = document.createElement('p');
p.innerText = userRel;
wrap.append(p);

console.clear();

// -----------------------------------------------

var variable = '이것은 변수입니다.';
document.write('이것은 변수입니다.');
document.write(variable);

// var 식 =(n)번째 광고내용이 바뀌는 식;
// var indicatorNumber = 1;
// 인디케이터를 클릭하면, 클릭한 인디케이터가 '몇번째'인지 파악하여,
// 변수 indicatorNumber에 순번을 담아 식 indicatorNumber을 수행


var ar = [5,8,3,4]
console.log(ar[2]);

var fnCall = function(){
    console.log('game Go');
};

fnCall();

var fnCall2 = function(){
    return 'game';
}
fnCall2();

// -------------------------------------------------------

console.clear();

var a = 5
var b = 2

var dic = [];

var sum = function(a,b){
    // console.log(a + '+' +  b + '=' + (a + b));
    var c = a + b;
    var rel = a + '+' +  b + '=' + c;
    dic.push(rel);
    return rel;
}
console.log( sum(a, b) ); // 'a + b =' 값

var minus = function(a,b){
    // console.log(a + '-' +  b + '=' + (a - b));
    var c = a - b;
    var rel = a + '-' + b + '=' + c;
    dic.push(rel);
    return dic;
}
console.log( minus(a, b) ); // 'a - b =' 값

var mul = function(a,b){
    // console.log(a + '*' +  b + '=' + (a * b));
    var c = a * b;
    var rel = a + 'x' + b + '=' + c
    dic.push(rel);
    return rel;
}
var m = mul(4,7);
console.log ( m ); // 'a * b =' 값

var divide = function(a,b){
    // console.log(a + '/' +  b + '=' + Math.floor( a / b));
    var c = parseInt(a/b);
    var rel = a + '/' + b + '=' + c + ' 몫'
    var c2 = a % b;
    var rel2 = a + '%' + b + '=' + c + '나머지'
    var relPlus = rel + ', 나머지' + c2
    dic.push(relPlus);
    return relPlus;
}
var d = divide(7, 5);
console.log ( d ); // 'a / b =' 정수값, 'a % b =' 값

var svg = function(a,b){
    // console.log(a + '+' +  b + '/' + '=' + (a + b) / 2);
    var c = (a + b) / 2;
    var rel = '(' + a + '+' + b + ')' + '/' + 2 + '=' + c;
    dic.push(rel);
    return rel;
}
var s = svg(5, 6);
console.log ( s ); // 'a + b / 2 =' 값

// -------------------------------------------
// var dic = []; 각각 집어 넣기
// 함수 수행할때마다 return값을 배열에 담기 = 계산기 히스토리처럼 만들기
// 각각 dic.push(rel); 추가

// dic[0] = sum(5,6);
// dic[1] = minus(5,6);
// dic[2] = mul(5,6);
// dic[3] = divide(5,6);
// dic[4] = svg(5,6);

sum(5,6);
minus(5,6);
mul(5,6);
divide(5,6);
svg(5,6);


console.log( dic );

