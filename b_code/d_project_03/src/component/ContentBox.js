import '../style/ContentBox.scss';
import NoticeArea from './NoticeArea';

export default function ContentBox(){
  return (
    <article id="contentBox">
      <NoticeArea />
      <div className='gallery_area'>
        <div className='gallery_inner'>
          <h2>갤러리</h2>
          <div className='gallery_part'>
            <ul>
              <li><span className='blind'>이미지</span></li>
              <li><span className='blind'>이미지</span></li>
            </ul>
          </div>
          <ul className='indicator'>
            <li className='on'><span className='blind'>indi_1</span></li>
            <li><span className='blind'>indi_2</span></li>
            <li><span className='blind'>indi_3</span></li>
          </ul>
        </div>
      </div>
      <div className='link_area'>
        <div className='link_inner'>
          <h2>바로가기</h2>
          <ul>
            <li><a href="#">바로가기</a></li>
            <li><a href="#">바로가기</a></li>
            <li><a href="#">바로가기</a></li>
          </ul>
        </div>
      </div>
    </article>
  )
}