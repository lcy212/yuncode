import React from 'react'
import HeadBox from './page/HeadBox';
import RouterPage from './Router/RouterPage';
import FootBox from './page/FootBox';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeadBox />
      <RouterPage />
      <FootBox />
    </div>
  );
}

export default App;
