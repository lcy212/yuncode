import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/HeadBox.scss';

export default function HeadBox(){

  const fnAction = ({isActive})=> isActive ? "on" : '' ;

  return (
    <header id="headBox">
      <div className='head_inner'>
        <h1><NavLink className={fnAction} to="/">company</NavLink></h1>
        <nav>
          <div className='unb'>
            <ul>
              <li><a href="#">검색</a></li>
              <li><a href="#">로그인</a></li>
              <li><a href="#">회원가입</a></li>
              <li><a href="#">한국어</a></li>
            </ul>
          </div>
          <div className='gnb'>
            <ul>
              <li><NavLink className={fnAction} to="/ContentBox">product</NavLink></li>
              <li><NavLink className={fnAction} to="/EventBox">event</NavLink></li>
              <li><a href="#">gallery</a></li>
              <li><a href="#">notice</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}