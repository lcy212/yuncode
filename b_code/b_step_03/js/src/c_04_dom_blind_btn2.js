// c_04_dom_blind_btn2.js

// 자바스크립트
var jsBtn         = document.querySelector('.btn');
var jsCloseBtn    = jsBtn.querySelector('.close');
var jsOpenBtn     = jsBtn.querySelector('.open');
var jsOpenBtn2    = jsBtn.querySelector('.open2');
var jsToggleBtn   = jsOpenBtn2; 
var jsContentArea = document.querySelector('.content_area');
// -----------------------------------------------
var conH = getComputedStyle(jsContentArea).height; // 높이값 가져오기
var conHResult = parseInt(conH); // 가져온 높이값 내림
console.log('h:', conH);
var timed = 500; // 동작 텀 시간
var slideH;
var permission = true;
// jsContentArea.style.display = 'none'; // 처음부터 보이지않게하기위한 처리(css값을 못가져와서 js로 값 확인후 display처리)

// 함수1: 슬라이드기능으로 사라지는 기능 ---------------
var slideUpFn = function(height){
  if(permission){
    permission = false
    var setH = height; // 높이값 가져오기
    // console.log( setH );
    slideH = setInterval(function(){ // 일정시간마다 동작하게함
      setH -= 1; // 스르륵 없어지게 높이값을 1씩 줄임
      if(setH >= 0) {
        jsContentArea.style.height = setH + 'px'; // 0 이상이면  px로 단위 표시
      }else{
        clearInterval(slideH); // 동작을 멈추게 함
        jsContentArea.style = null;
        jsContentArea.style.display = 'none'; // 0 미만이면 보이지않게 처리
        permission = true;
      }
    }, timed/100);
  }
};
// ------------------------------------------
// 함수 샘플:setInterval/setTimeout 슬라이드 기능으로 나타나는 기능 테스트 ---------------
var countFn = function(n){
  // setTimeout : 일정시간 뒤에 한번만 수행
  // setInterval : 일정시간 마다 수행 - clearInterval
  var arr = [2,4,7,10, 20, 30, 50, 90, 432, 654, 777, 963];
  
  var red, green, blue;
  setTimeout( function(){
    red = (Math.floor(Math.random() * 256)).toString(16); // 랜덤으로 rgb를 만들어내는 식
    green = (Math.floor(Math.random() * 256)).toString(16); // 랜덤으로 rgb를 만들어내는 식
    blue = (Math.floor(Math.random() * 256)).toString(16); // 랜덤으로 rgb를 만들어내는 식

    if( red.length   !== 2)  { red   = '0' + red;   }
    if( green.length !== 2)  { green = '0' + green; }
    if( blue.length  !== 2) { blue   = '0' + blue;  }
    console.log( red+green+blue );  
    var randomColor = '#'+red+green+blue;

    // var ram = Math.floor( Math.random()*12 )
    // console.log( arr[ram] );
    jsContentArea.style.backgroundColor = randomColor;
  },500);
};


// 함수2: open버튼 클릭시 사라진 내용을 나타나게 만들기 ----------------------------------
// jsContentArea 상태가 'none' 일때, 'block'으로 처리와 동시에, 
// 기본 높이값을 파악후( conH,conHResult 에서 이미 파악 ) -> 높이 0부터 기본 높이값까지 1씩 추가해서 변동되게 수행
// 필요한 높이만큼 수행되었다면, 더이상 처리할 내용이없으니, style 기능 제거 ( null )
// 단, 기능이 수행되는 중간에 다른 기능을 첨부하지 못하게 제어( permission )

var slideDownFn = function(baseHeight){
  var originH = baseHeight;
  var setH = 0;
  var jsDisplayState = jsContentArea.style.display === 'none'; // 상태 체크

  if(permission && jsDisplayState){ // 열림버튼 동작 중 열림버튼을 다시 눌러도 아무번응없게함
    permission = false;
    jsContentArea.style.display = 'block'; // display:block으로 만든다
    jsContentArea.style.height = setH; // 높이값을 0으로 만든다
  
    slideH = setInterval(function(){ // 일정시간마다 아래 내용을 처리한다
      if(setH < originH){ // 목표 높이값보다 작은동안
        setH += 1; // 높이값은 1씩 증가한다
        jsContentArea.style.height = setH + 'px'; // 높이값 단위 px를 붙여준다
        console.log('높이값변경중:', setH); // 정상작동 확인용
      }else{
        // jsContentArea.style = null; // style기능 제거
        permission = true;
        console.log('높이값 처리 완료'); // 정상작동 확인용
        clearInterval(slideH); // 작업 종료
      }
    }, timed/1000);
  }
};

// --------------------------------------------
// jsCloseBtn 클릭 이벤트
jsCloseBtn.addEventListener('click', function(event){
  event.preventDefault();
  slideUpFn(conHResult);  
});

// jsOpenBtn 클릭 이벤트
jsOpenBtn.addEventListener('click', function(event){
  event.preventDefault();
  // countFn(0); // 함수샘플 구현
  slideDownFn(conHResult);
});



// jsOpenBtn, jsCloseBtn 기능을 모두 수행하는 토글버튼 생성 ---------------
// 첫번째 방법
jsContentArea.classList.add('on'); // class="on" 생성

jsToggleBtn.addEventListener('click', function(event){
  // 첫번째 방법
  // event.preventDefault(); // 버튼에 있던 기능 없앰
  // var onState = jsContentArea.classList.contains('on');
  // if(onState){
  //   // console.log('현재 내용이 보이는 상태입니다.');
  //   slideUpFn(conHResult); // class="on"이 있으면 슬라이드 닫기 수행(jsCloseBtn 기능)
  //   jsContentArea.classList.remove('on'); // class="on" 제거
  // }else{
  //   // console.log('현재 내용이 보이지 않습니다.');
  //   slideDownFn(conHResult); // class="on"이 없으면 슬라이드 열기 수행(jsOpenBtn 기능)
  //   jsContentArea.classList.add('on'); // class="on" 생성
  // }
  
  
  // 두번째 방법
  var viewState = getComputedStyle(jsContentArea).display === 'block';
  (viewState)? slideUpFn(conHResult): slideDownFn(conHResult);
});


