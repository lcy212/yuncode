// e_04_slide_area_touch.js

// 시나리오
// 1. 터치 기반의 광고 슬라이드 제작
// 2. 마우스 기반의 광고 슬라이드 제작(드래그 형식)
// 3. 슬라이드 광고 틀 제작(json 형식의 외부데이터 불러오기)


// 변수
const path = "../temp/slide_area3.html";
const elViewBox = document.querySelector('#viewBox');
const elTitle = document.querySelector('head>title');

fetch(path)                                              // 외부파일 불러옴
  .then((response) => response.text())                   // 파일 내용을 텍스트로 변환
  .then((data) => { elViewBox.innerHTML = data;   })     // 변환한 내용을 html의 뷰박스에 담기
  .then(()=>{
    const linkCss = document.createElement('link');      // link 태그로 css 불러옴
    linkCss.setAttribute('rel','stylesheet');
    linkCss.setAttribute('href','../css/src/e_04_slide_area_touch.css');
    elTitle.before(linkCss);
  })
  .then(()=>{
    const elViewWrap = elViewBox.querySelector('.view_wrap');        // view의 li 선택, 마지막요소 복사하여 맨 앞에 삽입
    const elViewLi = elViewWrap.querySelectorAll('li');
    // const cloneEl = elViewLi[elViewLi.length -1].cloneNode(true); // 무한 슬라이드 안할거라서 삭제
    // elViewWrap.prepend(cloneEl);
    return [elViewWrap, elViewLi];
  })
  .then((el)=>{
    const elViewCon = elViewBox.querySelector('.view_content');      
    const liLen = el[1].length - 1;
    let conWidth = elViewCon.clientWidth;    // padding포함 width값 / offsetWidth : padding, border 포함 / getBoundingClientRect() : 외곽에 보이는만큼
    let leftData = parseInt(el[0].style.left);

    
    // 애니메이션 기능 -----------------------------------------------------------------------------
    const pointer = {};//  { start:0, end:0, gap:0 }; 좌표 x의 이동점의 차이가 100px 이상 나면 해당하는 위치로 이동
    let SLIDE_COUNT =0;
    let PERMISSION = true;
    let TIMED = 500;

    elViewCon.style.overflowX = 'hidden';
    el[0].style.marginLeft = 0;
    el[0].style.position = 'relative';
    el[0].style.left = 0;
    el[0].style.transition = 'left ' + TIMED + 'ms linear';

    
    // 함수 - 갭차이가 100이상이어야 다음 또는 이전 슬라이드로 이동 ----------------------------------------------
      const fnSlideMove = () => {
        if(PERMISSION){
          PERMISSION = false;
          if(pointer.gap >= 100 && SLIDE_COUNT < el[1].length - 1){ // 갭차이가 100 이상이면 다음 슬라이드로 넘어가기위해 카운트 + 1 (단, 마지막요소에서는 다음으로 넘어가지않게 조건 걸어두기)
            SLIDE_COUNT +=1;
            // el[0].style.left = 100 * SLIDE_COUNT + '%';
          }else if(pointer.gap <= -100 && SLIDE_COUNT > 0 ){        // 갭차이가 -100 이하면 이전 슬라이드로 넘어가기위해 카운트 - 1 (단, 첫번째요소에서는 이전으로 넘어가지않게 조건 걸어두기)
            SLIDE_COUNT -=1;
          }
          el[0].style.left = -100 * SLIDE_COUNT + '%';
          setTimeout(() => { PERMISSION = true; }, TIMED);
        }
      };

  // 이벤트 ------------------------------------------
  elViewCon.addEventListener('touchstart', (e) => {     // 터치 시작 지점
    console.log('시작점:', e.changedTouches[0].pageX ); // 브라우저 페이지 기준 좌표(스크롤바 관계없이 전체 영역 기준)
    pointer.start =  e.changedTouches[0].pageX;         // 터치 시작 지점 좌표 저장
    leftData = parseInt(el[0].style.left); // 기존 %수치
  }); 

  elViewCon.addEventListener('touchmove', (e)=>{    // 터치 시작 후 움직임
    let _nowPointer =  e.changedTouches[0].pageX;   // 움직인 값
    let _pointerMove = pointer.start - _nowPointer; // 시작점을 기준으로 움직인 수치 계산
    let movePer = parseInt(_pointerMove / conWidth * 100); // 현재 움직인 값에 대한 % 위치(움직인 값 / 기준 * 100)
    let moverPx = leftData - movePer;

    // if(SLIDE_COUNT !== 0 && SLIDE_COUNT !== liLen){
    //   el[0].style.left = (leftData - movePer) + '%'; // start위치에서 움직인 만큼 화면이 이동하게
    // }

    // 첫슬라이드 또는 마지막 슬라이드위치이며, 해당위치보다 바깥 슬라이드방향으로 터치가 움직인다면
    let ckFirst = SLIDE_COUNT === 0 && _pointerMove > 0; // true이면 동작 X
    let ckLast  = SLIDE_COUNT === liLen && _pointerMove < 0; // true이면 동작 x
    if(ckFirst || ckLast){
      el[0].style.left = (leftData - movePer) + '%';
    }else if(SLIDE_COUNT !== 0 && SLIDE_COUNT !== liLen){
      el[0].style.left = (leftData - movePer) + '%';
    }
  });

  elViewCon.addEventListener('touchend', (e) => {         // 터치 끝난 후
    console.log('끝점:', e.changedTouches[0].pageX );
    pointer.end =  e.changedTouches[0].pageX;             // 터치 끝난 지점 좌표 저장
    pointer.gap = pointer.start - pointer.end;            // 터치 시작지점, 끝난 지점의 차이 값 저장
    console.log( pointer );
    fnSlideMove();
  });  

}); // then



// 터치를 기반으로 처리하기
// touchstart : 이벤트 핸들러 중 터치의 시작을 의미
// touchmove : 이벤트 핸들러 중 터치를 이용하여 움직이는 상황
// touchend : 이벤트 핸들러 중 터치의 끝을 의미
// event.changedTouches[0] : 터치를 인식하여 좌표를 계산하는 위치 
// event.touches[0] :  터치를 인식하여 좌표를 계산하는 위치 touchend가 없음
// 터치를 이용하여 좌표를 계산하는 기능 :  clientX, screenX, pageX 가 존재(y좌표도 있음)
// 대상의 위치를 기준으로 좌표를 계산(offsetX)하는 기능이 없음, 
// 이에, 해당 요소의 위치를 파악하는 기능필요 : target.getBoundingClientRect().left | target.getBoundingClientRect().top

  // elViewCon.addEventListener('touchstart', (e)=>{
  //   console.log( e.changedTouches[0].pageX );
  //   console.log( e.touches[0].pageX );
  // });
  // elViewCon.addEventListener('touchmove', (e)=>{
  //   console.log('changed:', e.changedTouches[0].pageX,  'touch:', e.touches[0].pageX  );    
  // });
  // elViewCon.addEventListener('touchend', (e)=>{
  //   console.log('changed:', e.changedTouches[0]);    
  //   console.log('touch:', e.touches[0].pageX  );    
  // });
