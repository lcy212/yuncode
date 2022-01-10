import react from 'react';
import {NavLink} from 'react-router-dom';
import '../style/Footer.scss';

const fnAction = ({isActive}) => { return isActive ? "on" : ''; } // 클릭하면 .on을 붙이라는 함수

export default function Footer(props){
  return (
    <footer id="footBox">
      <h2>{props.heading} 정보</h2>
      <div className="company_info">
        <ul>
          <li><NavLink className={fnAction} to="/manual">이용약관</NavLink></li>
          <li><NavLink className={fnAction} to="/person">개인정보처리</NavLink></li>
          <li><NavLink className={fnAction} to="/rule">회사방침</NavLink></li>
          <li><NavLink className={fnAction} to="/etc">기타</NavLink></li>
        </ul>
      </div>
    </footer>
  )
}