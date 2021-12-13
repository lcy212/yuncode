// d_08_for_of.js

// 방법 1. [1~7, -----] 한줄로 출력된다
const arr = [1,2,3,4,5,6,7,'-----'];
console.log(arr);

// 방법 2. 1~7 -----이 한줄씩 출력된다
for(let i=0; i<arr.length; i++){
  console.log(arr[i]);
}

// 방법 3. 1~7 -----이 한줄씩 출력된다
arr.forEach((data) => { console.log(data) });

// 방법 4. 0~7로 한줄씩 출력된다
for(let i in arr){
  console.log(i);
}

// 방법 5. 1~7 -----이 한줄씩 출력된다
// for(of)문은 해당하는 변수의 값이 순환처리가 되어야 동작한다
for(let i of arr){
  console.log(i);
}


// -------------------------------------------------------------------------------

let text = 'javascript';

// javascript가 한줄씩 출력
for(let i=0; i<text.length; i++){
  console.log(text[i]);
}

// javascript 글자수 만큼 숫자 출력(0~9)
for(let i in text){
  console.log(i);
}

// ----------------------------------------------

const obj = {
  'samsung' : 'galaxy',
  'apple' : 'iphone',
  'lg' : 'wing',
  'nokia' : 'N serise'
};

for(var i in obj){
  console.log(i);
}

// 순환구조라 인식되지않아서 적용 불가능
// for(var i of obj){
//   console.log(i);
// }

// 객체를 순환하기 위해 처리하는 메서드(keys, values, entries)
const key = Object.keys(obj);             // ['samsung', ...]
const val = Object.values(obj);           // ['galaxy', ...]
const ent = Object.entries(obj);          // [ ['samsung', 'galaxy'], ...]

for(let i of ent){                        // ['samsung', 'galaxy'] ...
  console.log(i);
}

for(let [i,v] of ent){                    // samsung : galaxy ...
  console.log(`${i} : ${v}`);
}

