// b_15_js_import_data-for-jQuery.js

// $(document).ready(function(){})
// $.ready(function(){});

// IEFE 즉시실행함수
// var fn = function($){};
// fn(jQuery);

// jQuery 특징
// 1. $() 선택자 - 이후 들어가는 요소는 대부분 메소드(해석 : 메소드 그대로 읽기)
// 2. $.메소드() - 유틸리티 메소드 - 기능처리 - 메소드(해석 : 메소드 기준으로 읽기)
// ajax : 실시간(비동기)으로 자료 체크하는 기술
// 동기 : 새로고침 또는 다른 페이지로 전환

(function($){ // 1. 내용시작
  var path = '../data/sample.txt'; // html 기준 경로
  var dataFile;
  $.ajax({
    url:path
  }).done(function(data){ // 2. ajax 이용하여 파일 불러오기(ajax 수행시간이 길어서, setTimeout처리시간에 따라 순서가 바뀜)
    var importData = data;
    var arr = importData.split(',');

    dataFile = arr;
  });
  // 3. ajax뒤에 내용표기
  setTimeout(function(){ // 일정시간 뒤 기능 수행 함수
    console.log(dataFile); // 4. setTimeout 처리(정해둔 시간에 따라 순서가 바뀜)
  }, 10);
// 5. setTimeout 함수 뒤에 수행
})(jQuery);

// 1 - 3 - 5 - 2 - 4 순서로 수행됨