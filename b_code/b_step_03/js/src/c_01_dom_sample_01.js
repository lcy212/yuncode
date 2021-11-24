// c_01_dom_sample_01.js


// 1. 버튼 클릭 -> 메뉴 나타남
// 2. 버튼 클릭 -> 메뉴 사라짐

// --------------------------------------
// 1. 버튼 클릭 -> 메뉴 나타남
// 1-1. 버튼 : .navbar-toggler -> var navToggleBtn = document.querySelector('.navbar-toggler');
// 1-2/ 클릭 : 선택자 클릭(addEventListener) - navToggleBtn.addEventListener('click',function(event){});
// 1-3. 메뉴 : id="navbarSupportedContent" -> document.querySelector('#navbarSupportedContent');
// 1-4. 나타나기 : html.classname="action" -> classname 추가, (none -> block)
// 1-5. 기능 수행 전 확인사항 : action의 유무 - classList.contains('action')
//                              해당버튼의 고유기능 해제 - event.preventDefault()

var navToggleBtn = document.querySelector('.navbar-toggler');
var navbarSupportedContent = document.querySelector('#navbarSupportedContent');

navToggleBtn.addEventListener('click',function(event){
  event.preventDefault(); // navToggleBtn이 기존에 갖고있던 기능을 해제함
  var checkClassName = 'action' // class이름을 일괄로 변경할 수 있게 변수 생성
  var isAction = navbarSupportedContent.classList.contains(checkClassName); // action이 있는지 확인하여 true, false로 확인
  if(!isAction){ // action이 없으면 넣고, 있으면 빼라는 조건문
    navbarSupportedContent.classList.add(checkClassName);
  }else{
    navbarSupportedContent.classList.remove(checkClassName);
  }

});