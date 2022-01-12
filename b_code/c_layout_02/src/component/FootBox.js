import '../style/FootBox.scss';

export default function FootBox(){
  return (
    <footer id="footBox">
      <div className='foot_inner'>
        <h2>coffee</h2>
        <div className='menu_area'>
          <ul>
            <li><a href="#">이용약관</a></li>
            <li><a href="#">관련규정</a></li>
            <li><a href="#">개인정보</a></li>
            <li><a href="#">고객센터</a></li>
            <li><a href="#">기타</a></li>
          </ul>
        </div>
        <address>
          <p>서울시 영등포구 여의도동 Oo빌딩 3층 Oo컴퍼니</p>
          <p>대표: 이Oo 전화번호:02-0000-0000 이메일:Oo.Oo@Gmail.com</p><br />
          <p>copyright Oo</p>
        </address>
      </div>
    </footer>
  )
}