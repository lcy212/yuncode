// c_11_dom_insert_data.js

// 시나리오 
// 1. .card 내부에 li 요소 삽입
// 2. 별도의 data 객체를 만들어 해당하는 내용이 li에 첨부되게 진행
var data = [ 
  { 
    title:'title',
    contents:'Lorem ipsum dolor sit amet consectetur.',
    link:'http://naver.com',
    bgImg:'../multi/img/coffee_01.jpg',
    bgNarr:'커피에 대한 간략한 설명'
  },

  { 
    title:'spring',
    contents:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link:'http://csswinner.com',
    bgImg:'../multi/img/coffee_02.jpg',
    bgNarr:'커피에 대한 간략한 설명'
  },

  { 
    title:'javascript',
    contents:'Lorem ipsum dolor sit amet consectetur adipisicing .',
    link:'http://gdweb.co.kr',
    bgImg:'../multi/img/coffee_01.jpg',
    bgNarr:'커피에 대한 간략한 설명' 
  },

  { 
    title:'winter',
    contents:'Lorem ipsum dolor sit amet.',
    link:'http://google.com',
    bgImg:'../multi/img/coffee_03.jpg',
    bgNarr:'커피에 대한 간략한 설명' 
  },

  { 
    title:'banana',
    contents:'Lorem ipsum dolor sit.',
  },

  { 
    title:'group',
    contents:'Lorem ipsum dolor.',
    bgImg:'../multi/img/coffee_01.jpg',
    bgNarr:'커피에 대한 간략한 설명'
  }

];



// 변수 - 기존내용선택
var conBox = document.querySelector('#conBox');
var cardUl = conBox.querySelector('.card');

var i = 0;
var len = 10;
var makeLi;

// 기능
/* 양이 많아지며 수정 어려워짐 아래 방법으로 변경
for(; i < len; i+=1){
  makeLi = document.createElement('li');     // li 생성
  // 배열 data의 i번째 값(객체)의 title을 dt 태그 안에 삽입, 배열 data의 i번째 값(객체)의 contents를 dd 태그 안에 삽입
  makeLi.innerHTML = '<div class="bg_img" style="background-image:url(' + (data[i].bgImg) + ')"><span class="blind">' + data[i].bgNarr + '</span></div><dl><dt>' + data[i].title + '</dt><dd><span>' + data[i].contents + '</span><br /><a href=\"' + data[i].link + '\" target=\"_blank\">자세히 보기</a></dd></dl>';
  cardUl.appendChild(makeLi);                // li 삽입
}
*/

var baseCode = '<div class="bg_img"><span class="blind"></span></div>\
                <dl>\
                  <dt></dt>\
                  <dd>\
                    <span></span>\
                    <br />\
                    <a target="_blank">자세히 보기</a>\
                  </dd>\
                </dl>';

for(; i< len; i += 1){
  makeLi = document.createElement('li'); 
  makeLi.innerHTML = baseCode;
  cardUl.appendChild(makeLi); 
}

// 내용 중 1번째 내용만 우선 정리하여 삽입
// background-image와 설명
// 제목
// 내용, link 주소


// 시나리오 2
// 1. li요소 첫번째 선택
// 2. 공통 n번째를 가르키는 변수 생성
var setCardFn = function(n){
  var idx        = n;
  var dt         = li[idx].querySelector('dt');
  var narr       = li[idx].querySelector('dd span');
  var link       = li[idx].querySelector('dd a');
  var bgImg      = li[idx].querySelector('.bg_img');
  var bgNarr     = bgImg.querySelector('span');
  
  // 사용이미지없거나, 링크 주소가 없거나(!!undefined) 한다면 해당 요소는 삭제
  dt.innerText   = data[idx].title;
  narr.innerText = data[idx].contents;
  //link.href      = data[idx].link;
  ( !!data[idx].link ) ? link.href = data[idx].link : link.remove();

  if(data[idx].bgImg !== undefined){
    bgImg.style.backgroundImage = 'url(' + data[idx].bgImg + ')';
    bgNarr.innerText = data[idx].bgNarr;
  }else{
    bgImg.remove();    
  }

}; // setCardFn(n)

// li 내용 처리
for(i = 0 ; i < len; i += 1){
  setCardFn(i);
}




// ---------------------------------------
// cardUl.appendChild(makeLi); 여기서 innerHTML :(중복을 허용하지 않고 내부자료를 삭제 후 덮어 씌우기) 대신 append : 기존 자료에 추가 
// escape 문자 : 해당하는 글자가 어떠한 기능을 처리하게 만드는 것을 \' \' \& \| \! , \n \t
//link.setAttribute('href', data[idx].link); // 어떠한 속성도 처리 가능 data-속성
