
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
    var go = (Math.random('님 오늘도 고생하셨어요!', '님 힘내세요!', '님 내일도 또 다시!' ));
    return a + go;
};

console.log( user('이름') ); // xx님 오늘도 고생하셨어요!
