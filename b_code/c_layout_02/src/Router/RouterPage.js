import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ContentBox from '../component/ContentBox';
import EventBox from '../component/EventBox';


export default function RouterPage() {
  return (
    <Routes>
      {/* <Route /> 화면에 노출될 페이지들의 목록 */}
      <Route path="" element={<ContentBox />} />
      <Route path="/" element={<ContentBox />} />
      <Route path="/EventBox" element={<EventBox />} />
    </Routes>
  )
}