import React from 'react';

export default function ProductLi({data}){

  const pr = data;

  return (
    <li key={pr.product}>
      <div className='img_part'></div>
      <dl>
        <dt>{pr.product}</dt>     
        <dd>{pr.narr}</dd>
      </dl>
    </li>
  )
}