// d_02_esnext_destructor.js
// 비구조화할당(destructuring assignment)
// 배열/객체의 형태를 해체하여 각각을 변수에 담아 사용하는 표현식

// ----------------------------------------------------------------------

const fruits = ['banana', 'apple', 'graph', 'kiwi'];

// const summer = fruits[0];
// const apple = fruits[2];

// let [ba, ap, gh, kw] = fruits;
let [ba,   ,   , kw] = fruits;     // 중간에 건너뛰어도 됨

// ----------------------------------------------------------------------

const obj = {
  'music' : 'mp3',
  'mouse' : 'track ball',
  'keyboard' : 'mechanic'
};

let {music, mouse, keyboard} = obj;

// ----------------------------------------------------------------------

const arrFruits = fruits;
const arr2Fruits = [];

// 깊은 복사
for(let i = 0; i < fruits.length; i++){
  arr2Fruits[i] = fruits[i];
}

fruits[5] = 'orange';
console.log(fruits);
console.log(arr2Fruits);

// ---------------------------------------
// 스프레드 오퍼레이터(전개 연산자) : 배열의 내용 자동으로 담기
const arrCopyFruits = [...fruits];
console.log(arrCopyFruits);

// ---------------------------------------
// 깊은복사
const obj2 = [];

for(let prop in obj){
  obj2[prop] = obj[prop];
}

obj.monitor = '120Hz';
console.log(obj);
console.log(obj2);

// ---------------------------------------
// 깊은복사
const obj3 = {...obj};
console.log(obj3);

// ----------------------------------------------------------------------
// 비구조할당 변수명 : 배열형식으로 모아 담기
// 스프레드 형식으로 값을 넣은 뒤에 다른 값을 적어도 적용이 안된다
const arrItBrand = ['samsung', 'lg', 'logitech', 'ms', 'apple'];
const [korea1, korea2, ...otherCountry] = arrItBrand;
console.log(otherCountry);

// -----------------------------------
// 비구조할당 : 배열값을 전달 및 새 변수에 값넣기(일반변수)
let [k1, k2, a1, a2, a3 = 'google', f1 = 'nokia'] = arrItBrand;
console.log(a3, f1);
console.log(arrItBrand);

// ------------------------------------
const samsungphone = {
  company : 'samsung',
  brand : 'galaxy'
}

const smartphone = {
  ...samsungphone,
  makeYear : 2021,
  keyCode : 's21',
  type : 'bar'
};
const smartphone2 = {
  ...samsungphone,
  makeYear : 2020,
  keyCode : 's20',
  type : 'flip'
};
const smartphone3 = {
  ...samsungphone,
  makeYear : 2019,
  keyCode : 'tab s6',
  type : 'tablet'
};
console.log(smartphone);

// -----------------------------------------------------
// 사용예시
// var i = 0;
// var permission = true;
// var optionCheck = 'on';

let [i, permission, optionCheck] = [o, true, 'on'];