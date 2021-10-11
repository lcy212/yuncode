(function($){
// console.log( $.fn );
// $('선택자'):jq vs document.querySelector('선택자'):js

var nt = $('.next');
var slideWrap = $('.slide_con_wrap')
var div = slideWrap.children('div');

var i = 0;
// js는 0이 첫번째

//버튼을 클릭할때마다 div의 i번째에 내용이 나타나게하기

nt.click(function(){
    i += 1;
    if(i >= 5){ i = 0;}
    // 모든 div를 숨겼라. i번째만 나타나게하라
    div.hide()
    div.eq(i).show()
});

})(jQuery);