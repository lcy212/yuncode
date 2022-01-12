import React from 'react';
import ProductLi from './ProductLi';

export default function ProductContent(props){
  const prCon = props.data; // prCon의 data를 쓰겠다는 뜻
  return (
    <flagment>
      <div className='title_area'>
        <dl>
          <dt>{prCon.pageTitle}</dt>
          <dd>{prCon.pageContent}</dd>
        </dl>
      </div>
      <div className='content_area'>
        <ul>
          { prCon.products.map( (pr, idx) => (   // pr = prCon.products     // <dt>{prCon.products[0]}</dt>
            <ProductLi key={idx} data={pr} />    // li에 key를 부여하고 li안의 data는 prCon임을 지정한다
          ))}
        </ul>
      </div>
    </flagment>
  )
}

