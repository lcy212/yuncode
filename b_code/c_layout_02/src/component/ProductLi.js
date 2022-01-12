import React from 'react';

export default function ProductLi({data}){

  return (
    <li>
      <div className='img_part'></div>
      <dl>
        <dt>{data.product}</dt>     
        <dd>{data.narr}</dd>
      </dl>
    </li>
  )
}