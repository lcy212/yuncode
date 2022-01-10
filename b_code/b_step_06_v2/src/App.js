import React from 'react';
import RouterPage from './Router/RouterPage';
import Header from './component/Header';
import Footer from './component/Footer';
import './App.css';


function App() {
  const title = 'site';
  return (
      <div className="App">
        <Header heading={title} />
        <RouterPage />
        <Footer heading={title} />
      </div>
  );
}

export default App;
