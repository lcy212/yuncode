// e_02_banner.js


// 시나리오
// 1. 다음버튼 클릭시 li의 다음내용이 나타나게만들기
// 1.1 li의 갯수
// 1.2 class='on'; 여부 - 선택한 요소에 .on을 넣고 나머지 요소에선 .on을 뺀다

// 1.3 순번이 마지막에 가면 처음으로 이동

// 2. 이전버튼을 클릭시 위 기능을 동일하게 수행

// 추가기능
// 선택되어있던 요소 opacity 1-> 0, display:none
// 선택된 요소 display:block




// 변수
const elSlide_01 = document.querySelector('.slide_01');

const elBtnDetail = elSlide_01.querySelector('.view_btn');
const elNext = elBtnDetail.querySelector('.next');
const elPrev = elBtnDetail.querySelector('.prev');

const elViewContent = elSlide_01.querySelector('.view_content');
const elViewConUl = elViewContent.querySelector('ul');
const elViewAddv = elViewConUl.querySelectorAll('li');

const addLen = elViewAddv.length;
const OPTION_CLASSNAME = 'on';
let checkIndex = 0;


// 함수
const fnSiblings = (select, idx = checkIndex) => {
  const otherArr = [];
  select.forEach((element, index)=>{
    if(idx !== index){ otherArr.push(element) }
  })
  return otherArr;
};

// 방법2. 

// 전체 중 선택한 요소를 제외한 나머지 요소(형제)를 선택하는 함수

// 다음버튼클릭시 1씩 카운트업하면서, 선택순번이 아닌경우 on빼라
const fnAddCountType2 = () => {
  (checkIndex < addLen -1) ? checkIndex += 1 : checkIndex = 0;
  elViewAddv[checkIndex].classList.add(OPTION_CLASSNAME);
  fnSiblings(elViewAddv, checkIndex).forEach( (el) => {
    el.classList.remove(OPTION_CLASSNAME);
  });
};
const fnRemoveCountType2 = () => {
  (checkIndex > 0) ? checkIndex -= 1 : checkIndex = addLen -1;
  elViewAddv[checkIndex].classList.add(OPTION_CLASSNAME);
  fnSiblings(elViewAddv, checkIndex).forEach( (el) => {
    el.classList.remove(OPTION_CLASSNAME);
  });
};


// 이벤트 ---------------------------------------------------------------------------
// 다음버튼 클릭
elNext.addEventListener('click', (e) => {
  e.preventDefault();
  fnAddCountType2();
});

// 이전버튼 클릭
elPrev.addEventListener('click', (e) => {
  e.preventDefault();
  fnRemoveCountType2();
});