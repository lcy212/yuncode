// b_02_js_data_type.js
// 형태입을 파악하는 요소 typeof(literal)

// 숫자(number)
var num = 7;
var num2 = num;
    num = 10;

console.log( num, typeof(num) );
console.log( num2, typeof(num2) );


// 문자(string)
var str = '123';
var str2 = str;
    str = '문자';

console.log( str, typeof(str) );
console.log( str2, typeof(str2) );

var str3 = str2 + 567;

console.log( str3, typeof(str3) );
var str4 = parseInt(str2) + 567;
console.log( str4, typeof(str4) );

console.log (typeof('50.4%'));
console.log (parseInt('50.4% auto')); 
// 첫글자부터 숫자로 변환가능한것까지 숫자화(정수). 첫글자가 숫자가 아니면 NaN이 뜸
console.log (parseFloat('50.4% auto')); 
// 첫글자부터 숫자로 변환가능한것까지 숫자화(소수점이하 포함). 첫글자가 숫자가 아니면 NaN이 뜸
console.log (Number('50.4% auto')); // 문자/숫자 관계없이 모두 숫자로 변환

var nan = NaN; //NaN : not a number. 모두 숫자로 변환하려 시도하지만 안될 때 뜨는 값
console.log( nan, typeof(nan) );


// Math 함수
var n = 5.54;
console.log('올림처리', Math.ceil(n) );
console.log('내림처리', Math.floor(n) );
console.log('반올림처리', Math.round(n) );
console.log('0~1까지의 난수', parseInt(Math.random()*64) );
console.log('절대값', Math.abs(-n) );


// 논리(boolean)
// true / false로 결과 확인 - 결과를 확인하는 검증이 매우 많음
// ! 반대, === 형타입까지 일치하는가....
var bool = true;
console.log ( bool, typeof(bool) );

    console.log('==비교', 1 == "1" );
    console.log('===비교', 1 === "1" );

// 존재하는 값에 !를 붙이면 값이 없다는 의미 - false가 되지만 값이 있느냐 없느냐 판단용도로 쓰려면 !!
console.log(!!n);
console.log(!!0);


// undefined
var und = undefined;
console.log( und, typeof(und) );
var und = 'undefined';
console.log( und, typeof(und) );
var und = undefined + 'result';
console.log( und, typeof(und) );
console.log(true + '값' );


// null
var nul = null;
console.log( nul, typeof(nul) );
// undefined와 null은 값이 없다는 의미의 특수한 형타입의 구조였으나
// 현재는 단순히 값이 누락되었다는 의미로 존재


// object

// 여러 형타입을 담은 복합성이 특징. 참조변수 개념으로 처리
// 일반변수 : 단순 값을 가지는 변수 / 참조변수 : 공간(주소)를 공유하는 변수

// 1. array---------------------------------
var arr = ['키보드', '마우스', '태블릿', '모니터', '노트북', '웹캠']
console.log( arr.constructor === Array );
console.log( typeof(arr) );
console.log( arr[3] );

arr[5] = '마이크';
console.log( arr[5], arr[9] );
arr[9] = '웹캠';
console.log( arr[9], arr );

var arr2 = arr;
console.log( arr2 );
arr[9] = '빼빼로';
console.log( arr );
console.log( arr2 );

var arT = new Array(); // 새 가방 가져옴.
console.log( arT );
arT[0] = '물';
arT[1] = '약';
console.log( arT );

// new Array방식 권장안함 -> []작성 후 바로 수행
var arA = [];
arA[0] = '물';
arA[1] = '약';

// 맨 뒤에 삽입
arA.push('커피');
arA.push('스무디');
arA.push('에이드');

// 맨 앞에 삽입
arA.unshift(5);
arA.unshift(0);
arA.unshift(0000);
console.log( arA );

// 맨 뒤에 삭제
arA.pop();

// 맨 앞에 삭제
arA.shift();
console.log( arA );

// 2. object --------------------------------------------
// 언뜻 보면 배열과 비슷하지만 순서가 없음

var obj = {};
// var objT = new Object();

console.log( obj, typeof(obj) );
console.log( obj.constructor === Object );

obj.apple = 'iphone';
obj.samsung = 'galaxy';
obj.google = "pixel";
obj['농심'] = '너구리';
obj['오뚜기'] = '진라면';
obj['한국 야쿠르트'] = '건국우유';


console.log( obj );
console.log( obj.google );

// 객체를 배열처럼 사용할 수 있음(사용안하는 방법)
var obj2 ={};
obj2[0] = '마이크';
obj2[1] = '펜';
obj2[2] = '텀블러';
console.log( obj2 );


// function
var fn = function(a){
    return 1 + a;
};
// a는 매개변수(parameter), 인수/인자(argment)
console.log ( fn(5) );

var fn2 = function(a,b){
    return a + b;
};
console.log( fn2(1,6) );

var d = 1+6;
console.log(d);

console.log( fn2(4,50) );
console.log( fn2(4,80) );
console.log( fn2(44,80) );

// 함수의 기본형태 : function(){}
// 함수 선언식 : 이름 부여 -> 기명함수 : function 이름 () {}
// 함수 표현식 : 이름 부여X -> 익명함수 : 이름 대신 할당할 변수선언 : var 변수명 = function(){}


console.log( fn3() );

function fn3(){
    return 'test';
}

console.log( fn3() );


var fn4 = function () {
    return 'test2';
}

console.log( fn4() );

console.clear()

// ----------------------------------------------

var x = 'hero'; // 광범위한 범위를 갖고 있는 전역변수
function ckFn(){
    var y = 'xi'; // 해당 함수 내부에서만 동작 가능한 지역변수
    console.log( x, y);
    return y;
}
console.log( x );
ckFn();
var rel = ckFn();
console.log( rel );
// console.log( y );

function ckFn2(){
    x = 'who?';
}

console.log(x); // hero
ckFn2 ();
console.log(x); // who?

// -----------------------------------------------------

function ff(){}
ff()

(function(){})() // 즉시실행함수 : 익명함수의 기다림없이 바로 실행
// 선언과 동시에 실행, 메모리 낭비 감소, 외부에 노출되지않음, 기능을 각각 별도로 사용
(function(){}()) // 즉시실행함수 : 익명함수의 기다림없이 바로 실행
