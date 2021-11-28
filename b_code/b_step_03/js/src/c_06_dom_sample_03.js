// c_06_dom_sample_03.js

// tab 메뉴 타이틀 하나를 선택할 경우 해당 순번의 내용 나타나게 하기
// 제목, 내용 모두 .on을 첨부/제거하여 통제
// 클릭한 요소의 순번, 처리할 순번 파악이 중요

(function($){
  // console.log($.fn.jquery);

  // 변수
  var conBox = $('#contentBox');
  var conTitle = conBox.find('.tab_title_inner');
  var conTitleUl = conTitle.children('ul');
  var conTitleLi = conTitleUl.children('li');
  var conTitleBtn = conTitleLi.children('button');

  var conContent = conBox.find('.tab_content_inner');
  var conContentList = conContent.children('div');

  var index;


  // 이벤트
  // 클릭하는 버튼은 모두 li의 첫번째 요소이므로 li의 순번을 통해 이벤트를 줘야한다
  // 여러 선택자가 존재하면 묶어서 한 번에 클릭이 가능한데, 이때 순번 파악은 클릭시 index로 파악
  
  // 이벤트 방법 1 : 모든 li에서 .on을 뺀다 -> 필요한 li에만 .on을 넣는다
  conTitleBtn.on('click', function(event){
    event.preventDefault();
    index = $(this).parent().index(); // $(this) : 이벤트 주체 / parent() : 부모값 / index() : 순서

    conTitleLi.removeClass('on'); // .on 제거(기본값으로 첫번째 li에 .on이 들어가있기때문)
    conTitleLi.eq(index).addClass('on'); // index번째의 li(탭 제목)에 .on 넣기 / eq() : 할당

    conContentList.removeClass('on'); // .on 제거(기본값으로 첫번째 li에 .on이 들어가있기때문)
    conContentList.eq(index).addClass('on'); // index번째의 li(탭 내용)에 .on 넣기
  });// conTitleBtn.on


  // 이벤트 방법 2 : 필요한 li에 .on을 넣는다 -> 그외의 li에서 .on을 뺀다
  conTitleBtn.on('click', function(event){
    event.preventDefault();
    index = $(this).parent().index(); // $(this) : 이벤트 주체 / parent() : 부모값 / index() : 순서

    conTitleLi.eq(index).addClass('on'); // index번째 li(탭 제목)에 .on 넣기
    conContentList.eq(index).addClass('on'); // index번째 li(탭 내용)에 .on 넣기

    conTitleLi.eq(index).siblings().removeClass('on'); // index번째 li(탭 제목)를 제외한 형제요소의 .on 빼기
    conContentList.eq(index).siblings().removeClass('on'); // index번째 li(탭 내용)를 제외한 형제요소의 .on 빼기
  });// conTitleBtn.on

})(jQuery);

// 비교
var arr = [1,3,5,7,9];
console.log(arr[3]);         // 3번째에 값이 몇인지 jQuery:eq(3)
console.log(arr.indexOf(7)); // 7이 몇번째 값인지   jQuety:index(7)