// b_06_js_condition2.js

// 기능설명
// input에 글자를 입력할 때, 어떤 글자를 입력했는지 체크

// 변수
var inputBox = document.querySelector('#inputBox');
var par = document.querySelector('p');
var narr;

// 함수설정
var keyFn = function(data){
    switch(data){
        case '1':
            narr = '숫자를 입력했습니다.';
            console.log('숫자를 입력했습니다.');
            break;
        case ' ':
            narr = '스페이스를 입력했습니다';
            console.log('스페이스를 입력했습니다');
            break;
        default:
            narr = '다른 글자 입력';
            console.log('다른 글자 입력');
    }
}// keyFn()


// 이벤트
// 선택자.이벤트 발생([이벤트 조건], 함수(이벤트 처리되는 형태){});
// inputBox에 이벤트 발생(글자를 입력하면, 다음을 수행)
inputBox.addEventListener('keyup', function(event){
    keyFn(event.key); // event 결과를 보면 객체 형식으로 나옴 .key를 입력하면 입력값만 볼 수 있음
    par.innerText = narr;
});




// -------------------------------------------------


// 기능설명

// 변수
var selectedFood = document.querySelector('#selectedFood');
var btn1 = document.querySelector('.btn1');
var food = document.querySelector('.food');

// 함수
var switchTest2 = function(food){
    var selectFood;
    switch (food) {
        case 'noodle':
            selectFood = '면류를 좋아하시는군요. 칼국수를 추천드립니다.';          
            break;
        case 'meat':
            selectFood = '고기류를 좋아하시는군요. 돼지고기를 추천드립니다.';
            break;
        case 'rice':
            selectFood = '밥류를 좋아하시는군요. 볶음밥을 추천드립니다.';          
        break;
    
        default:
            selectFood = '먹을거면 다 맛있죠';
    }
    return selectFood;
};

// 이벤트
// btn1 이벤트발생(클릭, selectFood값 가져와서 food에 결과값 도출)
btn1.addEventListener('click',function(e){
    e.preventDefault(); // 선행기능 삭제
    console.log(selectedFood.value); // selectedFood의 value에 입력값 넣기
    var rel = selectedFood.value; // 입력값 rel에 넣기
    var returnValue = switchTest2(rel); // swicthTest2에서 입력값과 일치하는 내용 returnValue에 넣기
    food.innerText = returnValue; // 일치하는 내용 .food에 표시하기
})
