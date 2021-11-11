// b_05_js_condition.js


// switch (매개변수){
//     case 조건값1:
//         조건값과 매개변수가 일치하면 수행
//     break;
//     case 조건값2:
//         조건값과 매개변수가 일치하면 수행
//     break;
//     default:
//         위 조건들이 일치하지 않으면 수행
// }

var rel = true;
var d= [];

switch (rel) {
    case true:
        d.push('true 1');
        break;
    case false:
        d.push('false 1');
        break;
    default:
        d.push('end');
}
console.log( d );


var num = 1;
var data =[];
var atmFn = function(num){
    switch (num) {
        case 1:
            data.push('현금입금');
            atmFn(2);                        // 재귀함수
            break;
        case 2:
            data.push('현금 확인');
            break;
        case 3:
            data.push('타계좌 송금');
            atmFn(2);
            break;
        case 4:
            data.push('통장 삭제');
            break;
        default:
            data.push('대출');
    }
};

atmFn(1);
console.log( data );


// ---------------------------------------------
console.clear();

//a: 편의점에서 물건을 살경우 1. 물건을 고른다. 2. 카드를 낸다. 3. 카드 결제를 한다.           4. 물건, 카드를 돌려받는다. 5. 내역을 확인한다.
//b: 편의점에서 공병을 팔경우 1. 물건을 건넨다  2. 카드를 낸다. 3. 카드 입급을 받는다.         4. 카드를 돌려받는다.       5. 내역을 확인한다.
//c: 편의점에서 환불다는 경우 1. 물건을 건넨다. 2. 카드를 낸다. 3. 카드 입금을 받는다.(취소)   4. 카드를 돌려받는다        5. 내역을 확인한다.
//d: 편의점에서 결제안될 경우 1. 물건을 고른다. 2. 카드를 낸다. 3. 결제 에러가 발생한다.       4. 카드를 돌려받는다.       5. 내역을 확인한다.

var storeList = [];
var i = 0;
// ------------------------------------------

var setFn = function (selector) {
  var userStep = [];
  var storeSelectFn = function (selector) {  
    // 함수 내부에 함수 생성 후 호출 = 클로저 = 람다식 : 외부에 노출안됨, 재귀함수 기능(내부에서 자신의 기능을 여러번 호출)
    switch (selector) {
      case 'a':// 물건을 살경우
        storeSelectFn('send');
        userStep.push('3. 카드 결제를한다.');
        storeSelectFn('return');
        break;
      case 'b':// 공병을 팔경우 
        storeSelectFn('send');
        userStep.push('3. 카드 입급을 받는다.');
        storeSelectFn('return');
        break;
      case 'c':// 환불
        storeSelectFn('send');
        userStep.push('3. 카드 입금을 받는다(취소처리).');
        storeSelectFn('return');
        break;
      case 'd':// 결재가 안될때
        storeSelectFn('send');
        userStep.push('3. 결제 에러가 발생한다. ');
        storeSelectFn('return');
        break;
      case 'send':
        userStep.push('1. 물건을 건넨다.', '2. 카드를 낸다.');
        break;
      case 'return':
        userStep.push('4. 카드를(물건) 돌려받는다.', '5. 내역을 확인한다.');
        break;
      default:
        userStep.push('사용기록 없음.');
    }
    return userStep;
  };
  storeSelectFn(selector);
  // console.log(userStep);
  return userStep;
}; // setFn();

// ------------------------------------------
var storeFn = function (selector, user) { // selector:방문자 행동(a, b, d, d), user:방문자 이름
    var userCheck = {}; // 나올 결과물 {name:'방문자 이름', content: [방문자가 한 행동]};
    var userStep = [];  // 행동 나열(a, b, d, d)

    // switch 부분(함수 호출 결과 담기, 배열값으로 도출) ------------------------------
    userStep = setFn(selector);

    // 방문자 기록 부분(i, storeList는 외부에서 지속되게 처리하는 변수 ----------------
    i += 1;
    userCheck.name = user || 'noNameUser_' + i;  // 방문자 이름 작성
    userCheck.content = userStep;                // 방문자의 행동 순서
    storeList.push(userCheck);                   // 방문자 기록 저장
    return userCheck;

};// storeFn();

// 결과 도출 ------------------------------------------
console.log(storeFn('a'));           // a 행동을 한 익명의 방문자
console.log(storeFn('b', 'user2'));  // b 행동을 한 user2라는 이름의 방문자
console.log(storeFn('c'));           // c 행동을 한 익명의 방문자
console.log(storeFn('d', 'user4'));  // d 행동을 한 user4라는 이름의 방문자
console.log(storeList);              // 방문자 기록 확인(이름, 행동)



// ---------------------------------------------------

console.clear();

var box2 = function(){
    var list = 'def';
    return list;
}

var box1 = function(){
    var list = 'abc';
    // console.log(list);
    var sam = box2(); // box2의 return값
    console.log(list, sam);
}

box1();


// ---------------------------------------------------

console.clear();

var box2 = function(){
    var list = ['1', 4, 5];
    return list;
}

var box1 = function(){
    var list;
    // console.log(list);
    list = box2();
    var sam = list; // box2의 return값
    sam.push('789');
    console.log(list, sam);
}

box1();