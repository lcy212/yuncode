import React, { useState, useEffect, useRef } from 'react';
import '../../style/ViewBox.scss';

export default function ViewBox(){

  const listData = ['view_01', 'view_02', 'view_03', 'view_04' ];
  listData.unshift(listData[listData.length-1]); // 맨 마지막요소 복제하여 맨 앞에 넣기

  const [num, setNum] = useState(0);
  // const [check, setCheck] = useState('next'); // 어떤 버튼 눌렀는지 확인
  const checkRef = useRef('next'); // {current:'next'}
  
  const initialStyle = {
    position:'relative', left:'-100%',     // 복제요소말고 첫번째 슬라이드가 보이도록 설정 
    marginLeft: `${num * -100}%`
  }

  const [slideStyle, setSlideStyle] = useState(initialStyle);
  const setStyle = { ...initialStyle };

  useEffect( ()=>{
    // console.log( listData[num] );
    // (check === 'next') ? fnSlideNext() : fnSlidePrev();
    (checkRef.current === 'next') ? fnSlideNext() : fnSlidePrev();
  }, [num])

  const fnClassAdd = (i)=>{
    const ON = (i === num) ? '  on' : '';
    const VIEW = 'view_';
    const textNum = '000' + (i+1);
    const VIEW_TEXT = VIEW + textNum.slice(-2);
    return VIEW_TEXT+ ON;
  };

  const fnSlideNext = () => {
    setSlideStyle({
      ...initialStyle,
      transition: (num !== 0) ? 'margin 500ms ease' : 'none' ,      // 첫번째외의 슬라이드 효과
      animation:  (num === 0) ? 'firstSlide 500ms ease 1' : 'none', // 첫번째요소의 슬라이드 효과  / 애니메이션명 소요시간(css와 동일하거나 길게) 효과 반복횟수
    });
  };
  const fnSlidePrev = () => {
    setSlideStyle({
      ...initialStyle,
      transition: (num !== listData.length-2) ? 'margin 500ms ease' : 'none' ,
      animation:  (num === listData.length-2) ? 'lastSlide 500ms ease 1' : 'none'
    });
  };

  // const viewData = listData.filter( (list,idx) => idx === num );
  const fnNextSlide = ()=> { 
    setNum( num >= listData.length-2 ? 0 : num + 1 ); 
    checkRef.current = 'next';
  }
  const fnPrevSlide = ()=> { 
    setNum( num <= 0 ? listData.length-2 : num - 1 ); 
    checkRef.current = 'prev';
  }


  return (
    <article id="viewBox">
      <div className="btn_area">
        <button type="button" className="next" onClick={ fnNextSlide }>next</button>
        <button type="button" className="prev" onClick={ fnPrevSlide }>prev</button>
      </div>
      <div className="indi_area">
        <ul>
          <li className='on'><a href="view_01">indi_1</a></li>
          <li><a href="view_02">indi_2</a></li>
          <li><a href="view_03">indi_3</a></li>
          <li><a href="view_04">indi_4</a></li>
        </ul>
      </div>
      <div className='view_area'>
        <ul style={slideStyle}>
          {listData.map( (list, idx) => <li key={idx}>{list}</li>)}
        </ul>
      </div>
    </article>
  )
}

//  className={fnClassAdd(idx)}