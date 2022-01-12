// event.js

// 1. .con 클릭 -> 모달 나타나게 하기
// 2. button 기본기능 없애기
// 3. 모달기능 처리 : display:block, opacity:0 -> opacity:1로 서서히 변경되게 처리

// 변수
var contentBox = document.querySelector('#contentBox');
var conLi   = contentBox.querySelectorAll('li');
var conArr = [].slice.call(conLi);

var modal  = document.querySelector('.content_area_modal');
var closeBtn = modal.querySelector('.close_btn');


conArr.forEach(function(element, index){
  var conBtn = element.querySelector('button');
  conBtn.addEventListener('click', function(event){
    event.preventDefault();
    conArr[index].classList.add('on');
    modal.classList.add('on');
  })
})
