// c_10_dom_tab_menj_2-1.js


/* 기본사항
// 시나리오
// 1. html 요소 생성 및 지정 위치에 삽입 : createElement, innerHTML, append
// 2. 생성 및 첨부를 한 세트로 묶어 반복문 수행
// 3. 별도의 data를 기반으로 해당 자료에 맞게 각각 첨부

// 기능 설명
// append : 지정된 선택자 내부에 필요한 요소(내용)를 기존 내용에 덧붙이는 기능 latestYear.append('<ul></ul>'); - 태그와 텍스트를 넣을 수 있다
// appendChild : 'Node' 형식으로 구성된 내용만 담을 수 있다(element) - 태그만 넣을 수 있다
// createElement : 요소를 생성하는 기능 - 1회성(덧붙이려면 append 사용)

// class 추가방법
// 선택자.className = 'class';  // 기존 내용 지우고 대체
// 선택자.classList.add('class명'); // 기존 내용 뒤에에 추가
// 선택자.setAttribute('class', 'class명') // 기존 내용 지우고 대체(class외 다른 속성도 가능)
*/

// li요소에 삽입할 객체 리스트
var data = [
  {
    id:'event_21042', 
    modalPath:'../event/y21042_data.json', 
    title:'summer flaver',
    narr:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eaque?',
    date:'2022. 01. 05 - 2022. 02. 15',
    eventStatus:'ready'          // true/false/ready
  }
];

// 선택자 변수
var contentInner = document.querySelector('.content_inner');
var yearPart = contentInner.querySelectorAll('.year_part');
var latestYear = yearPart[0];


// 기능
// 0. 삽입할 내용
var innerCode = '<a href="#" data-id><h4 class="event_title">제목</h4><p class="event_narration">설명</p><dl class="date"><dt class="blind">기간</dt><dd>날짜</dd></dl><dl class="event_check success"><dt>이벤트 상황</dt><dd>진행예정</dd></dl></a>';


// 1. ul 생성 및 지정위치에 삽입
var makeUl = document.createElement('ul');
makeUl.setAttribute('class', 'event_particle');
latestYear.append(makeUl);                    // 태그만 넣는거라 apendChild 가능
var yearUl = latestYear.querySelector('ul');


// 2. li 5개 생성 및 지정위치에 삽입
var i = 0;
var makeLiLen = data.length;  // [1,2,3,4,5].length 처럼 실제 배열의 개수로 표현
var makeLi;



var innerCode, dataSelect, selectorStatus;
for(; i < makeLiLen; i+=1){

    makeLi = document.createElement('li');
    dataSelect = data[i];

    innerCode = '<a href="'+ dataSelect.modalPath +'" data-id="'+ dataSelect.id +'"><h4 class="event_title">'+ dataSelect.title +'</h4><p class="event_narration">'+ dataSelect.narr +'</p><dl class="date"><dt class="blind">기간</dt><dd>'+ dataSelect.date +'</dd></dl><dl class="event_check"><dt>이벤트 상황</dt><dd>진행</dd></dl></a>';

    makeLi.innerHTML = innerCode;
    yearUl.append(makeLi);
    selectorStatus  = makeLi.querySelector('.event_check');
    selectorStatus.classList.add(dataSelect.eventStatus);
}



// 3. li에 내용 첨부
/*
var selectI = 0;                               // 순번 변수
var eventList = yearUl.querySelectorAll('li'); // 생성된 lil 선택
var selectorLi = eventList[selectI];           // li의 순번 저장
var dataSelect = data[selectI];                // 순번에 해당하는 data 위치 저장

  // 내용을 담을 선택자
  var selectorLink =selectorLi.querySelector('a');
  var selectorH4 = selectorLi.querySelector('.event_title');
  var selectorP = selectorLi.querySelector('.event_narration');
  var selectorDate = selectorLi.querySelector('.date dd'); // 자손 선택
  var selectorStatus = selectorLi.querySelector('.event_check');

  // 선택자에 맞는 내용
  selectorLink.setAttribute('data-id', data[selectI].id );
  selectorLink.setAttribute('href', data[selectI].modalPath );
  selectorH4.innerText = data[selectI].title ;
  selectorP.innerText = data[selectI].narr;
  selectorDate.innerText = data[selectI].date;
  selectorStatus.classList.add(data[selectI].eventStatus);
*/



/* 참고사항
// 가독성 좋지만 여러줄이라 안정성 떨어짐
var innerCode2 = '\
    <button type="button" data-import="../event/y21042_data.json" data-id="event_21042">\
      <h4 class="event_title">summer flaver</h4>\
      <p class="event_narration">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eaque?</p>\
      <dl class="date">\
        <dt class="blind">기간</dt>\
        <dd>2022. 01. 05 - 2022. 02. 15</dd>\
      </dl>\
      <dl class="event_check success">\
        <dt>이벤트 진행 상태</dt>\
        <dd>이벤트 종료</dd>\
      </dl>\
    </button>';


var innerCode3Fn = function (){
  return ( //jsx
    `
    <button type="button" data-import="../event/y21042_data.json" data-id="event_21042">
      <h4 class="event_title">summer flaver</h4>
      <p class="event_narration">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, eaque?</p>
      <dl class="date">
        <dt class="blind">기간</dt>
        <dd>2022. 01. 05 - 2022. 02. 15</dd>
      </dl>
      <dl class="event_check success">
        <dt>이벤트 진행 상태</dt>
        <dd>이벤트 종료</dd>
      </dl>
    </button>
    `
  );
};

// ----------------------------------------------------------------
// 탭메뉴 내용에 필요한 코드 형식 삽입하기

var testWrap = document.querySelector('#test_wrap');
var testList = testWrap.querySelectorAll('li');

testList[0].innerHTML = innerCode;
testList[1].innerHTML = innerCode2;
testList[2].innerHTML = innerCode3Fn();


*/
