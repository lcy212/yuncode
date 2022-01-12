// c_10_dom_tab_menu2.js

// 시나리오
// 1. 이벤트페이지에서 해당년도 클릭시 그에 맞는 data목록이 나타나게 만들기

// 기초자료
// 변수선택 : 연도선택(.title_inner, li, button), data목록(.content_inner, .year_part)
// class 추가/제거 : .title_inner li, .content_inner > .year_part에 'on' 추가/제거
// class 추가/제거 방식 : 선택순번 외 제거
// 선택자 사용법 : querySelector
// 순서를 선택/할당하는 방식 : forEach


// 변수
var eventBox = document.querySelector('#eventBox');
var titleInner = eventBox.querySelector('.title_inner');
var titleUl = titleInner.children[0];
var titleList = titleUl.children;
var titleLiEl = [].slice.call(titleList);

var contentInner = eventBox.querySelector('.content_inner');
var contentYear = contentInner.querySelectorAll('.year_part');
var optionIndex = 0; // 순번을 저장하는 변수
var optionName = 'on';



// 기능
// 1번. 순번에 맞는 탭메뉴에 .on 추가(기본값) - 3번 기능과 중복되서 삭제
// titleLiEl[optionIndex].classList.add(optionName);
// contentYear[optionIndex].classList.add(optionName);

// 2번. forEach로 순환하며 모든 요소에서 .on 제거 - 3번 기능으로 넘어가기전 기초단계 학습
// titleLiEl.forEach(function(data){ data.classList.remove(optionName) });
// contentYear.forEach(function(data){ data.classList.remove(optionName) });

// 3번. forEach로 순환하며 현재 선택한 순번외의 요소에서 .on 제거 - titleLiEl과 contentYear가 겹치기 때문에 함수로 만들고 기능
// titleLiEl.forEach(function(data, idx){  
//   if(idx !== optionIndex){
//     data.classList.remove(optionName);  
//   }else{
//     data.classList.add(optionName);    
//   }
// });


// 함수
// 선택한 순번이 아닌 요소에서 .on을 삭제하고, 선택한 요소에 .on을 추가하는 함수
var classSwitchFn = function(element){
  element.forEach(function(data, idx){  
    if(idx !== optionIndex){
      data.classList.remove(optionName); // data = element[idx] 선택한 순번이 아닌 요소에서 .on를 삭제
    }else{
      data.classList.add(optionName); // 선택한 순번의 요소에 .on 추가(optionIndex가 0으로 설정되어있어서 기본값 0에 .on이 추가됨)
    }
  });
};

// 함수 사전 수행 - 기본값 0에 .on 추가
classSwitchFn(titleLiEl);
classSwitchFn(contentYear);

// 이벤트
titleLiEl.forEach(function(element, index){
  var liBtn = element.children[0] // 외부에 알려지지않아도되서 내부에 버튼 변수 생성한것
  liBtn.addEventListener('click', function(event){
    event.preventDefault();
    optionIndex = index; // 클릭한 순번을 변수에 넣는다
    classSwitchFn(titleLiEl);   // 이벤트에 함수를 넣음으로써 선택한 순번의 내용 표시
    classSwitchFn(contentYear); // 이벤트에 함수를 넣음으로써 선택한 순번의 내용 표시
  })
})

