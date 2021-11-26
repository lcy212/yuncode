// c_04_dom_blind_btn.js

// jQuery식 버튼 클릭시 슬라이딩으로 display 처리
/*
(function($){
  // .btn 내부에 있는 버튼을 클릭하여 내용이 나타나거나 사라지게 만들기

  var btn         = $('.btn');
  var closeBtn    = btn.children('.close');
  var openBtn     = btn.children('.open');
  var open2Btn    = btn.children('.open2');
  var contentArea = $('.content_area');

  closeBtn.on('click', function(event){
    event.preventDefault();
    contentArea.slideUp(1000); // 괄호안에 시간 입력 가능
  });

  openBtn.on('click', function(event){
    event.preventDefault();
    contentArea.slideDown(); // 괄호안에 시간 입력 가능
  });

  // open2Btn.on('click', function(event){
  //   event.preventDefault();
  //   contentArea.stop().slideToggle(); // stop을 안쓰면 연타했을때, 그 수만큼 계속 작동함
  // });




})(jQuery);
*/

// 자바스크립트
var btn         = document.querySelector('.btn');
var closeBtn    = btn.querySelector('.close');
var openBtn     = btn.querySelector('.open');
var open2Btn    = btn.querySelector('.open2');
var contentArea = document.querySelector('.content_area');

var conH = getComputedStyle(contentArea).height;
var conHResult = parseInt(conH);
var timed = 500;
var slideH;

var slideUpFn = function(height){
  var setH = height;
  slideH = setInterval(function(){
    setH -= 1;
    if(setH > 0){
      contentArea.style.hight = setH + 'px';
    }else {
      clearInterval(slideH);
      content_area.style.display = 'none';
    }
  }, timed / 100);
};


closeBtn.addEventListener('click', function(event){
  event.preventDefault();
  slideUpFn(conH);

})