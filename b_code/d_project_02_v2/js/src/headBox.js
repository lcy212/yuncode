// headBox

// gnb 시나리오
// 1. 메뉴 아이콘이 엑스 아이콘으로 변화한다 (.on)
// 2. .gnb_area > ul 이 나타난다(.on)

// 변수
const gnbArea = document.querySelector('.gnb_area');
const gnbUl   = gnbArea.querySelector('ul');
const gnbBtn  = gnbArea.querySelector('.gnb_btn');

const unbUl   = unbArea.querySelector('.unb_list');
const unbBtn  = unbArea.querySelector('.unb_btn');

let btnState = close;

const btnAni = () => {
  // unb와 gnb 공통되는 부분 함수로 만들기
}


gnbBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if(btnState === close){                // false라면
    gnbUl.style.display = 'block';  // 모달을 block 처리한다
    gnbUl.style.opacity = 0;        // 불투명도를 0으로 설정한다 = 안보임
    gnbBtn.classList.add('on');      // 아이콘 엑스로 바뀜
    gnbUl.style.transition = 'opacity 180ms linear'; // 트랜지션을 불투명도에서 'timed'초동안 linear로 설정한다
    setTimeout(function(){     // 일정시간동안 다음의 내용을 처리한다
      gnbUl.style.opacity = 1; // 모달의 불투명도를 1(100%)로 설정한다 = 서서히 100%가 된다
    }, 1);
    btnState = false;
  }else{                            // true라면
    gnbUl.style.null;               // 설정했던 모든 style을 없앤다
    gnbUl.style.display = 'none';   // 모달을 none 처리한다
    gnbBtn.classList.remove('on');      // 아이콘 엑스로 바뀜
    btnState = close;
  }
})
