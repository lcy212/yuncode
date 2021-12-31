// ideologie.js

// ideologieBox, creedBox 시나리오(모바일)
// inner의 li를 클릭하면 .on이 삽입된다 / 한 번 더 클릭하면 .on이 삭제된다
// 다른 li를 선택해도 이전 li에서 .on이 사라지지않는다


// 변수 ------------------------------------------------------------------
const ideoInner = document.querySelector('.ideologie_inner');
const ideoLi = ideoInner.querySelectorAll('li');
const ideoLiArr = [].slice.call(ideoLi);

const creedInner = document.querySelector('.creed_inner');
const creedLi = creedInner.querySelectorAll('li');
const creedLiArr = [].slice.call(creedLi);


// 함수 ------------------------------------------------------------------
const fnToggle = (element) => {
  element.forEach((data, idx) => {
    data.addEventListener('click', ()=>{
      data.style.transition = 'all 80ms linear';
      data.classList.toggle('on');
    })
  });
}


// 이벤트처리 ------------------------------------------------------------
fnToggle(ideoLiArr);
fnToggle(creedLiArr);
