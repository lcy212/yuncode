"use strict";

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.array.filter.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/web.dom-collections.for-each.js");

require("core-js/modules/es.object.get-own-property-descriptors.js");

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.array.slice.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// d_02_esnext_destructor.js
// 비구조화할당(destructuring assignment)
// 배열/객체의 형태를 해체하여 각각을 변수에 담아 사용하는 표현식
// ----------------------------------------------------------------------
var fruits = ['banana', 'apple', 'graph', 'kiwi']; // const summer = fruits[0];
// const apple = fruits[2];
// let [ba, ap, gh, kw] = fruits;

var ba = fruits[0],
    kw = fruits[3]; // 중간에 건너뛰어도 됨
// ----------------------------------------------------------------------

var obj = {
  'music': 'mp3',
  'mouse': 'track ball',
  'keyboard': 'mechanic'
};
var music = obj.music,
    mouse = obj.mouse,
    keyboard = obj.keyboard; // ----------------------------------------------------------------------

var arrFruits = fruits;
var arr2Fruits = []; // 깊은 복사

for (var _i = 0; _i < fruits.length; _i++) {
  arr2Fruits[_i] = fruits[_i];
}

fruits[5] = 'orange';
console.log(fruits);
console.log(arr2Fruits); // ---------------------------------------
// 스프레드 오퍼레이터(전개 연산자) : 배열의 내용 자동으로 담기

var arrCopyFruits = [].concat(fruits);
console.log(arrCopyFruits); // ---------------------------------------
// 깊은복사

var obj2 = [];

for (var prop in obj) {
  obj2[prop] = obj[prop];
}

obj.monitor = '120Hz';
console.log(obj);
console.log(obj2); // ---------------------------------------
// 깊은복사

var obj3 = _objectSpread({}, obj);

console.log(obj3); // ----------------------------------------------------------------------
// 비구조할당 변수명 : 배열형식으로 모아 담기
// 스프레드 형식으로 값을 넣은 뒤에 다른 값을 적어도 적용이 안된다

var arrItBrand = ['samsung', 'lg', 'logitech', 'ms', 'apple'];
var korea1 = arrItBrand[0],
    korea2 = arrItBrand[1],
    otherCountry = arrItBrand.slice(2);
console.log(otherCountry); // -----------------------------------
// 비구조할당 : 배열값을 전달 및 새 변수에 값넣기(일반변수)

var k1 = arrItBrand[0],
    k2 = arrItBrand[1],
    a1 = arrItBrand[2],
    a2 = arrItBrand[3],
    _arrItBrand$ = arrItBrand[4],
    a3 = _arrItBrand$ === void 0 ? 'google' : _arrItBrand$,
    _arrItBrand$2 = arrItBrand[5],
    f1 = _arrItBrand$2 === void 0 ? 'nokia' : _arrItBrand$2;
console.log(a3, f1);
console.log(arrItBrand); // ------------------------------------

var samsungphone = {
  company: 'samsung',
  brand: 'galaxy'
};

var smartphone = _objectSpread(_objectSpread({}, samsungphone), {}, {
  makeYear: 2021,
  keyCode: 's21',
  type: 'bar'
});

var smartphone2 = _objectSpread(_objectSpread({}, samsungphone), {}, {
  makeYear: 2020,
  keyCode: 's20',
  type: 'flip'
});

var smartphone3 = _objectSpread(_objectSpread({}, samsungphone), {}, {
  makeYear: 2019,
  keyCode: 'tab s6',
  type: 'tablet'
});

console.log(smartphone); // -----------------------------------------------------
// 사용예시
// var i = 0;
// var permission = true;
// var optionCheck = 'on';

var i = o,
    permission = true,
    optionCheck = 'on';