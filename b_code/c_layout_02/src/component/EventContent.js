import React,{useState, useEffect} from 'react';
import EventLi from './EventLi';

export default function EventsContent({data}){
  const list = data; // prCon의 data를 쓰겠다는 뜻
  return (
    <div className="event_inner">
      <div className="title_area">
        <dl>
          <dt>event page</dt>
          <dd>event</dd>
        </dl>
      </div>
      <div className="content_area">
        <ul>
          <EventLi />
        </ul>
      </div>
    </div>
  )
}

