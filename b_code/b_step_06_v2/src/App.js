import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Header from './component/Header';
import Main from './component/Main';
import Review from './component/Review';
import CardList from './component/CardList';
import Footer from './component/Footer';
import './App.css';



function App() {
  const title = 'site';
  return (
    <BrowserRouter>
      <div className="App">
        <Header heading={title} />
        <Routes>
          <Route path="/Main" element={<Main />} />   
          <Route path="/Review" element={<Review />} />
          <Route path="/CardList" element={<CardList />} />
        </Routes>
        <Footer heading={title} />
    </div>
    </BrowserRouter>
  );
}

export default App;
