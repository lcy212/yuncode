// e_02_slide_area-002.js

// 가로형 슬라이드 시나리오
// 1. 광고슬라이드 마지막요소를 복제하여 첫번째 요소 앞에 배치
// 2. 내부요소의 부모요소의 크기를 기존 값보다 더 크게(400% -> 500%) 설정
// 3. 내부 요소들의 크기값을 기준 크기값에맞게 or 갯수로 분할하여 배치(1/4 -> 1/5)
// 4. 기본 첫번째 광고가 보이지 않고 복제된 광고가 나타나 있어 1칸만큼 이동하여 배치
// 5. css 처리(nth-child) 에 관한 문제점 해결 - css에서 직접 수정

// 다음버튼 시나리오
// 1. 다음버튼 클릭시 UL이 현재위치 기준 왼쪽으로 100% 이동 (왼쪽으로이동이기에  -100% * i)
// 2. 위 기능의 반복수행처리 체크
// 3. 기본 이동을 animation기능으로 부드럽게 이동
// 4. 원본이미지 마지막요소에 위치했을 경우 복제된곳으로 점프이동하여, 처음요소로 부드럽게 animation 이동
// *  여러번 반복 클릭시 문제점 발생됨 -> 권한을 부여하여 처리

// 이전버튼 시나리오
// 1. 다음버튼 클릭시 UL이 현재위치 기준 오른쪽으로 100% 이동 (오른쪽으로이동이기에  +100% * i)
// 2. 위 기능의 반복수행처리 체크
// 3. 기본 이동을 animation기능으로 부드럽게 이동
// 4. 원본이미지 처음요소에 위치했을 경우 복제된곳으로 anmation 이동한 후 복제원본요소로 점프 이동
// *  여러번 반복 클릭시 문제점 발생됨 -> 권한을 부여하여 처리

// 숫자 인디케이터 시나리오
// 1. 복제이전의 개수 파악하여 .total_count에 값 삽입
// 2. 현재 보이는 순번을 .now_count에 값 삽입
// 3. 다음/이전 버튼 수행시 .now_count값 변화

// 동그라미 인디케이터 시나리오
// 1. 클릭시 해당 순번 파악 
// 2. 파악된 광고슬라이드 해당위치로 이동(공통변수)
// 3. indicator li에 .on의 위치 변경

// 일정시간마다 자동으로 광고 슬라이드
// 광고영역에 마우스 올리면 일시정지(벗어나면 다시 재생)

// data 불러와서 광고 수 만큼 생성
// 인디케이터 생성
//


