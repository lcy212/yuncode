import '../style/HeadBox.scss';

export default function HeadBox(){
  return (
    <header id="headBox">
      <div className='head_inner'>
        <h1>coffee</h1>
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
              <li><a href="#">about</a></li>
              <li><a href="#">product</a></li>
              <li><a href="#">gallery</a></li>
              <li><a href="#">notice</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}