// c_01_dom_sample_01.js


// 1. 버튼 클릭 -> 메뉴 나타남
// 2. 버튼 클릭 -> 메뉴 사라짐

// --------------------------------------
// 1. 버튼 클릭 -> 메뉴 나타남
// 1-1. 버튼 : .navbar-toggler -> var navToggleBtn = document.querySelector('.navbar-toggler');
// 1-2/ 클릭 : 선택자 클릭(addEventListener) - navToggleBtn.addEventListener('click',function(event){});
// 1-3. 메뉴 : id="navbarSupportedContent" -> document.querySelector('#navbarSupportedContent');

var navToggleBtn = document.querySelector('.navbar-toggler');
var navbarSupportedContent = document.querySelector('#navbarSupportedContent');

navToggleBtn.addEventListener('click',function(event){
  // 1-4 수행
});