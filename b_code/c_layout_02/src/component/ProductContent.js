import React,{useState, useEffect} from 'react';
import ProductLi from './ProductLi';

export default function ProductContent({data}){
  const list = data; // prCon의 data를 쓰겠다는 뜻
  return (
    <>
      <div className='title_area'>
        <dl>
          <dt>{list.pageTitle}</dt>
          <dd>{list.pageContent}</dd>
        </dl>
      </div>
      <div className='content_area'>
        <ul>
          { list.products.map( (card, idx) =>    // pr = prCon.products     // <dt>{prCon.products[0]}</dt>
            <ProductLi key={idx} data={card} />    // li에 key를 부여하고 li안의 data는 prCon임을 지정한다
          )}
        </ul>
      </div>
    </>
  )
}

