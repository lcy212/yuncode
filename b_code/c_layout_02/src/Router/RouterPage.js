import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from '../page/Main';
import ContentBox from '../page/ContentBox';
import EventBox from '../page/EventBox';


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