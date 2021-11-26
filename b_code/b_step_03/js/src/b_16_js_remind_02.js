// b_16_js_remind_02.js
var i;
var n ;
var arr;
var arr2;
var arrOrigin;
var arrClone ;
var plusData;
// 일반변수, 참조변수

console.log( fnTest([5,6,7,8,9,50]) );


// 일반변수는 값(결과물) 그 자체를 가르키는 것
i = 0;
n = i;
    i = 10;
    n = i;
    i = 'text';
console.log( i, n );

// 참조변수는 값이아닌 주소를 가르키는 것 - [], {}
arr = ['하나','둘'];
arr2 = arr;
    arr[0] = '셋';
    arr[1] = '넷';
console.log( arr, arr2 );

// 위와 동일한 참조변수 인것 같지만, 
// 실제로는 새로운 참조변수를 생성

arrOrigin = [1,2,3];
arrClone = arrOrigin;
    arrOrigin = ['하나','둘','셋'];
console.log( arrOrigin, arrClone);

//------------------------------------------------------

// Hoist현상은, 
// 1. 변수 이름이 상단으로 올라가서 존재하는 것처럼 처리
// 2. 기명 함수(함수선언식)로 된 것은 변수선언보다 우선순위로 끌어올려지는 처리

function fnTest(data){
  return data.reduce(function(a,b){
    return a + b;
  });
}; 
console.log( fnTest(arrClone) );
console.log( fnTest(arrClone) );

// ---------------------------------------

console.clear();

var arrNumber = [90, 5, 30, 60, 450, 250, 3, 60, 8];
// 문제 1. 위 배열에 들어가는 값 중 가장 작은 값을 구하는 방법 2가지 이상
// 문제 2. 위 배열에 들어가는 값 중 가장 큰 값을 구하는 방벙 2가지 이상
// 문제 3. 위 배열에 들어가는 값 대신 정수형의 1~3자리 까지의 랜덤 숫자 10개를 담아 문제 1번처럼 도출

/* 내가 풀이한 내용
// 문제 1.
var min = 999;
var arrLen = arrNumber.length;
for(var i = 0; i <= arrLen; i++ ){
  if(min > arrNumber[i]){
    min = arrNumber[i];
  }
}
console.log(min);


// 문제 2.
var max = 0;
for(var j = 0; j <= arrLen; j++ ){
  if(max < arrNumber[j]){
    max = arrNumber[j];
  }
}
console.log(max);


// 문제 3.
var ranArr=[];
for(var k = 0; k<=9; k++){
  ranArr[k]=parseInt(Math.random()*1000);
};
console.log(ranArr);

var ranMin = 999;
var arrLen = ranArr.length;
for(var r = 0; r <= arrLen; r++ ){
  if(ranMin > ranArr[r]){
    ranMin = ranArr[r];
  }
}
console.log(ranMin);
*/

// 문제 1.

// 첫번째 방법. Math.min(숫자값);
// 배열을 숫자값자리에 넣기 위하여
// 1. Array.prototype.call(?,1,2,3,4), 2. Array.prototype.apply(?, [1,2,3,4,5]);
var minResult = Math.min.apply(null,arrNumber);
// console.log(minResult);

// 두번째 방법. [].sort()
var arrNumber2 = [90, 5, 30, 60, 450, 250, 3, 60, 8];
// function(앞의 값, 뒤의 값){ 
  // return a-b// 단순히 마이너스하여 결과값도출이 아니라, a와 b를 비교하는 것. 계산해서 결과가 음수면 그대로, 양수면 뒤집기 }
var sortMin = arrNumber2.sort(function(a, b){ return a - b; }); // 최소값이 첫번째로 오게되는 식
console.log(sortMin[0]); // 맨 앞이 최소값이라서 [0]


// 세번째 방법. for
var arrNumber4 = [90, 5, 30, 60, 450, 250, 3, 60, 8];
var arr4Len = arrNumber4.length;
var minNumber = arrNumber4[0];
for(i=0; i < arr4Len; i+=1){
  if(minNumber > arrNumber4[i]){
    minNumber = arrNumber4[i];
  }
}
console.log('for:', minNumber);

// 문제 2.
// Math.max(숫자값);
var maxResult = Math.max.apply(null, arrNumber);
console.log(maxResult);

// 두번째 방법. [].sort()
var arrNumber3 = [90, 5, 30, 60, 450, 250, 3, 60, 8];
var sortMax = arrNumber3.sort(function(a, b){ return b - a; }); // 최대값이 첫번재로 오게되는 식
console.log(sortMax[0]); // 맨 앞이 최대값이라서 [0]
var last = sortMin.length - 1; // 최소값 찾는 식에서 마지막이 최대값임 단, length 1부터 시작하기때문에 -1을 해줘야 마지막값이 제대로 나옴
console.log(sortMin[last]);


// 문제 3.
var arrRan = [];
var random;
for(var i=0; i<10; i++){
  random = Math.floor(Math.random()*1000);
  arrRan.push(random);
}


// -----------------------------------------------------------------------------




for(var g = 2; g < 10; g++){
  for(var gg = 1; gg < 10; gg++){
    var gobResult = g * gg;
    console.log(g + ' x ' + gg + ' = ' + gobResult);
  };
};

var loop1 = function(i){
  var n;
  for(n=1; n<10; n+=1){
    console.log( i + 'x' + n +'=' +(i*n)  ) 
    if(i !== n){
      loop1(i);
    }
  }
};

// for(i=2; i<10; i++){
//   console.log( i+'단 ---------');
//   loop1(i);
// }
i=0;
// loop1(i=1);


// ______________________________________

// 500 -> 250  
// 0.1초마다 1씩 빠지는 숫자를 카운팅
// setInterval : 일정시간마다 조건이되면, 끊어주어야한다. : clearInterval
// setTimeout  : 정해진 시간 뒤에 1회성

// 1: 
// 0.1초 : 100
var startNum = 500;
var timed    = 10;
var endNum   = 250;
var intervalFn;
// ---------
var btn = document.querySelector('.btn');
var pSpan = document.querySelector('p>span');
pSpan.innerText = 'text작성';
var goCheck = true;
// ----------
/*
var countFn = function(start){
  var start = start;

  if(goCheck){
    goCheck = false;

    intervalFn = setInterval(function(){
      pSpan.innerText = start;
        start -= 1;
        if(start <= endNum){
          pSpan.innerText = endNum + '처리 완료';
          clearInterval(intervalFn);
          goCheck = true;
        }
    }, timed);
  }
};

btn.addEventListener('click', function(e){
  e.preventDefault();
  countFn(startNum);
});
*/


// ------------------------------------------
var intervalCountFn = function(startNum){
  var countNum = startNum;
    setTimeout(function(){
      pSpan.innerText = countNum; // 글쓰기
      countNum -= 1;
      if(countNum > endNum){
        intervalCountFn(countNum);
      }else{
        pSpan.innerText = countNum + ' 숫자 달성!!!';
      }
    }, timed); // timeout
};

btn.addEventListener('click', function(e){
  e.preventDefault();
  intervalCountFn(startNum);
});


