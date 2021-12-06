// c_12_dom_list_modal.js

// 시나리오
// 1. li 가져와서 여러개 생성

// data
var data = [
  { title:'title_01', content:"lorem text _ 01", dataLink:'data_01.json' },
  { title:'title_02', content:"lorem text _ 02", dataLink:'data_02.json' },
  { title:'title_03', content:"lorem text _ 03", dataLink:'data_03.json' },
  { title:'title_04', content:"lorem text _ 04", dataLink:'data_04.json' },
  { title:'title_05', content:"lorem text _ 05", dataLink:'data_05.json' },
  { title:'title_06', content:"lorem text _ 06", dataLink:'data_06.json' },
  { title:'title_07', content:"lorem text _ 07", dataLink:'data_07.json' },
  { title:'title_08', content:"lorem text _ 08", dataLink:'data_08.json' },
  { title:'title_09', content:"lorem text _ 09", dataLink:'data_09.json' },
  { title:'title_10', content:"lorem text _ 10", dataLink:'data_10.json' },
  { title:'title_11', content:"lorem text _ 11", dataLink:'data_11.json' },
  { title:'title_12', content:"lorem text _ 12", dataLink:'data_12.json' },
  { title:'title_13', content:"lorem text _ 13", dataLink:'data_13.json' },
  { title:'title_14', content:"lorem text _ 14", dataLink:'data_14.json' },
  { title:'title_15', content:"lorem text _ 15", dataLink:'data_15.json' },
];

// 변수
var elConBox = document.querySelector('#contentBox');
var elCardPart = elConBox.querySelector('.card_part');

var i = 0;
var dataLen = data.length; // for문에서 data의 양만큼 카드를 만들기위해

var elCardModal;

// 기능
/* 방법 1. element(요소)로 인식
var mkLi = document.createElement('li');
mkLi.innerHTML = '<a href="#">내용내용</a>';
*/
// 방법 2. html 복사하여 사용하기
// li 복사해오고 기존값 삭제하기
var elLiOrigin = elCardPart.children[0];         // li(복사용)를 변수에 저장
elLiOrigin.remove();              // 기존 li 삭제(실제 사용이 아닌 복사용 li이기때문에 삭제)

// modal 복사해오고 기존값 삭제하기
var elModal = elConBox.querySelector('.card_modal');
elModal.remove();

// 함수 수행
var fnMakeCard = function(n){
  var cloneEl = elLiOrigin.cloneNode(elLiOrigin);  // 저장해둔 li를 복사하여 변수에 저장
  cloneEl.children[0].innerText = data[n].content; // li의 첫번째 자식인 a에 배열 data의 n번째 content를 text 형식으로 넣어라
  cloneEl.children[0].title = data[n].title;
  cloneEl.children[0].setAttribute('data-link', data[n].dataLink); // 속성 data-link를 만들어서 dataLink 값을 넣어라
  elCardPart.append(cloneEl);                      // 복사하여 저장한 li를 ul안에 삽입
};

// 모달 지우기 함수
var fnRemoveModal = function(e){
  e.preventDefault();
  elCardModal.remove();                                 // 모달 지우기
};

// li 클릭하면 모달 생성 - 모달 뜨게하기 - 닫기버튼 생성 
var fnClickLi = function(e){
  e.preventDefault();
  // var dataLink = this.getAttribute('data-link'); // data-link 값을 가져와라(만든 속성이라 getAttribute를 사용해야함)

  elConBox.append(elModal); // contentBox에 모달넣기
  elCardModal = elConBox.querySelector('.card_modal'); // 모달 선택하여 변수에 넣기
  var elCloseBtn = elCardModal.querySelector('button');    // 닫기 버튼 선택하여 변수에 넣기
  elCardModal.classList.add('on');                         // 모달에 .on 넣기
  elCloseBtn.addEventListener('click', fnRemoveModal);       // 닫기 버튼에 이벤트 넣기(모달지우는 함수)

};

// 함수 기본 수행
for(; i < dataLen; i+=1){
  fnMakeCard(i);
};


// 추가변수
var elLi = elCardPart.querySelectorAll('li > a');

// 이벤트
elLi.forEach(function(element, index){              // 순번 파악
  element.addEventListener('click', fnClickLi);
});

