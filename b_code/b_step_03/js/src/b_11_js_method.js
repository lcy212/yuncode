// b_11_js_method.js

// 배열 메소드는 배열 형식을 이용하여 처리하는 다양한 기능을 가진 함수이다
// 일부는 배열형식을 이용하지않는다(property, 다른곳에서도 사용가능한 범용)

var array = ['maker', 'remote', 'pen'];
console.log(array.length); // 개수

var text = 'javascript';
console.log(text.length); // 글자수

// 객체 수 세는 법
var obj = {'maker':'dog', 'dogdog':'duck'};
console.log(obj.length);
var n = 0;
for(var i in obj){n++}
console.log(n);
console.log(Object.keys(obj).length);

// --------------------------------------------

console.clear();

array.push('mouse'); // 배열 맨 뒤에 삽입
array.unshift('monitor'); // 배열 맨 앞에 삽입
console.log(array);

array.pop(array); // 배열 맨 뒤 삭제
array.shift(); // 배열 맨 앞 삭제
console.log(array);

var joinText = array.join(/* '기호' */); // 배열처리된것을 기호을 구분으로 한덩어리로 만든다(기본값은 콤마)
console.log(joinText);

var spliteText = joinText.split(''); // 한 글자씩 분리
console.log(spliteText);

array.forEach(function(d,i){ // 한 단어씩 출력
    console.log(d);
});

spliteText.reverse(); // 뒤집기
console.log(spliteText);

spliteText.sort(); // 오름차순 정렬
console.log(spliteText);

// indexOf 내부에 값을 입력하여 동일한 값이 존재하면 그 중 첫번째가 위치한것을 파악하여 위치를 숫자로 표기
// 존재하지 않으면 -1
var indexCk = array.indexOf('key');
console.log(array);
console.log(indexCk);

// [].splice(a, b, '내용1', '내용2') 
// a번째(0=1번째)부터 b개(0이면 삭제X 순서가 밀리는 것) 삭제하고 '내용1', '내용2' 삽입
var replaceArr = array.splice(1,0,'cam', 'mug', 'charger');
console.log(array); 

var array2 = ['dexktop', 'tablet', 'smartphone'];
var conArray = array.concat(array2); // 두 배열을 하나의 배열로 합침
console.log(conArray)

// 누산
var arrayN = [10, 5, 2, 50, 80, 90, 200];

// 함수 사용하는 방법
// var sum = 0;
// arrayN.forEach(function(d){ sum += d; });
// console.log(sum);
// console.log(arrayN.reduce(function(a,b){ return a + b }));

// method 사용하는 방법
// a=누산기, b=현재값
var ck = arrayN.reduce(function(a,b){
    var c = a + b;
    console.log(a,b);
    return c;
});

// --------------------------------------------

var nList = [1,2,3,4,5,6,7];
var filterList = [];

// 함수 사용하는 방법
// nList.forEach(function(d, i){
//     if(d > 4){
//         filterList.push(d)
//     }
// });
// console.log('filerList:', filterList);

// method 사용하는 방법
// [].filter(function(){ return }) : 반환값을 저장한 후 처리하는 기능
filterList = nList.filter(function(d,i,k){
    // console.log(d,i,k) // data, index, array 순서
    if(d > 4){
        return d;
    }
});
console.log('filerList:', filterList);
