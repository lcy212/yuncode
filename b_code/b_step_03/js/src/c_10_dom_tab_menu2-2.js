// c_10_dom_tab_menu2-2.js

// 시나리오
// 2021년 div 생성 및 내부엔 이벤트 내용 담기 <div class="year_part"></div>
// 1. 0year_part는 .content_inner의 뒤가 아닌 앞에 생성한다
// 2. .year_part와 동시에 h3 생성 <h3>2021년도 이벤트</h3>
// 3. h3 뒤에 ul 생성 <ul class="event_particle"></ul>
// 4. ul 내부에 li 생성 및 기능에 따르는 추가요소 정리
      // <a href="" data-id="">
      //   <h4 class="event_title"></h4>
      //   <p class="event_narration"></p>
      //   <dl class="date"><dt class="blind">기간</dt><dd></dd></dl>
      //   <dl class="event_check success"><dt>이벤트 진행 상태</dt><dd></dd></dl>
      // </a>
// 5. 내부에 들어가는 요소의 내용을 별도의 객체(data)로 생성하여 담을 수 있게 처리
// 6. 상황처리에 맞는 조건문을 이용해 추가기능 제작
// 7. li 내부의 a 클릭 시 모달창이 나타나게한다(추후 추가 데이터를 불러와서 적용)

// data
var eventData = { 
                  heading: '2021년 이벤트', 
                  eventList: [       
                    // 제목, 내용(선택), 기간(시작일-종료일), 진행여부(plan, play, end, stop), 추가데이터주소, 적용이미지(background)
                    {
                      title:"spring event",
                      content:"신년맞이 행사",
                      date:"2021.02.04 - 2021.02.21",
                      status:"end",
                      morePath:"../data/y21-0201.json",
                      bgImg:"../multi/img/event/bg_01.png"
                    },
                    {
                      title:"spring event2",
                      content:"싱그러운 봄을 위한 세일 이벤트",
                      date:"2021.03.04 - 2021.0405",
                      status:"end",
                      morePath:"../data/y21-0201.json",
                      bgImg:"../multi/img/event/bg_02.png"
                    },
                    {
                      title:"summer flaver",
                      date:"2021.07.15 - 2021.07.30",
                      status:"play",
                      morePath:"../data/y21-0201.json",
                      bgImg:"../multi/img/event/bg_03.png"
                    }
                  ] 
                };


// 변수
var EVENT_INSERT_CODE =  '<a href="" data-id="">\
                          <h4 class="event_title"></h4>\
                          <p class="event_narration"></p>\
                          <dl class="date"><dt class="blind">기간</dt><dd></dd></dl>\
                          <dl class="event_check success"><dt>이벤트 진행 상태</dt><dd></dd></dl>\
                        </a>' 
var elEventBox = document.querySelector('#eventBox');
var elContentInner = elEventBox.querySelector('.content_inner');
var yearPartList = eventData.eventList;
var partLen = yearPartList.length;
var i = 0;



// 함수

// 요소 생성 및 class 추가하는 함수
// var fnMake = function(el, name){
//   var mkEl = document.childElement(el);
//   if(!!name) { mkEl.setAttribute('class', name); }
//   return mkEl;
// }

// 이벤트 날짜 기준으로 순서 뒤집기
eventData.eventList.reverse();

// li 내부의 내용을 각각 설정하는 함수
var fnFixContent = function(parentElement, data){
  var elParent = parentElement;

  // data요소 내부에 들어있는 property: title, content(option), date, status(select), morePath(외부주소), bgImg(배경)
  var elH4 = elParent.querySelector('.event_title');
  var elP = elParent.querySelector('.event_narration');
  var elDate = elParent.querySelector('.date > dd');
  var elEventCh = elParent.querySelector('.event_check');
  var elEventDd = elEventCh.querySelector('dd');
  var elLink    = elParent.querySelector('a');

  elH4.innerText = data.title;
  (data.content !== undefined) ? elP.innerText = data.content :  elP.remove();
  elDate.innerText = data.date;    

  //
  switch (data.status) {
    case 'plan':
      elEventCh.classList.add('plan');
      elEventDd.innerText = '준비중';
      break;
    case 'play':
      elEventCh.classList.add('play');
      elEventDd.innerText = '진행';
      break;
    case 'end':
      elEventCh.classList.add('end');
      elEventDd.innerText = '종료';
      break;
    case 'stop':
    default:
      elEventCh.classList.add('stop');
      elEventDd.innerText = '진행중지';
  }

  //morePath
  elLink.setAttribute( 'data-href', data.morePath );
  elLink.style.backgroundImage = 'url(' + data.bgImg + ')';
  elLink.style.backgroundColor = 'transparent';
};





// 기능
  // div, h3, ul 생성 및 삽입
  var mkYearPart = document.createElement('div');         // div 생성
  mkYearPart.setAttribute('class', 'year_part')           // div에 class 추가
  elContentInner.prepend(mkYearPart);                     // content_inner 앞에 div 삽입

  mkYearPart.innerHTML = '<h3>'+ eventData.heading +'</h3>' // html에 h3 태그 첨부
  var elYearPartH3 = mkYearPart.querySelector('h3'); // h3 선택
  var mkEventParticle = document.createElement('ul');// ul 생성
  mkEventParticle.setAttribute('class','event_particle');  // ul에 class 추가
  elYearPartH3.after(mkEventParticle);    // h3 뒤에 ul 삽입
  var elEventParticle = elContentInner.querySelector('.event_particle'); // ul 선택

  // 이벤트 및
  // li(목록) 생성 및 삽입
  yearPartList.forEach(function(data, index){
    var mkLi = document.createElement('li');
    mkLi.innerHTML = EVENT_INSERT_CODE;
    elEventParticle.append(mkLi);
  
    fnFixContent(mkLi, data);
  });



// 첨부
// el     : 요소 선택 변수(element)
// mk     : 요소 생성 변수
// ck     : 단순 값 판단 변수
// fn     : 함수 선택 변수
// Pascal : 생성자 함수
// _      : 임시 지역변수
// 대문자 : 'string;
//        : 기타
// append-prepend, before-after, next-prev
