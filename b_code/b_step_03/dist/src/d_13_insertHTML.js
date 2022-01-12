// d_13_insertHTML.js

const elFootBox = document.querySelector('#footBox');
const elFootH   = elFootBox.querySelector('h2');
let n = 0;
const code = ()=> `<span>추가된 코드_${ n+=1 }</span><br />`;

// elFootH.innerHTML = code; 원래 쓰던 방법

// IE에서 지원안됨
// 선택자.insertAdjacentHTML(옵션, 문자형태의 코드) / 옵션 : beforebegin, afterbegin, beforeend, afterend
const option = [ 'beforebegin', 'afterbegin', 'beforeend', 'afterend' ];
elFootH.insertAdjacentHTML(option[0], code());
elFootH.insertAdjacentHTML(option[1], code());
elFootH.insertAdjacentHTML(option[2], code());
elFootH.insertAdjacentHTML(option[3], code());