(() => {
  
  // 변수 -------------------------------------------------------------------------

  // 선택자
  const elViewBox = document.querySelector('#viewBox');

  const slideNext = elViewBox.querySelector('.next');
  const slidePrev = elViewBox.querySelector('.prev');

  const elCount = elViewBox.querySelector('.count_part');
  const elNowCount = elCount.querySelector('.now_count');
  const elTotalCount = elCount.querySelector('.total_count')

  const elSlideContent = elViewBox.querySelector('.slide_content');
  const elSlideUl = elSlideContent.querySelector('.slide_wrapper');
  const elSlideLi = elSlideUl.querySelectorAll('li');
  const elSlideCvt = [].slice.call(elSlideLi); // li를 배열로 만들기


  // 추가설정
  let SLIDE_COUNT = 0;
  let TIME_OPTION = 500;  
  let PERMISSION = true;

  const slideLen = elSlideLi.length;  // 복제 전 슬라이드 수
  
  // 기능처리
  // 5.2 복제슬라이드는 인디케이테 목록에 포함되지 않는다
  const indiPart = elViewBox.querySelector('.indicator_part');
  const indiLi = indiPart.querySelectorAll('li');


  // 가로형 슬라이드 기능처리
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

  // 숫자 인디케이터 - 총 개수
  elTotalCount.innerText = slideLen;



  // 버튼에 대한 내용 -------------------------------------------------------------------------------------------------


  ulStyle.transition = `left ${TIME_OPTION}ms linear`; // 스르륵


  // 함수 -----------------------------------------------------------------------------------------------------------------
  // setIimeout 간략화 함수
  const fnDelay = async (ms = 0) => {         // 일정시간(ms)을 직접 입력할것임(기본값 0), 순서대로 진행하려면 async가 필요하고 return await와 세트
    return await new Promise(resolve => {     // await : 기다렸다가 수행하라
      setTimeout(() => {resolve()}, ms)
    });
  }

  // 숫자 인디케이터 - 현재 슬라이드 위치 표현하는 함수
  const fnNowCount = () => {
    elNowCount.innerText = SLIDE_COUNT + 1;
  }

  // indicator 수행 함수 - SLIDE_COUNT에 해당하지않는 순번의 클래스는 제거하고, 해당하는 순번엔 클래스를 첨부한다
  const fnIndiRotate = () => {
    indiLi.forEach((el, index) => {      
      (index !== SLIDE_COUNT)? el.classList.remove('on') : el.classList.add('on');  
    })
  }

  // 슬라이드 기능 함수(다음버튼)
  const fnAniSlide = async () => {                       // async를 함수안에 넣으려면 함수도 async를 사용해야함
    if(SLIDE_COUNT >= slideLen){ // 마지막 요소에서 첫번째 요소로 이동하는 if문
      SLIDE_COUNT = 0;
      ulStyle.transition = null; // 마지막요소에서 첫번째 요소 앞 복제된 마지막요소로 이동할때엔 효과가 없어야함
      ulStyle.left = 100 + '%';  // 복제된 마지막 요소로 이동
    }
    await fnDelay();
    ulStyle.transition = `left ${TIME_OPTION}ms linear`; // 복제된 마지막 요소로 이동 후 다음 요소를 위해 효과를 넣음
    ulStyle.left = ( -100 * SLIDE_COUNT) + '%';          // n번째에 맞는 -n00%값이 입력됨
    await fnDelay(TIME_OPTION + 200);                    // 이동효과가 끝난 후에 true가 되어야 정상작동됨
    fnIndiRotate();
    fnNowCount();
    PERMISSION = true;
  }

  // 이전버튼 클릭시 수행하는 함수
  const aniPrevSlide = async () => {
    ulStyle.left = ( -100 * SLIDE_COUNT ) + '%'; 
    await fnDelay(TIME_OPTION);
    if(SLIDE_COUNT <= -1){
      SLIDE_COUNT = slideLen - 1;
      ulStyle.transition = null;
      ulStyle.left = ( -100 * SLIDE_COUNT ) + '%';  
    }
    await fnDelay(200);
    fnIndiRotate();
    fnNowCount();
    ulStyle.transition = `left ${TIME_OPTION}ms linear`;
    PERMISSION = true;
  };  

  // 일정시간마다 광고슬라이드 이동수행 (다음버튼 클릭과 동일한 기능)
  let slideGo;

  const fnSlideMove = ()=> {
    slideGo = setInterval( ()=>{ // 일정시간마다 수행
      if(PERMISSION){
        PERMISSION = false;
        SLIDE_COUNT += 1;
        fnAniSlide();
      }// if
    }, TIME_OPTION * 4 );
  };
    
  const fnSlidePause = () =>{ // 멈추기
    clearInterval(slideGo);
  }

  // 기본함수 수행
  fnNowCount();
  fnSlideMove();



// 이벤트 처리 ------------------------------------------------------------------------------------------------
  slideNext.addEventListener('click', (e) => {
    e.preventDefault();
    if(PERMISSION){       // 버튼을 연속하여 눌러도 정상작동되도록 하는 기능 permission
      PERMISSION = false;
      SLIDE_COUNT += 1;
      fnAniSlide();
      /* 방법1 (간략화한 함수가 fnAniSlide)
      setTimeout(() => {
        ulStyle.transition = `left ${TIME_OPTION}ms linear`; // 복제된 마지막 요소로 이동 후 다음 요소를 위해 효과를 넣음
        ulStyle.left = ( -100 * SLIDE_COUNT) + '%';          // n번째에 맞는 -n00%값이 입력됨
        setTimeout(() => {
          PERMISSION = true;
        }, TIME_OPTION + 200); // 이동효과가 끝난 후에 true가 되어야 정상작동됨
      }, 0)
      */
    }// if
  })// slideNext

  slidePrev.addEventListener('click', (e) => {
    e.preventDefault();
    if(PERMISSION === true){
      PERMISSION = false;
      SLIDE_COUNT -= 1;
       
      /* setTImeout으로 처리하는 방법
      setTimeout( ()=>{
        if(SLIDE_COUNT <= -1){
          SLIDE_COUNT = slideLen - 1;
          ulStyle.transition = null;
          ulStyle.left = ( -100 * SLIDE_COUNT ) + '%';  
          setTimeout(()=>{
            ulStyle.transition = `left ${TIME_OPTION}ms linear`; 
            PERMISSION = true;
          }, 200);
        }
      }, TIME_OPTION); // TIME_OPTION 시간이 지난 후에 SLIDE_COUNT 값을 파악하여 추가 진행
      */

      aniPrevSlide(); 

    }// if
  }); // slidePrev 클릭


  // 인디케이터 클릭시 이벤트
  indiLi.forEach((el, idx) => {
    el.children[0].addEventListener('click', (e) => {
      e.preventDefault();
      if(PERMISSION){
        PERMISSION = false;

        SLIDE_COUNT = idx;
        fnIndiRotate(idx);
        fnNowCount();
        ulStyle.left = ( -100 * SLIDE_COUNT ) + '%';
        setTimeout(() => {
          PERMISSION = true;
        }, TIME_OPTION + 200);
      }// if
    })// eventListener
  })// forEach

  // 자동 슬라이드 멈추게하는 이벤트
  elViewBox.addEventListener('mouseover', (e) => {

  })

})()// 즉시실행함수


// 1. indicator 
// 2. 일정시간마다 넘어가는 수치
// 3. 터치/마우스누른상태로 내용이동



// js에서는 잠시 기다렸다가 다음을 수행해라는 의미가 뒤에오는 코드들 까지 기다리게하는 의미가 아니다!