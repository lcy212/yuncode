// b_10_js_remind_01-1.js


var i = 0;

console.log('console.log는 작업중간, 연산과정상 필요한 결과물을 확인한다');
console.log('개발자모드에서만 확인 가능');

// ;를 붙이는 위치
// 1. 변수 선언/수정 끝
// 2. 함수 호출 끝
// 3. 식 종료 () ? : ;

// -------------------------------------------
// 형타입

// 1. 숫자----------------------------------------------
var aNum = 3; // 문자
var bNum = 3+3; // 6 (숫자)
var cNum = typeof(3); // number

// 연산 : 자기자신(+=, -=, /=, *=, %=)

var a = 10;
console.log( a + 5 ); // 15
console.log( a + '5' );  // 105
console.log( a + 'a' ); // 10a
console.log(parseInt(a + 'a') ); // 'a'를 숫자로 변환 10

a += 5;
a = a + 5;

a = parseInt(a % 3);
console.log(a);

// 삼항연산
(a > 2)? (a = 10): (a = 20);
console.log(a);
console.log(a !== 20);

// 값 출력
var ar = ['a', 'b'];
console.log(ar); // 배열로 출력
document.write(ar); // 값만 출력

// 2. 문자 ------------------------------------------
var aSt = '3'; // 문자
var bSt = '3'+3; // 33 (문자)
var cSt = typeof('3'); // string

// 숫자를 문자로 변환
var b = a + '';
var c = a.toString();
console.log(b+1, c+1); // 문자인지 확인

// 3. boolean : true/false --------------------------

// 4. undefined / null ------------------------------
var aUn;
console.log(aUn);

// 5. 객체( [], {} ) --------------------------------
var a = [];
var b = {};
console.log(a.constructor);

var arr = [1,2,3,4,5,6,7,8,9]; // 순서가 있는 값
var obj = {'a':1, 'b':2, 'c':3}; // 순서가 없는 값

console.log(arr[4]);
console.log(obj.b, obj['b']);

// 6. 함수 ------------------------------------------
var funFn1 = function(){
    return 1;
}
function funFn2(){
    return 1;
};
funFn1;
funFn2;

var fn = function(a){
    return a + b;
};
var fnCon = fn(arr[3]);
console.log(fnCon);

// --------------------------------------------------
// if()else{}
// switch(){}
// for(){}

var lunch = '돈까스';
if(lunch === '짜장면'){
    console.log('짜장면 먹으러 갑시다');    
}else if(lunch === '볶음밥'){
    console.log('볶음밥 먹으러 갑시다');
}else if(lunch === '삼겹살'){
    console.log('삼겹살 먹으러 갑시다');
}else{
    console.log(lunch + '먹으러 갑시다');
}

var switchN = 1;
switch(switchN){
    case 1:
        data = '마우스 왼버튼을 클릭하였습니다.'
        break;
    case 2:
        data = '마우스 오른버튼을 클릭하였습니다.'
        break;
    case 3:
        data = '마우스 휠버튼을 클릭하였습니다.'
        break;
    case 4:
        data = '마우스 측변버튼을 클릭하였습니다.'
        break;
    default:
        data = '마우스 기타 다른버튼을 클릭하였습니다.'   
}
console.log(data);

var arr2 = [1,2,3,4,5,6,7,8,9,10,20,50,70]
for(var j=0; j<10; j++){
    console.log('j:', j,'-',arr2[j]);
}

// [].forEach(function(각 요소 하나씩, 순서){})
arr2.forEach(function(arg, index){
    console.log(arg, arr2[index]);
});

console.log(obj);
for (var k in obj){
    console.log(k, obj[k]);
}

// ---------------------------------------------
var an = [1,3,4];
var na = [1,3,4];
console.log( an === na ); // false 값은 같지만 주소가 다름

var n = 5;
var u = 5;
console.log( n === u ); // true 값이 같음

for(var l=0; l<3; l+=1){
    console.log(an[l] === na[l]); // true 값이 같음
}

var nna = na; // 값 복사(깊은 복사)
console.log(nna === na);