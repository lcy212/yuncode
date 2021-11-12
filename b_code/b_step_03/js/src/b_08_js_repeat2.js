// b_08_js_repeat2.js


// for(in){} -------------------------------------------------------------

// for(임의변수 in {객체}){}

// var arr = ['딸기', '바나나', '키위', '수박', '포도'];
// for(var sam in arr){
//     console.log(arr[sam]); // sam 안쓰면 숫자로 출력됨
// }

var obj = {
    '딸기'   : 'red', 
    '바나나' : 'yellow', 
    '키위'   : 'brown', 
    '수박'   : 'green', 
    '포도'   : 'purple'

};
for(var sample in obj){
    console.log(sample + ':' + obj[sample]);
}

// for each --------------------------------------------------
// for는 기본문법 forEach() 메서드

var arr = ['딸기', '바나나', '키위', '수박', '포도'];
var i = 0;
var arrLen = arr.length;
for(; i<arrLen; i+=1){
    console.log(arr[i]);
}

// 이벤트 메소드 특징
// 선택자.이벤트(기능, function(){})

arr.forEach(function(data, index){ // 첫번째는 값, 두번째는 순서
    console.log(index, data);
})

var ul = document.querySelector('ul');
var li = ul.children;
console.log(arr);
console.log(li); // 배열처럼 보이는것

// ---------------------------------------------------------