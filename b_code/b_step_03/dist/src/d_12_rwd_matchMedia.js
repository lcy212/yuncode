// d_12_rwd_matchMedia

// matchMedia를 이용하여 해당 규격에 일치하는지 판단 (matches)
// window.matchMedia('css크기를 그대로 옮겨놓은 형태')

// // 변수 --------------------------------------------------------------------------------------------------
const wrap = document.querySelector('#wrap');
const mobile = wrap.querySelector('.mobile')
const pc = wrap.querySelector('.pc')

mobile.remove();
pc.remove();

// const size = 'screen and (max-width:768px)';
// const mediaQuery = window.matchMedia(size);  

// // 함수 - 지정규격과 비교하여 맞으면 true, 아니면 false --------------------------------------------------
// const fnCKMedia = ()=>{
//   if(mediaQuery.matches){
//     console.log('768보다 작은 크기');
//     wrap.append(mobile);
//     pc.remove();
//   }else{
//     console.log('768보다 큰 크기');
//     wrap.append(pc);
//     mobile.remove();
//   }
// };
// fnCKMedia();

// // 이벤트 처리 - 안하면 사이즈 바뀔때마다 새로고침해야함 --------------------------------------------------

// window.addEventListener('resize', (e) => {    // 사이즈가 바뀔때마다 함수가 수행됨(끊임없이 콘솔) 
//   fnCKMedia();
// });

// mediaQuery.addEventListener('change', (e) => { // if결과값이 바뀔때마다 함수가 수행됨.
//   fnCKMedia();
// });


// Question 어떻게 아래 규격을 확인할 것인가?
const dataDevice = [ // dataDevice[n].size
  { type: 'mobile' , size : 599 }, // 600미만
  { type: 'tablet' , size : 767 }, // 600 ~ 767
  { type: 'laptop' , size : 1439 },// 768 ~ 1439
  { type: 'pc' }                   // 1440 ~     
];

// 방법 1
// const mobile = window.matchMedia('screen and (max-width:599px)');
// const tablet = window.matchMedia('screen and (min-width:600px) and (max-width:767px)');
// const laptop = window.matchMedia('screen and (min-width:768px) and (max-width:1439px)');
// const pc = window.matchMedia('screen and (min-width:1440px)');

// 방법 2
// const mobile = window.matchMedia(`screen and (max-width:${dataDevice[0].size}px)`);
// const tablet = window.matchMedia(`screen and (min-width:${dataDevice[0].size + 1}px) and (max-width:${dataDevice[1].size}px)`);
// const laptop = window.matchMedia(`screen and (min-width:${dataDevice[1].size + 1}px) and (max-width:${dataDevice[2].size}px)`);
// const pc     = window.matchMedia(`screen and (min-width:${dataDevice[2].size + 1}px)`);
// const mediaArray = [mobile, tablet, laptop, pc];

// 방법 3
const mediaArray = [];
for(let i=0; i<dataDevice.length; i+=1){
  let matchCode;
  if(i === 0){
    matchCode = window.matchMedia(`screen and (max-width:${dataDevice[i].size}px)`);
  }else if( i === dataDevice.length - 1){
    matchCode = window.matchMedia(`screen and (min-width:${dataDevice[i-1].size + 1}px)`);
  }else{
    matchCode = window.matchMedia(`screen and (min-width:${dataDevice[i-1].size + 1}px) and (max-width:${dataDevice[i].size}px)`);
  }
  mediaArray.push(matchCode);
}

console.log( mediaArray );

// 이벤트 처리 -------------------------------------------------------------------

// 방법 1
// mobile.addEventListener('change', e=>{
//   if(e.matches){ console.log('현재 mobile규격'); }
// });
// tablet.addEventListener('change', e=>{
//   if(e.matches){ console.log('현재 tablet규격'); }
// });
// laptop.addEventListener('change', e=>{
//   if(e.matches){ console.log('현재 laptop규격'); }
// });
// pc.addEventListener('change', e=>{
//   if(e.matches){ console.log('현재 pc규격'); }
// });

// 방법 2
// // 함수
// const fnCKDevice = (device, index)=>{
//   if(device.matches){ console.log( dataDevice[index].type )}
// }

// // 기본수행
// mediaArray.forEach( (type,index) =>  {
//     // if(e.matches){ console.log( dataDevice[index].type )}
//     fnCKDevice(type, index);
// });

// // 이벤트 처리
// mediaArray.forEach( (type,index) =>  {
//   type.addEventListener('change', (e) =>{
//     // if(e.matches){ console.log( dataDevice[index].type )}
//     fnCKDevice(e, index);
//   });
// });

// 방법 3
// // 함수
const fnInsertCode = (type)=>{
  switch(type){
    case 'mobile':
    case 'tablet':
      wrap.append(mobile);
      pc.remove();
      break;
    case 'laptop':
    case 'pc':
      wrap.append(pc);
      mobile.remove();
      break;
  }
}

const fnCKDevice = (device, index)=>{
  if(device.matches){ 
    let type = dataDevice[index].type;
    fnInsertCode(type);  
  }
}

// 기본수행
mediaArray.forEach( (type, index) =>  {     
  fnCKDevice(type, index);
});

// 이벤트 처리
mediaArray.forEach( (type,index) =>  {
  type.addEventListener('change', (e) =>{
    fnCKDevice(type, index);
  });
});