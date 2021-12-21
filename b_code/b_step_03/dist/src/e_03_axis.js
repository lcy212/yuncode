// e_03_axis.js

// 마우스 움직일 경우 해당 좌표 파악

const elWrap = document.querySelector('#wrap');
const elBox  = elWrap.querySelector('.box');

// 이벤트 처리 ---------------------------------------------
elWrap.addEventListener('mouseenter', (e) => {
  console.log('clientY'  , e.clientY  ); // 브라우저에 보이는 화면 기준(스크롤바 관계없이 보이는 기준)
  console.log('movementY', e.movementY); // 이전 기준과 차후 기준의 값차이
  console.log('offsetY'  , e.offsetY  ); // this기준(여기에선 wrap이 기준이 됨)
  console.log('pageY'    , e.pageY    ); // 브라우저 페이지 기준(스크롤바 관계없이 전체 영역 기준)
  console.log('screenY'  , e.screenY  ); // 모니터화면의 좌표
  // console.log('layerX'   , e.layerX   ); // 비표준/브라우저 기준
  console.log('------------------------------------------------------------')
})