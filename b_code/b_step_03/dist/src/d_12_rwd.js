// d_12_rwd.js

// @media 화면타입 and (max-width:768px){}


// 변수 -------------------------------------------------------------------------------

const elMobile = document.querySelector('.mobile');
const elPc = document.querySelector('.pc');

// ----------------------------------------------
const tab = 768; // 모든브라우저 사용가능
const laptop = 1440;

const dataDevice = [
  { type: 'mobile' , size : 599 },
  { type: 'tablet' , size : 767 },
  { type: 'laptop' , size : 1439 },
  { type: 'pc' }
];

let CK_DEVICE;

// const tabDevice = '(max-width:768px)'; // 구형X

let winWidth = window.innerWidth; // 브라우저의 가로크기
// console.log( winWidth );



// 함수 --------------------------------------------------------------------------------------------
const fnSwitchView = (type)=>{               // 디바이스에 맞는 화면 보여주는 함수 생성
  switch(type){
    case dataDevice[0].type:
    case dataDevice[1].type:
      elWrap.append(elMobile);
      elPc.remove()
      break;
    default:
      elMobile.remove();
      elWrap.append(elPc);
  }
  // switch(type){
  //   case dataDevice[0].type:
  //   case dataDevice[1].type:
  //     elMobile.style.display = 'block';
  //     elPc.style.display = 'none';
  //     break;
  //   default:
  //     elMobile.style.display = 'none';
  //     elPc.style.display = 'block';
  // }
};

const fnRwd = (deviceType)=>{                      // 윈도우 넓이에 따라 어떤 디바이스 타입인지 도출하는 함수 생성
  let beforeDevice = CK_DEVICE;
  if(deviceType <= dataDevice[0].size){
    CK_DEVICE = dataDevice[0].type;
  }else if(deviceType <= dataDevice[1].size){
    CK_DEVICE = dataDevice[1].type;
  }else if(deviceType <= dataDevice[2].size){
    CK_DEVICE = dataDevice[2].type;
  }else{
    CK_DEVICE = dataDevice[3].type;
  }
  // --------------------
  if(beforeDevice !== CK_DEVICE){              // 디바이스 타입이 달라지면 그에 맞는 화면 보여주는 함수 수행
    console.log(CK_DEVICE);
    fnSwitchView(CK_DEVICE);
  }
};


// 기본수행
fnRwd(winWidth); // 함수 수행(윈도우 넓이에 따라 디바이스타입 도출 -> 타입에 맞는 화면 출력)



// 이벤트 수행 ----------------------------------------------------------------------------------------------------

window.addEventListener('resize', e=>{          // 윈도우 사이즈가 변경되면 그 값을 fnRwd에 넣어 수행하라
  const winReWidth = window.innerWidth;
  fnRwd(winReWidth);
});

// 현재의 브라우저 사이즈가 변경되었을 때
// 현재 사용하는 디바이스 환경이 변화되었는가 아닌가를 판단
// 기존 디바이스환경과 다른 환경이면 새로운 환경으로 재세팅
// window.matchMedia([css조건의 내용와 동일하게 작성]).matches  -> true/false