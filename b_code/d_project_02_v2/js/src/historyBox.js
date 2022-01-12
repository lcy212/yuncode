// historyBox.js

// 시나리오
// 1. laptop, pc에서 #history_1990, #history_1980의 .text에 dir="rtl" 넣기
// 2. movile, tablet에선 빼기

{
// 변수 --------------------------------------------------------
const history90 = document.querySelector('#history_1990');
const text90 = history90.querySelector('.text');

const history80 = document.querySelector('#history_1980');
const text80 = history80.querySelector('.text');

const deviceSize = `screen and (min-width:1280px)`;
const mediaQuery = window.matchMedia(deviceSize);


// 함수 -------------------------------------------
const fnDevice = ()=>{ 
  if(mediaQuery.matches){
    text90.setAttribute('dir', 'rtl');
    text80.setAttribute('dir', 'rtl');
  }else{
    text90.removeAttribute('dir', 'rtl');
    text80.removeAttribute('dir', 'rtl');
  }
}

fnDevice();

// 이벤트처리 -------------------------------------
mediaQuery.addEventListener('change', fnDevice);
}