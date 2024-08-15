import React from 'react';
import banner from './banner.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js'; 
import About from './pages/About.js';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={banner} className="App-banner" alt="banner" />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {
          /* 다른 라우트도 여기에 추가할 수 있습니다 */
            
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
