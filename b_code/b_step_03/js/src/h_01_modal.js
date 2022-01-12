// h_01_modal.js

// 1. content_btn을 누르면 해당 순번의 modla_area가 나타남
// 1-1. 나타날때 modal_bg의 opacity가 점점 진해짐
// 1-2. modal_message가 나타난 후 슬라이드방식으로 p가 나타남
// 2. close_btn을 누르면 modal_area가 사라짐

(function($){
  // console.log($.fn.jquery);

  // 변수
  var conBox = $('#contentBox');
  var conUl = conBox.children('ul');
  var conLi = conUl.children('li');
  var conBtn = conLi.children('.content_btn');

  var modal = conBox.find('.modal_area');
  var modalList = modal.children('div');
  var modalP = modalList.children('p');
  var closeBtn = modalList.children('.close_btn');
  var modalBg = modalList.children('.modal_bg');

  var index;

  // var pH = getComputedStyle(modalP).height;
  // var pHResult = parseInt(pH);
  var timed =  500;
  var slideH;


  //이벤트

  var slideUpFn = function(baseHeight){
    var originH = baseHeight;
    var setH = 0;

    modalP.style.display = 'block'; // display:block으로 만든다
    modalP.style.height = setH; // 높이값을 0으로 만든다
  
    slideH = setInterval(function(){ // 일정시간마다 아래 내용을 처리한다
      if(setH < originH){ // 목표 높이값보다 작은동안
        setH += 1; // 높이값은 1씩 증가한다
        modalP.style.height = setH + 'px'; // 높이값 단위 px를 붙여준다
      }else{
        clearInterval(slideH); // 작업 종료
      }
    }, timed/1000);
  };

  conBtn.on('click', function(event){
    event.preventDefault();
    index = $(this).parent().index();
    modal.addClass('on');
    modalList.eq(index).addClass('on');
    modalP.eq(index).addClass('on');

  });// conBtn.on

  closeBtn.on('click', function(event){
    event.preventDefault();
    index = $(this).parent().index();
    modal.removeClass('on');
    modalList.eq(index).removeClass('on');
  });// closeBtn.on

})(jQuery);

