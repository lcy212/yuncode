// d_13_class4.js

const dataUrl = [
  '../data/person_card.json',
  '../data/sample.txt',
  '../data/video_modal.json',
  '../temp/slide_area3.html'
]

const elTemp = document.querySelector('.temp');

const fnMkDiv = (name) => {
  let mkDiv = document.createElement('div');
  mkDiv.setAttribute('class', name);
  mkDiv.innerText = name;
  elTemp.append(mkDiv);
}

const pr = () => {
  return new Promise(resolve => {
    resolve();
  });
};


// 양이 많거나, 다양한 파일을 불러오면 순서가 꼬임 --------------------

// 방법 1
// pr()
//   .then(() => { fnMkDiv('one') })
//   .then(() => { fnMkDiv('two') })
//   .then(() => { fnMkDiv('three') })

// 방법 2
// fetch(dataUrl[0]).then( () => { fnMkDiv('one') });
// fetch(dataUrl[1]).then( () => { fnMkDiv('two') });
// fetch(dataUrl[2]).then( () => { fnMkDiv('three') });
// fetch(dataUrl[3]).then( () => { fnMkDiv('four') });


// 순서꼬이지 않는 방법 ---------------------------------------------------

// await { 진행중인 내용이 끝나야 다음이 진행됨 } - async가 없으면 동작안함
// (async () => {
// ( async () => {
//   await fetch(dataUrl[0]).then( () =>{ fnMkDiv('four_001') });
//   await fetch(dataUrl[1]).then( () =>{ fnMkDiv('four_002') });
//   await fetch(dataUrl[2]).then( () =>{ fnMkDiv('four_003') });
//   await fetch(dataUrl[3]).then( () =>{ fnMkDiv('four_004') });
// } )();

// Promise, fetch의 단점 - IE 지원안됨
// 해결방법 : 폴리필(호환 안되는 브라우저 지원하는 플러그인) 
// axios : js 라이브러리(외부에서 불러와야 사용가능한 기능)
( async () => {
  await axios(dataUrl[0]).then( () =>{ fnMkDiv('four_001') });
  await axios(dataUrl[1]).then( () =>{ fnMkDiv('four_002') });
  await axios(dataUrl[2]).then( () =>{ fnMkDiv('four_003') });
  await axios(dataUrl[3]).then( () =>{ fnMkDiv('four_004') });
} )();