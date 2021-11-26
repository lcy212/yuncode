// c_03_check_restore_01.js

// window > document > [elements] ------------------------------------------------------------

// window란 부라우저 자체를 말한다 
// window 객체명 생략가능 - cobsole.log(window.window.self.document);
// node.js는 window 개념 대신 glbal을 사용함

console.log(window.document);

window.console.log('!!');
window.document.querySelector('h1');


// document란 우리가 실재로 사용하는 웹사이트 화면(페이지)
// html, css로 제어 가능한 부분이라 생각하면 된다
// document는 object

// document.querySelector('li');        // 찾아서 확인
// document.getElementsByTagName('li'); // 찾아서 가져오겠다



// getComputedStyle() --------------------------------------------------------------------

var conBox = document.querySelector('#contentBox');
var btn = conBox.querySelector('button'); // conBox안의 button을 가져오겠다
var contentArea = conBox.querySelector('.content_area');
// conBox.style.width = '500px';                   // property에서 conBox의 width 값을 500px로 변경하라 <article id="contentBox" style="width: 500px;">
var conStyle = getComputedStyle(conBox).width;  // css-style에서 conBox의 width값을 가져와라
console.log(conStyle); // 설정을 따로 안하면 기본값을 출력함
console.log(conBox.style.width); // 설정을 따로 안하면 값이 없음(공백)


// toggle --------------------------------------------------------------------------------

// toggle 이란 on-off의 기능을 가진 버튼을 통칭한다


console.log(btn);
btn.addEventListener('click', function(e){
  e.preventDefault();
  btn.classList.toggle('on'); // togle은 btn의 class에 on을 있게했다가 없게 해라, btn -> this로 작성가능
  contentArea.classList.toggle('on'); // togle은 contentArea의 class에 on을 있게했다가 없게 해라
})



