// c_08_dom_fade_btn.js

// .card 클릭시 각각의 기능으로 모달창 나타하게하기
// 1. setInterval 이용하여 opacity 처리
// 2. setTimeout 이용하여 opacity 처리
// 3. css-transition 이용하여 opacity 처리

// 순서체크
// 1. .card 내부의 a 클릭 -> 모달 나타나게 하기
// 2. a 기본기능 없애기
// 3. 모달기능 처리 : display:block, opacity:0 -> opacity:1로 서서히 변경되게 처리

// 변수
var newBox = document.getElementById('newBox');
var card   = document.getElementsByClassName('card');
var modal  = document.getElementsByClassName('new_area_modal')[0];
var closeBtnPart = modal.getElementsByClassName('close_btn')[0];


// 공통함수
var displayFn = function(view){     // 상황에 맞게 display를 처리하는 함수를 만든다
  var displayCheck = view || false;  // 입력값이 없으면 기본값은 false
  console.log(displayCheck);
  if(!displayCheck){                // false라면
    modal.style.display = 'block';  // 모달을 block 처리한다
    modal.style.opacity = 0;        // 불투명도를 0으로 설정한다 = 안보임
  }else{                            // true라면
    modal.style.null;               // 설정했던 모든 style을 없앤다
    modal.style.display = 'none';   // 모달을 none 처리한다
  }
};


// 방법 1 setInterval ------------------------------------------------
var intervalBtn = card[0];

// 함수
var intervalFn = function(){             // 다음 내용을 함수로 만든다
  var value = 0;
  var interval;
  interval = setInterval(function(){     // 다음 내용을 일정시간마다 반복하는 함수로 만든다
    console.log( value  );
    value += 1;                          // 변수는 1씩 증가한다

    value <= 100 ?                       // 변수가 100 이하인가?
    modal.style.opacity = value / 100 :  // 맞다면 변수를 100으로 나눈값을 불투명도로 설정하라(%)
    clearInterval( interval );           // 아니라면 함수 수행을 멈춰라
  }, 1);
};

// 이벤트 수행
intervalBtn.addEventListener('click', function(event){
  event.preventDefault();  
  displayFn();  // 기본값 false. 모달 block처리 및 불투명도 0
  intervalFn(); // 모달의 불투명도를 0에서 100%로 만드는 함수를 수행하라
});


// 방법 2 setTimeout ------------------------------------------------
var timeoutBtn = card[1]; // html의 두번째 카드 가져오기

// 함수
var opValue = 0;
var timeoutFn = function(){             // 다음 내용을 함수로 만든다
  opValue += 1;                         // 변수의 값을 1씩 증가시켜라

  setTimeout(function(){                // 다음 내용을 일정시간동안 수행하라
    modal.style.opacity = opValue + '%' // 모달의 불투명도는 변수값%로 지정한다 
    if(opValue <= 100){                 // 변수의 값이 100이하인 동안
      timeoutFn();                      // 함수를 반복하라 -> opValue += 1로 이동
    }
  }, 1);
};

// 이벤트 수행
timeoutBtn.addEventListener('click', function(event){
  event.preventDefault();
  displayFn();   // 기본값 false. 모달 block처리 및 불투명도 0
  timeoutFn();   // 모달의 불투명도를 0에서 100%로 만드는 함수를 수행하라
})


// 방법 3 cssTransition ------------------------------------------------
var cssBtn = card[2];

// 함수
var cssTransitionFn = function(timed){
  var timed = timed || 500; // 시간을 timed로 지정하되 작성안해있으면 기본값 500으로 한다
  modal.style.transition = 'opacity '+ timed +'ms linear'; // 트랜지션을 불투명도에서 'timed'초동안 linear로 설정한다
  setTimeout(function(){     // 일정시간동안 다음의 내용을 처리한다
    modal.style.opacity = 1; // 모달의 불투명도를 1(100%)로 설정한다 = 서서히 100%가 된다
  }, 1);
};


// 이벤트 수행
cssBtn.addEventListener('click', function(event){
  event.preventDefault();
  displayFn();              // 기본값 false. 모달 block처리 및 불투명도 0
  cssTransitionFn(300);     // 모달의 불투명도를 300ms동안 0에서 100%로 만드는 함수를 수행하라
})


// close ----------------------------------------------------

// 함수
var intervalHideFn = function(){         // 불투명도를 0으로 만드는 함수를 만든다
  var style = modal.style;               // 모달의 스타일을 변수로 지정한다
  var value = modal.style.opacity * 100; // 불투명도 %를 떼고 일반 숫자로 만들어 변수로 지정한다
  var interval;
  interval = setInterval(function(){ // 다음내용을 일정시간마다 동작하게 한다
    value -= 1;                      // 불투명도를 1씩 감소시킨다(점점 투명해짐)
    if(value >= 0){                  // 불투명도가 0보다 큰가?
      style.opacity = value / 100;   // 맞다면 불투명도 숫자를 %로 변화
    }else{
      clearInterval(interval);       // 불투명도가 0보다 작은경우 동작을 멈춘다
      displayFn(true);               // 스타일을 없애고 display:none으로 처리한다
    }
  }, 1);
};

// 이벤트
closeBtnPart.addEventListener('click', function(event){
  event.preventDefault();
  intervalHideFn();   // 모달의 불투명도를 100%에서 0으로 만드는 함수를 수행하라
});

// 이슈 : css-transition 기능으로 나타난 효과는 사라질때 갑자기 사라지는 효과가 있으므로,
// opacity가 1이 된 이후에는 css-transition기능을 강제로 삭제처리해야함