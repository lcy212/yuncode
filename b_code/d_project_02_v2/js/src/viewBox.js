// viewBox.js

// 슬라이드 기능
// 1. 마지막 요소를 복제하여 첫번째 요소 앞에 위치시킨다
// 2. ul의 크기를 증가시킨다(800% -> 900%)
// 3. li의 크기를 감소시킨다(100%/8 -> 100%/9)

// 다음버튼 시나리오
// 1. 다음버튼 클릭시 UL이 현재위치 기준 왼쪽으로 100% 이동 (-100% * i) - 반복(애니메이션 기능)
// 2. 마지막요소가 되면 1번 앞 마지막요소의 복제요소로 점프이동(애니메이션 없음) 후 다시 애니메이션 기능 첨부

// 다음버튼 시나리오
// 1. 이전버튼 클릭시 UL이 현재위치 기준 오른쪽으로 100% 이동 (100% * i) - 반복(애니메이션 기능)
// 2. 첫번째 요소가 되면 1번 앞 복제요소로 애니메이션 이동 후 마지막요소로 점프이동(애니메이션 없음) 후 다시 애니메이션 기능 첨부


// 변수 -----------------------------------------

const elViewBox = document.querySelector('#viewBox');

const slideNext = elViewBox.querySelector('.next');
const slidePrev = elViewBox.querySelector('.prev');

const viewArea = elViewBox.querySelector('.view_area');
const elSlideLi = viewArea.querySelectorAll('li');
const elSlideCvt = [].slice.call(elSlideLi);             // 배열로 만들기

let SLIDE_COUNT = 0;
let TIME_OPTION = 500;  
let PERMISSION = true;

const slideLen = elSlideLi.length;  // 복제 전 슬라이드 수


// 1. 마지막 요소를 복제하여 첫번째 요소 앞에 위치시킨다
const elSlideLast = elSlideCvt.at(-1);                // 마지막 요소 선택
const cloneSlide = elSlideLast.cloneNode(true);       // 마지막 요소 복제(true - 내부까지 복제)
viewArea.prepend(cloneSlide);                         // 복제요소를 첫번째 요소 앞에 배치

// 2. ul의 크기를 증가시킨다(800% -> 900%)
const ulStyle = viewArea.style;
ulStyle.width = ((slideLen + 1) * 100) + '%';         // (800% -> 900%)

// 3. li의 크기를 감소시킨다(100%/8 -> 100%/9)
const elSlideLiRe = viewArea.querySelectorAll('li');  // 복제요소때문에 li가 하나 늘어났기때문에 다시 선택해야함
const elSlideLiReCvt = [].slice.call(elSlideLiRe);    // 배열로 만들기

elSlideLiReCvt.forEach((li, idx) => {                 // li가 여러개이기때문에 forEach로 스타일을 설정해줘야함
  li.style.width = 100 / (slideLen + 1) + '%'         // (100%/8 -> 100%/9)
});

// 추가 : 첫번째 요소가 보이게 1칸 이동
ulStyle.position = 'relative';
ulStyle.left = 0;
ulStyle.marginLeft = '-100%';

ulStyle.transition = `left ${TIME_OPTION}ms linear`; // 스르륵


// 함수 -----------------------------------------------------------------------------------------------------------------
// setIimeout 간략화 함수
const fnDelay = async (ms = 0) => {         // 일정시간(ms)을 직접 입력할것임(기본값 0), 순서대로 진행하려면 async가 필요하고 return await와 세트
  return await new Promise(resolve => {     // await : 기다렸다가 수행하라
    setTimeout(() => {resolve()}, ms)
  });
}

// 다음버튼 함수
const fnAniSlide = async () => {                       // async를 함수안에 넣으려면 함수도 async를 사용해야함
  if(SLIDE_COUNT >= slideLen){                         // 마지막 요소에서 첫번째 요소로 이동하는 if문
    SLIDE_COUNT = 0;
    ulStyle.transition = null;                         // 마지막요소에서 첫번째 요소 앞 복제된 마지막요소로 이동할때엔 효과가 없어야함
    ulStyle.left = 100 + '%';                          // 복제된 마지막 요소로 이동
  }
  await fnDelay();
  ulStyle.transition = `left ${TIME_OPTION}ms linear`; // 복제된 마지막 요소로 이동 후 다음 요소를 위해 효과를 넣음
  ulStyle.left = ( -100 * SLIDE_COUNT) + '%';          // n번째에 맞는 -n00%값이 입력됨
  await fnDelay(TIME_OPTION + 200);                    // 이동효과가 끝난 후에 true가 되어야 정상작동됨
  PERMISSION = true;
}

// 이전버튼 함수
const aniPrevSlide = async () => {
  ulStyle.left = ( -100 * SLIDE_COUNT ) + '%'; 
  await fnDelay(TIME_OPTION);
  if(SLIDE_COUNT <= -1){
    SLIDE_COUNT = slideLen - 1;
    ulStyle.transition = null;
    ulStyle.left = ( -100 * SLIDE_COUNT ) + '%';  
  }
  await fnDelay(200);
  ulStyle.transition = `left ${TIME_OPTION}ms linear`;
  PERMISSION = true;
};  

// 이벤트 처리 ----------------------------------------------------------------------------------------------
slideNext.addEventListener('click', (e) => {
  e.preventDefault();
  if(PERMISSION){
    PERMISSION = false;
    SLIDE_COUNT += 1;
    fnAniSlide();
  };
});

slidePrev.addEventListener('click', (e) => {
  e.preventDefault();
  if(PERMISSION === true){
    PERMISSION = false;
    SLIDE_COUNT -= 1;
    aniPrevSlide(); 
  };
});