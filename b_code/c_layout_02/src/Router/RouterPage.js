import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from '../page/Main';
import ContentBox from '../component/ContentBox';
import EventBox from '../component/EventBox';
import ViewBox from '../component/ViewBox';


export default function RouterPage() {
  return (
    <Routes>
      {/* <Route /> 화면에 노출될 페이지들의 목록 */}
      <Route path="" element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="/ContentBox" element={<ContentBox />} />
      <Route path="/EventBox" element={<EventBox />} />
    </Routes>
  )
}