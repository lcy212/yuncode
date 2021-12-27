// headBox

// gnb 시나리오 - gnb_btn 클릭
// 1. 메뉴 아이콘이 변화한다 (.on 넣고 빼기) - btnState 활용
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

// gnb 아이콘 변경
const fnGnbBtn = () => { 
  (btnState === close)? 
  gnbBtn.classList.remove('on'):                  // 아이콘 엑스로 바뀜
  gnbBtn.classList.add('on');                     // 아이콘 메뉴로 바뀜
}

// block 및 애니메이션 효과
const fnAniBlock = (data) => { 
  data.style.display = 'block';                   
  data.style.opacity = 0;                         
  data.style.transition = 'opacity 180ms linear'; 
  setTimeout(function(){  data.style.opacity = 1; }, 1); // 일정시간동안 불투명도 서서히 100%
  btnState = open;
}

// none 및 애니메이션 효과
const fnAniNone = (data) => { 
  data.style.null;
  data.style.display = 'none';
  btnState = close;
}

// display, 애니메이션 넣고 빼기
const fnAni = (data) => { 
  (btnState === close)? fnAniBlock(data): fnAniNone(data);
}

// 1280을 기준으로 gnb block, 버튼 아이콘 변경, unb none 
const fnDevice = ()=>{ 
  (mediaQuery.matches)? fnAniBlock(gnbUl): fnAniNone(gnbUl);
  fnGnbBtn();
  fnAniNone(unbUl);
}


// 이벤트 처리 --------------------------------------------------------

// 반응형웹(1280기준)
mediaQuery.addEventListener('change', fnDevice);  

// gnb - 애니, 버튼
gnbBtn.addEventListener('click', (e) => {  
  e.preventDefault();
  fnAni(gnbUl);
  fnGnbBtn();
})

// unb - 애니
unbBtn.addEventListener('click', (e) => {  
  e.preventDefault();
  fnAni(unbUl);
})