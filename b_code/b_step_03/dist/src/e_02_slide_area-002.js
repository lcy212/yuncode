// e_02_slide_area-002.js

/** 시나리오 - 1 
 * + 가로형슬라이드 구현을 위한 세팅 +
 * 1.1 광고슬라이드 마지막요소를 복제하여 첫번째 요소 앞에 배치
 * 1.2 내부요소의 부모요소의 크기를 기존 값보다 더 크게(400% -> 500%) 설정
 * 1.3 내부 요소들의 크기값을 기준 크기값에맞게 or 갯수로 분할하여 배치(1/4 -> 1/5)
 * 1.4 기본 첫번째 광고가 보이지 않고 복제된 광고가 나타나 있어 1칸만큼 이동하여 배치
 * 1.5 css 처리(nth-child) 에 관한 문제점 해결 - css에서 직접 수정
 */


(() => {
  
  // 변수 -------------------------------------------------------------------------

  // 선택자
  const elViewBox = document.querySelector('#viewBox');
  const elSlideContent = elViewBox.querySelector('.slide_content');
  const elSlideUl = elSlideContent.querySelector('.slide_wrapper');
  const elSlideLi = elSlideUl.querySelectorAll('li');
  const elSlideCvt = [].slice.call(elSlideLi); // li를 배열로 만들기

  // 추가설정
  const slideLen = elSlideLi.length;

  // 기능처리
  // 1.1 광고슬라이드 마지막요소를 복제하여 첫번째 요소 앞에 배치
  const elSlideLast = elSlideCvt.at(-1);          // 마지막 요소 선택
  const cloneSlide = elSlideLast.cloneNode(true); // 마지막 요소 복제(true - 내부까지 복제)
  elSlideUl.prepend(cloneSlide);                  // 마지막 요소를 첫번째 요소 앞에 배치(정상작동을 위해선 li 각각 class를 부여하여 스타일을 적용해야한다 - nth-child 안됨)

  // 1.2 내부요소의 부모요소의 크기를 기존 값보다 더 크게(400% -> 500%) 설정
  const ulStyle = elSlideUl.style;
  ulStyle.width = ((slideLen + 1) * 100) + '%';   // 기존 : 4 *100 -> 설정값 : (4+1) * 100

  // 1.3 내부 요소들의 크기값을 기준 크기값에맞게 or 갯수로 분할하여 배치(1/4 -> 1/5)
  const elSlideLiRe = elSlideUl.querySelectorAll('li'); // li가 1-1로 인해 하나 늘어났기때문에 다시 선택해야함
  const elSlideLiReCvt = [].slice.call(elSlideLiRe);    // li를 배열로 만들기

  elSlideLiReCvt.forEach((li, idx) => {                 // li가 여러개이기때문에 forEach로 스타일을 설정해줘야함
    li.style.width = 100 / (slideLen + 1) + '%'         // 기존 : 1/4 -> 설정값 : 1/(4+1)
  });
  
  // 1.4 기본 첫번째 광고가 보이지 않고 복제된 광고가 나타나 있어 1칸(100%)만큼 이동하여 배치
  ulStyle.position = 'relative';
  ulStyle.left = 0;
  ulStyle.marginLeft = '-100%';
  elSlideContent.style.overflowX = 'hidden';



  // 다음버튼 기능처리
  // 1. 다음버튼 클릭시 ul이 현재기준 -100% 이동
  // 2. 한번 더 ul이 현재기준 -100% 이동
  // 3. 마지막요소에 위치할 경우, 원본4에서 복제4로 이동(빠르게) 후 첫번째 요소로 이동

  const slideNext = elViewBox.querySelector('.next');
  const slidePrev = elViewBox.querySelector('.prev');

  let SLIDE_COUNT = 0;
  let TIME_OPTION = 500;  
  let PERMISSION = true;

  ulStyle.transition = `left ${TIME_OPTION}ms linear`; // 스르륵

  // setIimeout 간략화 함수
  const fnDelay = async (ms = 0) => {         // 일정시간(ms)을 직접 입력할것임(기본값 0), 순서대로 진행하려면 async가 필요하고 return await와 세트
    return await new Promise(resolve => {     // await : 기다렸다가 수행하라
      setTimeout(() => {resolve()}, ms)
    });
  }

  // 슬라이드 기능 함수
  const fnAniSlide = async () => {
    await fnDelay();
    ulStyle.transition = `left ${TIME_OPTION}ms linear`; // 복제된 마지막 요소로 이동 후 다음 요소를 위해 효과를 넣음
    ulStyle.left = ( -100 * SLIDE_COUNT) + '%';          // 클릭할때마다 ul이 left -100%씩 이동
    await fnDelay(TIME_OPTION + 200);                    // 이동효과가 끝난 후에 true가 되어야 정상작동됨
    PERMISSION = true;
  }

  slideNext.addEventListener('click', (e) => {
    e.preventDefault();
    if(PERMISSION){       // 버튼을 연속하여 눌러도 정상작동되도록 하는 기능 permission
      PERMISSION = false;
      SLIDE_COUNT += 1;

      // 마지막 요소일때 수행
      if(SLIDE_COUNT >= slideLen){ // 마지막 요소에서 첫번째 요소로 이동하는 if문
        SLIDE_COUNT = 0;
        ulStyle.transition = null; // 마지막요소에서 첫번째 요소 앞 복제된 마지막요소로 이동할때엔 효과가 없어야함
        ulStyle.left = 100 + '%';  // 복제된 마지막 요소로 이동
      }

      fnAniSlide();

      /* 방법1 (간략화한 함수가 fnAniSlide)
      setTimeout(() => {
        ulStyle.transition = `left ${TIME_OPTION}ms linear`; // 복제된 마지막 요소로 이동 후 다음 요소를 위해 효과를 넣음
        ulStyle.left = ( -100 * SLIDE_COUNT) + '%';          // 클릭할때마다 ul이 left -100%씩 이동
        setTimeout(() => {
          PERMISSION = true;
        }, TIME_OPTION + 200); // 이동효과가 끝난 후에 true가 되어야 정상작동됨
      }, 0)
      */

    }// if
  })// slideNext

})()// 즉시실행함수