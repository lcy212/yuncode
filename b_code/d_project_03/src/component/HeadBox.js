import '../style/HeadBox.scss';

export default function HeadBox(){
  return (
    <header id="headBox">
      <div className='head_inner'>
        <h1>기업명</h1>
        <nav id="gnb">
          <ul>
            <li><a href="#">기업소개</a></li>
            <li><a href="#">갤러리</a></li>
            <li><a href="#">공지사항</a></li>
            <li><a href="#">고객센터</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}