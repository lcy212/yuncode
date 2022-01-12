// b_02_js_data_type_summary2.js

// var dicList = [];
// dicList 내부에 계산 히스토리 저장하기

var dicList = [];
// dicList.push('a');
// dicList.push('b');
// dicList.push('c');
// dicList.push('d');
// dicList.push('e');
// dicList.push('f');
// console.log( dicList );

var fn1 = function(data){
    dicList.push(data); // 배열에 담는 기능(히스토리)
    return data;        // 함수 실행 시 결과값(결과)
};

fn1('button');
fn1('link');
fn1('anker');
fn1('div');
console.log( dicList );
