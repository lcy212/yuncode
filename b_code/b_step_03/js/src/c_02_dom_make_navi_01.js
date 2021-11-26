// c_02_dom_make_navi_01.js

// 메뉴를 클릭하면 navigation 영역이 나타나게하고, 나타나있으면 사라지게

/* 내가 작성한 내용
var naviBtn = document.querySelector('.navi_btn');
var navArea = document.querySelector('.nav_area');

naviBtn.addEventListener('click',function(event){
  event.preventDefault();                           // navi_btn이 기존에 갖고있던 기능을 해제함
  var checkOn = 'on'                                // class이름을 일괄로 변경할 수 있게 변수 생성
  var isOn = navArea.classList.contains(checkOn);   // on이 있는지 확인하여 true, false로 확인
  if(!isOn){                                        // on이 없으면(f) 넣고, 있으면(t) 빼라는 조건문
    navArea.classList.add(checkOn);
  }else{
    navArea.classList.remove(checkOn);
  }
});
*/

// 메뉴를 클릭하면, navigation영역이 나타나게 / 나타나 있으면 사라지게 해라
// 1. 메뉴클릭 .navi_btn>button 클릭
// 2. navigation영역이 나타나게 -> 그부모인 .nav_area에 .on을 붙인다 (향후 수정을 고려해보자)
// 3. 만약 navigation영역이 나타나 있다면 반대로 사라지게 해라 -> 그부모인 .nav_area에 .on을 제거
// 4. 옵션 : 버튼을 클릭시 발생하는 이벤트는 동작하지 않도록 처리


// 변수영역 ----------------------------------
var navArea = document.querySelector('.nav_area');
var naviBtnSelector = document.querySelector('.navi_btn');
var naviBtn = naviBtnSelector.querySelector('button');
var navOn = 'on';

// 이벤트영역 ----------------------------------
naviBtn.addEventListener('click', function(event){
  event.preventDefault();
  // navArea.classList.toggle('on');  
  var checkClassName = navArea.classList.contains(navOn);
  (checkClassName) ? navArea.classList.remove(navOn) : navArea.classList.add(navOn);
});


// 모든영역이 아래로 밀리며 덮어놨던 네비게이션 영역이 보이고, 위로 올리오며 네비게이션 영역 위를 덮는 느낌
// 버튼을 클릭하면 head외 모든 영역이 아래로 내려가거나 위로 올라오게 만들기
// 1. 메뉴클릭 .navi_btn > button 클릭
// 2. 메뉴가 나오면 head외 모든영역이 아래로 밀리고, 메뉴가 사라지면 head외의 모든 영역이 위로 올라옴
// 3. 메뉴가 보이지않을때는 focus처리되면 안됨