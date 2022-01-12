import React from 'react';
import { Link } from 'react-router-dom';

export default function EventLi({data}){

  return (
    <li>
      <div className="img_part" style={{backgroundImage:`url(${data.image})`} }>
        <span className='blind'>{data.title}</span>
      </div>
      <dl>
        <dt>{data.title}</dt>
        <dd>{data.date}</dd>
        <dd>{data.content}</dd>
        <dd className='link_btn'><Link to="#">자세히보기</Link></dd>
      </dl>
    </li>
  )
}