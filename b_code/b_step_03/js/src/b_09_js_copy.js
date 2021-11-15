// b_09_js_copy.js

var favoriteColor = ['emerald green', 'coral', 'hot pink', 'city blue', 'brown gray'];
var copyColor = favoriteColor; // 같은 주소지 공유
favoriteColor.push('yellow');
console.log(favoriteColor, copyColor);


// var cloneColor = ?
// cloneColor와 favoriteColor의 값이 동일하게 만들고, 
// 이후에 favoriteColor.push('sky'), cloneColor.push('deep orange') 했을 때

var cloneColor = [];

// 방법 1
// cloneColor[0] = favoriteColor[0];
// cloneColor[1] = favoriteColor[1];
// cloneColor[2] = favoriteColor[2];
// cloneColor[3] = favoriteColor[3];
// cloneColor[4] = favoriteColor[4];
// cloneColor[5] = favoriteColor[5];
// favoriteColor.push('sky');
// cloneColor.push('deep orange'); 
// console.log(favoriteColor, cloneColor);

// 방법 2
// var i = 0;
// var len = favoriteColor.length;
// for(; i<len; i+=1){
//     cloneColor[i] = favoriteColor[i];
// }
// favoriteColor.push('sky');
// cloneColor.push('deep orange');
// console.log(favoriteColor, cloneColor);

// 방법 3
// for(; i<len; i+=1){
//     if(i !== len){
//         cloneColor[i] = favoriteColor[i];
//     } else {
//         favoriteColor.push('sky');
//         cloneColor.push('deep orange');
//     }
    
// }
// console.log(favoriteColor, cloneColor);

// 방법 4
favoriteColor.forEach(function(data, index){
    // cloneColor.push(data);
    // cloneColor[index] = favoriteColor[index];
    cloneColor[index] = data;
});
favoriteColor.push('sky');
cloneColor.push('deep orange');
console.log(favoriteColor, cloneColor);

// ---------------------------------------

var pc = {
    'dell' : '프리시전',
    'hp' : 'z시리즈',
    'apple' : 'mac book',
    'samsung' : 'galaxy'
};
var copyPc = pc;
pc.lg = 'gear';
console.log(copyPc);

var clonePc = {}

// 방법 1
// clonePc['dell'] = '프리시전',
// clonePc['hp'] = 'z시리즈',
// clonePc['apple'] = 'mac book',
// clonePc['samsung'] =  'galaxy book'
// pc['asus'] = 'gen book';
// clonePc['lenovo'] = 'think pad';
// console.log(pc, clonePc);

// 방법 2
for(var data in pc){
    // console.log(data);
    clonePc[data] = pc[data];
}
pc['asus'] = 'gen book';
clonePc['lenovo'] = 'think pad';
console.log(pc, clonePc);

// 참조 주소 복사 - 얕은 복사 (shllow copy)
// 참조 주소에 있는 값 복사 - 깊은 복사 (deep copy)

// 위처험 똑같이 복사, 하나 추가
var cookie = ['초코칩', '칙촉', '빼빼로', '호빵', '촉촉한 초코칩', '칸초', '홈런볼', '엄마손'];
var snack = {'농심' : '새우깡', '해태' : '맛동산', '오리온' : '고래밥', '크라운' : '산도'};
var ice = [{'롯데' : ['폴라포', '수박바']}, {'해태':'브라보'}, {'허쉬':'민트초코'}, {'빙그레':'투게더'}];