import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductContent from './ProductContent';
import '../style/ContentBox.scss';

export default function ContentBox(){

  const [num, setNum] = useState(0);
  const [menuData, setMenuData] = useState([]);

  useEffect(() => { // 외부자료를 불러오려면 useEffect를 써야한다
    axios.get('./data/menuData.json')
    .then(res=>  setMenuData(res.data) )
  }, [])
  const fnTab = (e, i) => {  // i : 0 또는 1을 입력받아 그에 맞는 데이터 표시하기
    e.preventDefault();
    setNum(i);               // num = i
  }
  
  const code = menuData.filter((data,index) => index === num);

// ---------------------------------------------------
  return (
    <article id="contentBox">
      <div className='content_inner'>
        <div className='btn_area'>
          {/* 클릭하면 menuData의 idx번째 데이터를 표시하도록하는 함수를 넣음 */}
          { menuData.map((data,idx)=> 
            <button 
              key={data.pageTitle} type="button" onClick={(e)=> fnTab(e, idx)}>
                {data.pageTitle}
            </button>) }
        </div>
        {code.map( (data,idx) => <ProductContent key={idx} data={data} /> )}
        {/* <ProductContent data={prCon} /> */}
      </div>
    </article>
  )
}