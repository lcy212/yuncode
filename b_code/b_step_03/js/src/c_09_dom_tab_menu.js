// c_09_dom_tab_menu.js

// 시나리오
// 탭메뉴를 클릭하여 해당 순번에 맞는 내용 나타나게 만들기
// 1. .tab_title_inner 내부의 li를 클릭하여 순서 파악하기
// 2. .tab_content_inner 내부에 있는 순서에 맞는 .tab_content_part 나타나게 하기
// 3. display처리는 해당 순번의 li와 .tab_content_part에 각각 .on을 첨부하여 처리한다
// 4. 선택되지 않은 요소는 .on을 해제한다
// button이 갖고있는 기본기능은 해제한다


// 기본변수 -----------------------------------------------------------
var contentBox = document.querySelector('#contentBox');
var titleInner = contentBox.querySelector('.tab_title_inner');
var titleInnerPart = titleInner.querySelector('ul');
// var titleList = titleInnerPart.querySelectorAll('li'); 방법 1
var titleList = titleInnerPart.children;               // 방법 2 - 유사배열 형태
var titleArr = [].slice.call(titleList);               // 순번을 파악해야해서 배열로 바꿔줌

var contentInner = contentBox.querySelector('.tab_content_inner')
var contentPart = contentInner.querySelectorAll('.tab_content_part');

var indexCheck = 0;     // 순번을 저장하는 변수
var optionName = 'on';  // class이름을 지정하는 변수


// 기본 추가기능 -------------------------------------------------------
// html에서 .on을 작성하지않고 js에서 첨부해주는 방식
titleArr[indexCheck].classList.add(optionName);    
contentPart[indexCheck].classList.add(optionName); 


// 함수 ----------------------------------------------------------------


// 이벤트처리 ----------------------------------------------------------
titleArr.forEach(function(element, index){               // 배열의 순번파악을 위해 forEach 사용
  var titleBtn = element.querySelector('button');        // 또는 element.children[0]
  titleBtn.addEventListener('click', function(event){
    event.preventDefault();
    // console.log(this.parentNode); 또는 (element). this : li 내부 button, parentNode : 부모값 li

    /* 
    1. 기존의 순번을 파악해서 제거    
    titleArr[indexCheck].classList.remove(optionName);    // 기존 순번의 타이틀에서 .on을 제거한다 (새로고침 전)
    contentPart[indexCheck].classList.remove(optionName); // 기존 순번의 내  용에서 .on을 제거한다 (새로고침 전)

    indexCheck = index;                                 // 현재(클릭한) 순번을 변수에 넣는다(새로고침)
    titleArr[indexCheck].classList.add(optionName);     // 클릭한 순번의 타이틀에 .on을 첨부한다 
    contentPart[indexCheck].classList.add(optionName);  // 클릭한 순번의 내  용에 .on을 첨부한다 
    */

    /* 
    2. 모든 요소에 있는 .on을 제거한 후 해당 순번에만 .on을 삽입 --> 권장하지않는방식
    titleArr.forEach(function(el){ el.classList.remove(optionName); });    // 모든 타이틀에서 .on 제거
    contentPart.forEach(function(el){ el.classList.remove(optionName); }); // 모든 내  용에서 .on 제거

    indexCheck = index;                                 // 현재(클릭한) 순번을 변수에 넣는다(새로고침)
    titleArr[indexCheck].classList.add(optionName);     // 클릭한 순번의 타이틀에 .on을 첨부한다 
    contentPart[indexCheck].classList.add(optionName);  // 클릭한 순번의 내  용에 .on을 첨부한다 
    */

    //  3. 해당 순번에 맞는것(선택된것)에 .on을 삽입하고 그외에는(선택되지않은것) 모두 .on를 제거
    indexCheck = index;
   
    titleArr.forEach(function(el, idx){
    // idx !== 선택한 순번 ? 선택하지않은 순번 --> .on 제거  : 선택한 순번 --> .on 삽입;
      (idx !== indexCheck) ? el.classList.remove(optionName) : el.classList.add(optionName);
    });
    contentPart.forEach(function(el, idx){
      (idx !== indexCheck) ? el.classList.remove(optionName) : el.classList.add(optionName);
    });

  });// titleBtn
});

// forEach를 사용하지 않고 for문을 수행하는 경우 클로저를 이용하여 처리
for(var i=0; i<titleArr.length; i++){
  (function(j){
    titleArr[j].children[0].addEventListener('click', function(evt){
      evt.preventDefault();
      console.log( j );
    });
  })(i);
}
// 클로저()  : 자바스크립트의 유효범위를 정할때 주로 사용
// 외부에서 발생한 기능을 내부에서 처리할 때, 외부의 변수의 인자값의 접근으로인한 변수 스코프를 끊어버리는 역할을 하여,
// 변수 i의 값이 선순환 될때 최종값을 가르키는 것을 방지하기 위한 처리로 외부에서의접근과, 수행되는 값을 일부 제한을 둠

