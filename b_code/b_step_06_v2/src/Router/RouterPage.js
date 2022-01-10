import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from '../page/Main';
import {Manual, Person, Rule, Etc} from '../page/Company';

export default function RouterPage(){
  return (
    <Routes>
      <Route path="" element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="/main" element={<Main />} />
      <Route path="/manual" element={<Manual />} />
      <Route path="/person" element={<Person />} />
      <Route path="/rule" element={<Rule />} />
      <Route path="/etc" element={<Etc />} />
    </Routes>
  )
}