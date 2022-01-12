import React from 'react'
import HeadBox from './component/HeadBox';
import ContentBox from './component/ContentBox';
import FootBox from './component/FootBox';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeadBox />
      <ContentBox />
      <FootBox />
    </div>
  );
}

export default App;
