// b_04_js_nesting_object.js

var arr = []; // 참조변수 : 원본 데이터는 따로 두고 그 값을 참조
var ck = (arr.constructor === Array) ? 'array' : 'other';
console.log ( typeof arr, ck );

// var arr2 = new Array();
// console.log(arr2);        권장하지않는 방식

arr = [ '과일', '고기', '깐풍기', '회', '냉면' ];
console.log( arr[2] );

var arr2 = [ '포도', '사과', '배', '감', '귤', '자몽' ];
var arr3 = [ '냉면', '라면', '우동', '회냉면', '쫄면', '밀면', '야끼우동', '국수' ]
var arrList = [ arr, arr2, '회', arr3 ];
console.log( arrList[0][2] ); // arrList의 1번째는 arr이라 0
// console.log( (arrList[0])[2] ); 구분 쉽게 괄호로 묶어도 됨
// var arZ = arrList[0];
// console.log( arZ[2]); 구분 쉽게 변수 사용해도 됨
console.log( arrList[2], arrList[0][3] ); // 회
console.log( arrList[0][4], arrList[3][0] ); // 냉면

var phone = '010-0000-0000';
var addr = '서울시 영등포구 여의도동 kbs홀 본관 402호' // 같은지역끼리 관리하려 사용
var myArr = phone.split('-'); // 가져온 변수 내용을 split() 기준으로 쪼개서 배열
var myAddr = addr.split(' ');
console.log(myArr, myAddr);
console.log(myArr.join('. '), myAddr); // 배열과 join()을 합쳐 문자열로 변환


// ----------------------------------------------------------------------------------
console.clear();

var obj = {}
var objCk = (obj.constructor === Object) ? '객체' : 'other';
console.log( typeof obj, objCk );

// var objOrigin = new Object();       // 원래 형태를 복제한다는 뜻
// console.log(objOrigin.constructor);

obj = { 
    "meat":"채끝살", 
    "fruit":"머루포도", 
    "noodle":"쫄면", 
    "mobile phone":"samsung" 
}; 
// 객체 안의 문자는 쌍따옴표로 하는 것이 좋음  - 추후에 json에서 용이함
// meat:'채끝살' - attribute,  meat - property,  '채끝살' - value
// 띄어쓰기 있는 단어와 한글은 ""로 묶기

console.log(obj.fruit);
console.log(obj["mobile phone"]);

var obj2 = { "web":"frontEnd", "myObj":obj };
console.log( obj2.myObj.meat);
console.log( obj2["myObj"]["meat"]);

// ----------------------------------------------------------------------------------
console.clear();

var drink = [
    {'coffee':[ 'esspress', 'americano', 'latte', 'mocha', 'choco latte' ]},
    {'alcole':[ '맥주', '소주', '막걸리', '청주', '데낄라' ]},
    {'juice':[ '오렌지', '포도', '자몽', '망고' ]},
    {'tea':[ 'black', 'grren', 'red', 'lemon', 'elgray', 'papermint' ]},
    {'ade':[ '자몽', '키위', '레몬' ]}
]
console.log( drink[3].tea[5] ); // 페퍼민트

// ----------------------------------------------------------------------------------
var data = {};
var mySet =  {
    name : function(d){
        return data.user = d;
    },
    old : function(d){
        return data.old = d;
    },
    gender : function(d){
        return data.gender = d;
    }
};
console.log(data);

mySet.name('이름');
console.log(data);

mySet.old('00');
console.log(data);

mySet.gender('성별');
console.log(data);

// 반복수행(property 안에 객체명) - 객체(data) 내부에 있는 property
// 임의변수 sam에 내용이 들어감
for ( sam in data) {
    console.log(sam + ':' + data[sam]);
}