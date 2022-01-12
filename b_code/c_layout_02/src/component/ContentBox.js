import { computeHeadingLevel } from '@testing-library/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../style/ContentBox.scss';
import ProductContent from './ProductContent';

export default function ContentBox(){

  const [num, setNum] = useState(0);

  const [menuData, setMenuData] = useState([]);

  useEffect(() => { // 외부자료를 불러오려면 useEffect를 써야한다
    axios.get('./data/menuData.json')
    .then(res => setMenuData(res.data))
  }, [])
  
// ----------------------------------------------

  let prCon = menuData[num];
  const fnTab = (e, i) => {  // i : 0 또는 1을 입력받아 그에 맞는 데이터 표시하기
    e.preventDefault();
    setNum(i);               // num = i
    prCon = menuData[num];   // num번째 데이터 표시하기
  }
  const code = menuData.filter((data,index) => index === num);

// ---------------------------------------------------
  return (
    <article id="contentBox">
      <div className='content_inner'>
        <div className='btn_area'>
          {/* 클릭하면 menuData의 0번째 데이터를 표시하도록하는 함수를 넣음 */}
          <button type="button" onClick={(e) => fnTab(e, 0)}>coffee</button> 
          {/* <button type="button" onClick = {(e) => prCon = menuData[setNum(0)]}></button> */}
          <button type="button" onClick={(e) => fnTab(e, 1)}>drink</button>
        </div>
        {code.map(data => <ProductContent data={prCon} />)}
        {/* <ProductContent data={prCon} /> */}
      </div>
    </article>
  )
}