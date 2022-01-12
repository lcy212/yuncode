// b_07_js_condition3.js

var rel = !true;
if(rel) {
    console.log('값은 참입니다.');
} else {
    console.log('값은 거짓입니다.');
}

var count = 10;
if(count <= 5){
    console.log('숫자는 5 이하입니다.');
} else if(count > 10){
    console.log('숫자는 10 초과입니다.');
} else {
    console.log('숫자는 5 초과 10 이하입니다.')
}

var count2 = 30;
if(count2 >= 10) {
    console.log('10보다 큰 수');
} else if(count2 >= 20) {
    console.log('20보다 큰 수');
} else {
    console.log('다른수');
}

// -----------------------------------------------------------
// 100이하의 숫자를 입력하면 

var count3 = 10;
if(count3 < 10) {
    console.log('00'+count3);
} else if(count3 < 100) {
    console.log('0'+count3);
} else {
    console.log(count3);
}

// 풀이 ------------------
var n = parseInt(Math.random() * 100) + 1;
var num;
if(n > 0){
    if(n < 10) {
        num = '00' + n;
    } else if(n < 100) {
        num = '0' + n;
    } else {
        num = n;
    }
} else {
    num = "양수로 작성하세요."
}
console.log(num);

console.log(n, '확인', '-----------------------------------');
var parS = n.toString();
var nn = parS.padStart(10, '0');
var cut = nn.slice(-3);
var num2 = cut;
console.log(num2);

// ------------------------------

console.clear();
 
// 중첩함수 ((n+n)/2)+5
// a호출 -> b호출 ->  c호출 ->  c해결 ->  b해결 ->  a해결 -> 결과 도출

var a = function(n){
    var b = function(i){
        var c = function(j){
            var r = j + j;
            return r;
        } // c
        var r2= c(i) / 2;
        return r2;
    } // b
    var r3 = b(n) + 5;
    return r3;
}; // a
console.log(a(4));


// 재귀
// 클로저 ((n+n)/2)+5
// n = i = j
// var Fn = function(i){}     ->    return(function(i){
// Fn(10)                           })(10)

var aFn = function(n){
    return(function(i){
        return( function(j){
            var r = j + j;
            return r;
        })(i) / 2;
    })(n) + 5
};
console.log(aFn(4));