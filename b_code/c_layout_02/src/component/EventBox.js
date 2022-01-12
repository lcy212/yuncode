import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { MdExpandMore } from 'react-icons/md';
import '../style/EventBox.scss';
import EventLi from './EventLi';

export default function EventBox(){

  const [dataList, setDataList] = useState([]);

  const plusN = 5;
  const [num, setNum] = useState(plusN);

  const dataUrl = './data/eventList.json';

  useEffect(() => {
    // axios.get(dataUrl).then(res => setDataList(res.data))
    (async () => {
      const res = await axios.get(dataUrl);
                  setDataList(res.data);
    })()
  }, [])

  const fnPlusNum = () => { setNum(num + plusN); }
  const viewData = dataList.filter((data,i) => i < 10); // 10이하면 viewData에 담김

  return (
    <article id="eventBox">
      <div className="event_inner">

        <div className="title_area">
          <dl>
            <dt>event page</dt>
            <dd>event</dd>
          </dl>
        </div>

        <div className="content_area">
          <ul>
            { viewData.map((data, idx) => <EventLi key={idx} data={data} /> )}
          </ul>
        </div>

        <div className='more_btn'>
          <button type="button" onClick={fnPlusNum}>
            <MdExpandMore />
            <span className='blind'>더보기</span>
          </button>
        </div>

      </div>
    </article>
  )
}