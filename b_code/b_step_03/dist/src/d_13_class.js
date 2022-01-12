// d_13_class.js

// class : 생성자 함수 - 화살표 함수는 this를 반환하지못함

const dataFile = [
  { id:1, brand:'nescafe1', type:'coffee', title:'제목작성_1', content:'내용작성_1', img:'a.jpg', imgUrl:'../img/path/'},
  { id:2, brand:'nescafe2', type:'drink', title:'제목작성_2', content:'내용작성_2', img:'b.jpg', imgUrl:'../img/path/'},
  { id:3, brand:'nescafe3', type:'coffee', title:'제목작성_3', content:'내용작성_3', img:'c.jpg', imgUrl:'../img/path/'},
  { id:4, brand:'nescafe4', type:'cookie', title:'제목작성_4', content:'내용작성_4', img:'d.jpg', imgUrl:'../img/path/'},
  { id:5, brand:'nescafe5', type:'coffee', title:'제목작성_5', content:'내용작성_5', img:'e.jpg', imgUrl:'../img/path/'},
  { id:6, brand:'nescafe6', type:'coffee', title:'제목작성_6', content:'내용작성_6', img:'f.jpg', imgUrl:'../img/path/'},
  { id:7, brand:'nescafe7', type:'drink', title:'제목작성_7', content:'내용작성_7', img:'g.jpg', imgUrl:'../img/path/'}
]

const BoxSet = function(title, content, imgUrl, img){
  this.title = title;
  this.content = content;
  this.img = imgUrl + img;
}

const newData = [];

dataFile.forEach((data, idx) => {
  let mySelect = new BoxSet(data.title, data.content, data.imgUrl, data.img);
  newData.push(mySelect);
})
console.log(newData[2].img)

// -------------------------------------------------------------------------------------

let dataType = dataFile.filter(data => { // 아래 조건에 맞는 데이터 추출
  return data.type === 'coffee';
})
console.log('dataType : ', dataType)

// -------------------------------------------------------------------------------------

const nArr = [1,2,3,4,5,6,7];
let newNArr = nArr.map(n => {
  return n * n;
})
console.log(newNArr)

// -------------------------------------------------------------------------------------

class BoxReset {
  constructor(title, content, imgUrl, img){
    this.title = title;
    this.content = content;
    this.img = imgUrl + img;
  }
}

let setBox2 = [];
dataFile.forEach((data, idx) => {
  setBox2.push(new boxReset(data.title, data.content, data.imgUrl, data.img));
});
console.log(setBox2)