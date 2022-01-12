import React from 'react';
import '../style/Company.scss';
import ManualStyle from '../style/Manual.module.scss';
import PersonStyle from '../style/Person.module.scss';

export function Manual(){
  return (
    <div className="company_area">
      <h2 className={ManualStyle.title}>manual</h2>
      <p>manual에 관한 내용 작성</p>
    </div>
  )
}
export function Person(){
  return (
    <div className="company_area">
      <h2 className={PersonStyle.title}>person<span>page</span></h2>
      <p>person에 관한 내용 작성</p>
    </div>
  )
}
export function Rule(){
  return (
    <div className="company_area">
      <h2 className='title'>rule</h2>
      <p>rule에 관한 내용 작성</p>
    </div>
  )
}
export function Etc(){
  return (
    <div className="company_area">
      <h2 className='title'>etc</h2>
      <p>etc에 관한 내용 작성</p>
    </div>
  )
}