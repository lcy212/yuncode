// e_09_scrollMove.js


// 변수 ------------------------------------------------------------------------
const elheadBox = document.querySelector('#headBox');
const elScrollToBtn = document.querySelector('.scroll_down_btn')

const offsetCheck = elheadBox.offsetTop;

const OPTION_FIX = 'fix';
const WIN_HEIGHT = window.innerHeight;



// 이벤트처리 -------------------------------------------------------------------
window.addEventListener('scroll', (e) => {
  const target = parseInt(e.currentTarget.scrollY);
  console.log('scroll : '+target, 'offset : '+offsetCheck);
  const headClass = elheadBox.classList;
  (target >= offsetCheck) ? headClass.add(OPTION_FIX) : headClass.remove(OPTION_FIX);
});

elScrollToBtn.addEventListener('click', (e) => {
  window.scrollTo({top:WIN_HEIGHT, behavior:'smooth'});  // 지정된 스크롤 위치로 이동
  window.scrollBy({top:WIN_HEIGHT, behavior:'smooth'});  // 현재 위치 기준으로 지정 스크롤만큼 이동
  window.scroll({top:WIN_HEIGHT, behavior:'smooth'});    // 지정된 스크롤 위치로 이동
});