// c_10_dom_modal.js

// 시나리오
// 1. li 카드를 선택하면 모달창이 나타나게 만들기
// 2. 카드 클릭시 모달창을 띄울 요소를 생성
// 3. 모달창이 서서히 나타나게하기
// 4. 모달창이 나타나면 모달창의 닫기 버튼에 자동으로 focus 처리
// 5. 모달창의 닫기버튼을 클릭하면 기존의 li 카드 위치로 돌아가 카드에 focus 처리

// 변수
var MODAL_CODE      =  '<div class="modal_part">\
                            <h4>modal title</h4>\
                            <div class="modal_particle"><div class="inner_sample">sample</div></div>\
                            <div class="modal_close"><button type="button">닫기</button></div>\
                          </div>\
                          <div class="modal_bg"></div>\
                        </div>';

var elEventBox       = document.querySelector('#eventBox');
var elContentInner   = document.querySelector('.content_inner');
var elYearPart       = elContentInner.querySelector('.year_part.on')
var elYearLi         = elYearPart.querySelectorAll('li a');
var elYearLiSelector = [].slice.call(elYearLi);

// var elModal          = elEventBox.querySelector('.event_modal'); // html 작성되어있을때
// var elModalCloseBtn  = elModal.querySelector('.modal_close button'); // html 작성되어있을때
var elModal;
var elModalCloseBtn;
var OPTION_CHECK     = 'on';
var cardIndex        = 0;

// 기능

// 함수
// 모달 사라지게하기, 클릭했던 li 위치로 돌아가기
var fnModalClick = function(){
  elModalCloseBtn.addEventListener('click', function(e){
    e.preventDefault();
    elModal.classList.remove(OPTION_CHECK);
    elYearLiSelector[cardIndex].focus();
  })
}


// 이벤트
// 모달 나타나게하기, 닫기버튼에 focus
elYearLiSelector.forEach(function(element, index){
  element.addEventListener('click', function(e){
    e.preventDefault();
    cardIndex = index;

    var makeEl = document.createElement('div');
    makeEl.setAttribute('class', 'event_modal');
    makeEl.innerHTML.after(makeEl);
    elModal          = elEventBox.querySelector('.event_modal');
    elModalCloseBtn  = elModal.querySelector('.modal_close button');

    elModal.classList.add(OPTION_CHECK);
    elModalCloseBtn.focus();
    fnModalClick();
  });
});
// 닫기 버튼을 인식못함 -> 함수화 처리 -> 내부에서 생성시 기능을 처리할 수 있도록 함




/* html이 작성되어있을떼
// 모달 나타나게하기, 닫기버튼에 focus
elYearLiSelector.forEach(function(element, index){
  element.addEventListener('click', function(e){
    e.preventDefault();
    cardIndex = index;
    elModal.classList.add(OPTION_CHECK);
    elModalCloseBtn.focus();
  });
});

// 모달 사라지게하기, 클릭했던 li 위치로 돌아가기
elModalCloseBtn.addEventListener('click', function(e){
  e.preventDefault();
  elModal.classList.remove(OPTION_CHECK);
  elYearLiSelector[cardIndex].focus();
})
*/

// 첨부