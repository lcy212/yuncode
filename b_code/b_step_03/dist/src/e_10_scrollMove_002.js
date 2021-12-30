// e_10_scrollMove_002.js

// 브라우저에서 스크롤의 움직임에 따라 그 값을 통해 이미지를 변경하도록 처리
// 1. img 모두 첨부 후 1장제외 모두 display:none;
// 2. 스크롤시 이동값 파악



// 변수 -----------------------------------------------------------

const elViewBox = document.querySelector('#viewBox');
const elImgArea = elViewBox.querySelector('.img_area');
const COUNT_NUM = 79;
const OPTION_ON = 'on';


// 함수 -----------------------------------------------------------
// 이미지 첨부
const fnImgInsert = (n) => {
  const convertStr = '00000000000000' + (n+1);
  const cutNum = convertStr.slice(-3);
  const [url, alt] = [`../multi/img/cat/`, `고양이`];
  let fileName = `${url}cat_${cutNum}.png`;
  const mkImg = document.createElement('img');
  if(n === 0){ mkImg.classList.add(OPTION_ON) }
  mkImg.setAttribute('src', fileName);
  mkImg.setAttribute('alt', alt);
  elImgArea.append(mkImg);
};

for(let i=0; i < COUNT_NUM; i++){
  fnImgInsert(i);
}

const elImg = elImgArea.children;
const elImgArr = [...elImg];       //[].slice.call(elImg);


// 이벤트 ---------------------------------------------------------
window.addEventListener('scroll', (e) => {
  const targetScroll = e.currentTarget.scrollY;      // 스크롤이 움직인 값 파악
  const moveScroll = parseInt(targetScroll / 30);    // 스크롤 값을 줄이기위해 임의의 숫자로 나눔
  // if(moveScroll >= COUNT_NUM){ moveScroll = COUNT_NUM - 1} // 최대값 조정

  let scrollN = (moveScroll >= COUNT_NUM) ? COUNT_NUM - 1 : moveScroll;

  elImgArr.forEach((img, idx) => {
    (idx !== scrollN) ? img.classList.remove(OPTION_ON) : img.classList.add(OPTION_ON);
  });

  // 뷰박스 재생이 끝나면 top으로 이동
  let topMove = COUNT_NUM + 10 - moveScroll                      // topMove가 음수가 되면 그 값이 뷰박스의 top 값이 된다
  if(topMove <= 0){ elViewBox.style.top = (topMove * 15)+'px'; } // 큰 움직임을 위해 임의의 값을 곱함
  if(topMove === 100){ elWrap.style.paddingTop = (targetScroll + window.innerHeight + 100) + 'px' }
})