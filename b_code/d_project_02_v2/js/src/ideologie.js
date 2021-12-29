// ideologie.js

// ideologieBox 시나리오(모바일)
// .ideologie_inner의 dl에 .on 하면 li의 높이값이 증가하며 dd가 나타남

// 변수
const ideoInner = document.querySelector('.ideologie_inner');
const ideoLi = ideoInner.querySelectorAll('li');
const ideoLiCvt = [].slice.call(ideoLi); 

// 이벤트