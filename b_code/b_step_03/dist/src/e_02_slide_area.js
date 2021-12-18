// e_02_slide.area.jss

// html에 #headBox, #viewBox 담기

// 외부파일 불러오기           - fetch(불러올 파일명)
// 불러온 파일의 문자요소 찾기 - 요소.text()
// 영역 생성하기               - document.createElement()
// 생성한 영역을 html에 담기   - 선택자.innerHTML, 선택자.append

// 외부파일
const headBox = '/temp/header.html';
const viewBox = '/temp/slide_area2.html';
const scrptData = "/dist/src/e_02_slide_area-002.js";

// 선택요소
const body   = document.querySelector('body'); 
const elWrap = document.querySelector('#wrap');

// 생성요소
const mkHeadBox = document.createElement('header'); // <header></header>
mkHeadBox.id = 'headBox';

const mkViewBox = document.createElement('section'); // <section></section>
mkViewBox.setAttribute('id','viewBox');

// 함수 -------------------------------------------------------------------------------------------------

// 외부데이터 중 문자요소(inserEl)를 html의 영역태그(seleckEl)안에 넣는 함수
const fnMakeEl = (selectEl, insertEl) => {
  selectEl.innerHTML = insertEl;
  elWrap.append(selectEl);
}

// 코드삽입
const fnScript = (codeUrl) => {
  const script = document.createElement('script');
  script.src = codeUrl;
  body.append(script);
}

// header 영역 만들기
fetch(headBox)                                             // 외부파일 불러오기
  .then(response => response.text())                       // 불러온 파일 문자요소 찾기  
  .then((textData) => { fnMakeEl(mkHeadBox, textData); }); // 찾은 문자요소를 html의 #headBox안에 넣기

// view 영역 만들기
fetch(viewBox)
  .then(response => response.text())
  .then((textData) => {
    fnMakeEl(mkViewBox, textData);
    fnScript(scrptData);
  });

