"use strict";

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.array.slice.js");

require("core-js/modules/es.function.name.js");

require("core-js/modules/es.array.from.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.test.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.object.values.js");

require("core-js/modules/es.object.entries.js");

require("core-js/modules/es.array.concat.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// d_08_for_of.js
// ?????? 1. [1~7, -----] ????????? ????????????
var arr = [1, 2, 3, 4, 5, 6, 7, '-----'];
console.log(arr); // ?????? 2. 1~7 -----??? ????????? ????????????

for (var _i = 0; _i < arr.length; _i++) {
  console.log(arr[_i]);
} // ?????? 3. 1~7 -----??? ????????? ????????????


arr.forEach(function (data) {
  console.log(data);
}); // ?????? 4. 0~7??? ????????? ????????????

for (var _i2 in arr) {
  console.log(_i2);
} // ?????? 5. 1~7 -----??? ????????? ????????????
// for(of)?????? ???????????? ????????? ?????? ??????????????? ????????? ????????????


for (var _i3 = 0, _arr = arr; _i3 < _arr.length; _i3++) {
  var _i4 = _arr[_i3];
  console.log(_i4);
} // -------------------------------------------------------------------------------


var text = 'javascript'; // javascript??? ????????? ??????

for (var _i5 = 0; _i5 < text.length; _i5++) {
  console.log(text[_i5]);
} // javascript ????????? ?????? ?????? ??????(0~9)


for (var _i6 in text) {
  console.log(_i6);
} // ----------------------------------------------


var obj = {
  'samsung': 'galaxy',
  'apple': 'iphone',
  'lg': 'wing',
  'nokia': 'N serise'
};

for (var i in obj) {
  console.log(i);
} // ??????????????? ????????????????????? ?????? ?????????
// for(var i of obj){
//   console.log(i);
// }
// ????????? ???????????? ?????? ???????????? ?????????(keys, values, entries)


var key = Object.keys(obj); // ['samsung', ...]

var val = Object.values(obj); // ['galaxy', ...]

var ent = Object.entries(obj); // [ ['samsung', 'galaxy'], ...]

for (var _i7 = 0, _ent = ent; _i7 < _ent.length; _i7++) {
  var _i8 = _ent[_i7];
  // ['samsung', 'galaxy'] ...
  console.log(_i8);
}

for (var _i9 = 0, _ent2 = ent; _i9 < _ent2.length; _i9++) {
  var _ent2$_i = _slicedToArray(_ent2[_i9], 2),
      _i10 = _ent2$_i[0],
      v = _ent2$_i[1];

  // samsung : galaxy ...
  console.log("".concat(_i10, " : ").concat(v));
}