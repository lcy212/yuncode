// c_07_dom_selector_03.js

var bestBox = document.getElementById('bestBox');
var bestArea = bestBox.getElementsByClassName('best_area')[0]; // .best_area중에 첫번째를 가져옴(js는 .best_area가 몇개있는지 모르기 때문에)
var bestUl = bestArea.getElementsByTagName('ul')[0];// ul중에 첫번째를 가져옴(js는 ul이 몇개있는지 모르기 때문에)
var bestLi = bestUl.children;

// bestLi를 배열형식으로 만드는 방법 1
// var liLen = bestLi.length;
// var liArr = [];
// for(var i=0; i < liLen; i++){
//   liArr.push(bestLi[i]); // i번째 배열자리에 값 밀어넣기
// }
// console.log(liArr);

// bestLi를 배열형식으로 만드는 방법 2
// var liArr = [].slice.call(bestLi); // prototype을 이용해 강제로 배열형식으로 만들기
// console.log(liArr);
// var setI = 0;

// liArr.forEach(function(selector, index){
//   var linkEl = selector.children[0]; // index번째 li의 자식(a)
//   linkEl.addEventListener('click', function(event){
//     event.preventDefault();
//     setI = index;
//     selector.classList.add('on'); // index번째의 li에 .on 첨부
//     console.log(this, index);
//   });
// });

var colorList = ['#caa','#adf','#fdd','#eee'];

var liArr = [].slice.call(bestLi);
console.log(liArr);
var setI = 0;

liArr.forEach(function(selector, index){
  var linkEl = selector.children[0];
  linkEl.addEventListener('click', function(event){
    event.preventDefault();
    bestUl.style.backgroundColor = colorList[index];
  });
});