// c_02_dom_make_navi_02.js

// 버튼클릭하면 하위메뉴가 나타거나 사라지게 만들기


// 변수 -------------------------------------------------------
var dropBtnSelector = document.querySelector('.drop_btn');
var dropBtn = dropBtnSelector.querySelector('button');
var subMenu = document.querySelector('.sub_menu');

// 전달받은 요소의 모든 CSS 속성값을 담은 객체를 회신
var subMenuStyle = getComputedStyle(subMenu);
// console.log(subMenuStyle.display);


var displayStateFn = function(selector){
  // 선택자의 display 상태값을 기본 html에서 가져오지만 없다면 css 기본값에서 가져오기
  return selector.style.display || getComputedStyle(selector).display;
}
/*
var displayState;
if(!!selector.style.display){ / !!는 값이 없음을 도출하려 사용했음
  displayState = getComputedStyle(selector).display;
}else {
  displayState = selector.style.display
}
*/

// 이벤트 -----------------------------------------------------
dropBtn.addEventListener('click', function(event){
  event.preventDefault();
  var state = displayStateFn(subMenu);
  console.log(state);
  (state === 'none')? subMenu.style.display = 'block': subMenu.style.display = 'none';
})


