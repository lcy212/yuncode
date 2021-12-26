// headBox

// gnb 시나리오 - gnb_btn 클릭
// 1. 메뉴 아이콘이 변화한다 (.on 넣고 빼기)
// 2. .gnb_area > ul 이 나타난다(style 변경)

// unb 시나리오 - unb_btn 클릭
// 1. .unb_list가 나타난다(style 변경)

// gnb, unb 공통내용, 비공통내용 모두 함수화

// 변수 -----------------------------------------------------------
// gnb
const gnbArea = document.querySelector('.gnb_area');
const gnbUl   = gnbArea.querySelector('ul');
const gnbBtn  = gnbArea.querySelector('.gnb_btn');
let btnState = close;
const deviceSize = `screen and (min-width:1280px)`;
const mediaQuery = window.matchMedia(deviceSize);

// unb
const unbUl = document.querySelector('.unb_list');
const unbBtn = document.querySelector('.unb_btn');


// 함수 -------------------------------------------------------------
const fnGnbBtn = () => {
  (btnState === close)? 
  gnbBtn.classList.remove('on'):      // 아이콘 엑스로 바뀜
  gnbBtn.classList.add('on');         // 아이콘 메뉴로 바뀜
}

const fnAniBlock = (data) => {
  data.style.display = 'block';                   // gnbUl을 block 처리
  data.style.opacity = 0;                         // 불투명도 0
  data.style.transition = 'opacity 180ms linear'; // 애니메이션 효과
  setTimeout(function(){                          // 일정시간동안 다음의 내용을 처리한다
    data.style.opacity = 1;                       // 불투명도 서서히 100%
  }, 1);
  btnState = open;
}

const fnAniNone = (data) => {
  data.style.null;               // 설정했던 모든 style을 없앤다
  data.style.display = 'none';   // gnbUl을 none 처리
  btnState = close;
}

const fnAni = (data) => {
  (btnState === close)? fnAniBlock(data): fnAniNone(data);
}

const fnDevice = ()=>{
  (mediaQuery.matches)? fnAniBlock(gnbUl): fnAniNone(gnbUl);
  fnGnbBtn();
  fnAniNone(unbUl);
}


// 이벤트 처리 --------------------------------------------------------

mediaQuery.addEventListener('change', fnDevice);

gnbBtn.addEventListener('click', (e) => {
  e.preventDefault();
  fnAni(gnbUl);
  fnGnbBtn();
})

unbBtn.addEventListener('click', (e) => {
  e.preventDefault();
  fnAni(unbUl);
})