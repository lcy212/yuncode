// e_01_slide_area_fade.js


// 시나리오
// 다음버튼 클릭시 - 'fadeOut'/(fadeIn) 기능을 이용하여, 이미지 변경
// 1. 버튼 클릭시 현재 보이는 이미지(z-index:100) 바로뒤에 다음 이미지가 나타나게 만들기
// 2. 현재 보이는 이미지를 투명도 1 -> 0으로 변경 ( 100%, 50%, 0 )
// 3. 투명도가 0이 되면 display:none으로 사라지게하기
// 4. animation기법으로 처리되어 사라진 이미지 style(html에 새겨진) 제거



(() => { // 즉시실행함수 사용으로 외부에서 사용불가
  // 선택자 변수
  const elViewBox2 = document.querySelector('#viewBox2');
  const elSlide = elViewBox2.querySelector('.slide_02');
  
  const elBtnPart = elSlide.querySelector('.view_btn');
  const elNext = elBtnPart.querySelector('.next');
  const elPrev = elBtnPart.querySelector('.prev');
  
  const indi = elSlide.querySelector('.indicator'); 
  const indiLi = indi.querySelectorAll('li');
  
  const viewCon = elSlide.querySelector('.view_content ul');
  const viewLi  = viewCon.querySelectorAll('li');
  
  // 옵션변수
  let [CLASS_CHECK, countIndex, timed, cssFn, permission] = ['act', 0, 500, 'ease', true];
  let beforeIndex = countIndex;
  const liLen = viewLi.length;
  // -------------------------------------------------------------
  viewLi[countIndex].classList.replace('on', CLASS_CHECK); // li의 class이름 on에서 act로 변경
  indiLi[countIndex].classList.add('act');                 // indicator의 class이름 act로 지정
  

  // 함수 -------------------------------------------------------------
  const fnDelay = async ( t = timed ) => {    // async 비동기함수. 값이 아니라 promise를 반환함
    const promise = new Promise(resolve => {
      setTimeout( ()=> {
        permission = true;
        resolve(permission);
      }, t)
    });
    return await promise;
  };
  
  const fnOpacity = () => {
      viewLi[countIndex].style.display = 'block';                        // 현재 이미지 뒤에 다음이미지 나타나기
  
      viewLi[beforeIndex].style.transition = `all ${timed}ms  ${cssFn}`; // 스르륵 진행되게하는 animation
      viewLi[beforeIndex].style.opacity = 0;                             // 투명도 0으로
  
      indiLi[beforeIndex].classList.remove('act');                       // 현재 인디케이터에서 .act 빼기 -> scss - 배경색, 스케일 1.1배 없어짐
      indiLi[countIndex].classList.add('act');                           // 다음(클릭한) 인디케이터에 .act 넣기 -> scss - 배경색, 스케일 1.1배 적용
  
      fnDelay(timed)
        .then( () => {
          viewLi[beforeIndex].removeAttribute('style');      // js로 줬던 style제거 (animation 제거)
          viewLi[beforeIndex].classList.remove(CLASS_CHECK); // 현재 이미지에서 .act 빼기 -> scss - display:none, z-index:0;
          viewLi[countIndex].classList.add(CLASS_CHECK);     // 다음 이미지에 .act 넣기 -> scss - display:block, z-index:100;
          beforeIndex = countIndex;                          // 다음 이미지 값이 현재 이미지 값이 됨
      });
  
    }; // fnOpacity; 
  // -------------------------------------------------------------
  // 이벤트처리
  // elNext 클릭시
    elNext.addEventListener('click', (e)=>{
      e.preventDefault();
      if(permission){
        permission = false;
        (countIndex < liLen-1) ? countIndex += 1 : countIndex = 0; //  0, 1, 2, 3이면 +1하여 다음 이미지로 넘어간다 : 4가되면 0으로 돌아가기
        fnOpacity();    
      }
    });
  
    // elPrev 클릭시
    elPrev.addEventListener('click', (e)=>{
      e.preventDefault();
      if(permission){
        permission = false;
        (countIndex <= 0) ? countIndex = liLen-1 : countIndex -= 1; // 0이하면 3(4번째)으로 간다 : 양수일땐 -1하여 이전 이미지로 넘어간다 
        fnOpacity(); 
      }
    });
  
    // indicator 클릭
    indiLi.forEach((d,i)=>{
      d.addEventListener('click', (e) => {
        e.preventDefault();
        if(permission){
          permission = false;
          countIndex = i;
          fnOpacity(); 
        }
      });    
    })
  // ----------------------------------------------------------------
  })() 