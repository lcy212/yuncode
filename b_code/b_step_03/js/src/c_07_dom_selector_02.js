// c_07_dom_selector_02.js



// ---------------------------------------------------------------------------
var conBox = document.querySelector('#conBox');
var conNav = conBox.querySelector('.con_nav');
var conNavLi = conNav.children;

// HTML Collection은 유사배열이라 내부로 접근이 불가능하다(배열형식으로 변경해야 접근가능)
// 강제로 배열형식으로 바꾸는 방법 : prototype
/* 
방법 1
var convertConLi = Array.prototype.slice.call(conNavLi);
console.log(convertConLi);

방법 2
var filterCheck = Array.prototype.filter.call(conNavLi, function(data){
  return data;
});
console.log(filterCheck);
*/

// 방법 3
var ConLiSam = [].slice.apply(conNavLi);
var conLiFLink = [];
ConLiSam.forEach(function(selector){
  conLiFLink.push(selector.children[0]); // selector는 li 첫번째, 두번째... 
});
console.log(conLiFLink);