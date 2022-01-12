// slide_movie.js

// ============================
/** 시나리오1
 * 
 * 1. 다음버튼 클릭시 첫 요소가 마지막으로 이동 
 */
// ============================


// 변수
const elViewBox = document.querySelector('#viewBox');
const elSlideBtn = elViewBox.querySelector('.slide_btn');
const elSlideWrap = elViewBox.querySelector('.view_wrap');
const elModal = elViewBox.querySelector('.modal_area');
const elMovie = elModal.querySelector('.movie');
const elModalClose = elModal.querySelector('.modal_close > button');

let elSlideLi = elSlideWrap.querySelectorAll('li');

let elSlide = [...elSlideLi];
let PERMISSION = true;
elViewBox.style.overflowX = 'hidden';
let dbVideoData = [];
let videoCode = (fileName, type = 'mp4')=> { 
        return  ` <video controls autoplay muted preload>
                    <source src="${fileName}" type="video/${type}" /> 
                  </video>`};
// -------------------------------------------------

const path = "../data/video_modal.json";
fetch(path)
.then(response => response.json() )
.then((data)=>{
  dbVideoData = [...data];
  elSlide.forEach((el,idx)=>{
    el.setAttribute('data-num', dbVideoData[idx].id );
  });
});

// -------------------------------------------------
const fnSlideMove = (e)=>{
  e.preventDefault();
  if(PERMISSION){
    PERMISSION = false;
    let target = e.target.classList.contains('next');
    elSlide = [...elSlideLi];
    (target) ?  
      elSlideWrap.append( elSlide.at(0) ) : 
      elSlideWrap.prepend( elSlide.at(-1) ) ;

    elSlideLi = elSlideWrap.querySelectorAll('li');
    setTimeout(()=>{ PERMISSION=true; },500);
  }
};
elSlideWrap.prepend( elSlide.at(-1) ) ;
elSlideWrap.prepend( elSlide.at(-2) ) ;
elSlideLi = elSlideWrap.querySelectorAll('li');

// 이벤트
elSlideBtn.addEventListener('click', fnSlideMove);

elSlideWrap.addEventListener('click', (e) => {
  e.preventDefault();
  let el = e.target;
  let selectData;
  // console.log(dbVideoData );
  if(el.tagName.toLowerCase() === 'button' ){
    let num = el.parentNode.getAttribute('data-num');
    
    // 필요한 data 찾아오기
    selectData = dbVideoData.filter((data)=> data.id === parseInt(num) );
    // console.log( selectData[0].file );
    let src = `../multi/video/${selectData[0].file}.mp4`;
    elMovie.innerHTML = videoCode(src);
    elModal.classList.add('on');
    elModalClose.focus();
  }
});

elModalClose.addEventListener('click', (e)=>{
  e.preventDefault();
  elModal.classList.remove('on');
  elMovie.children[0].remove();
});

// -----------------------------------------------------
// li를 클릭시 해당하는 내용에 맞는 영상을 모달창에 띄워 처리

// e.target.tagName.toLowerCase()  : 이벤트처리된.타겟의.요소이름.소문자로처리()

// ---------------------------------------------
// 이벤트 위임 : 실제로 클릭해야하는 요소가 아닌 그 부모에서 클릭했을 경우 해당하는 요소가 반응할 수 있도록 인식
// 버블링:부모에 전달, 캡처링:자식에게 전달


// let elBtnWrap = elViewBox.querySelector('.slide_btn');
// let elNext = elBtnWrap.querySelector('.next');

// ===========================================================================
// this
// function(){} 함수일경우 이벤트 주체, ()=>{} 함수에서는 전체문맥
// 화살표함수 : 생성자 함수를 만들수 없는 함수이기에 this를 사용하면 무조건 window를 가르킴

// elNext.addEventListener('click', function(e){
//   console.log( this ); // 화살표함수와, 일반함수에따라 역할이 달라진다.
//   console.log( e.currentTarget ); // 이벤트를 동작시키는 요소
//   console.log( e.target ); //이벤트가 발생되는 요소
// });

//elBtnWrap.addEventListener('click', (e) => {
//  console.log( this ); 
//  console.log( e.currentTarget );
//  console.log( e.target );
//});
// ===========================================================================
// 버블링 : 이벤트발생부터 상위로 개념
// elBtnWrap.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log('버튼의 부모에서 명령');
// });

// elNext.addEventListener('click', function(e){
//   e.stopPropagation();
//   e.preventDefault();
//   console.log('버튼에서 명령');
// });
// ===========================================================================
// 캡쳐링 : 이벤트 발생 요인이되는 곳까치 상위에서부터 찾아내려가는 것
// for(let elem of document.querySelectorAll('*')) {
//   // elem.addEventListener("click", e => console.log(`캡쳐링: ${elem.tagName}`), true);
//   elem.addEventListener("click", e => console.log(`버블링: ${elem.tagName}`));
// }