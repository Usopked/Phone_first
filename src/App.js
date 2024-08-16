import React from 'react';
import banner from './banner.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js'; 
import About from './pages/About.js';
import Ques1 from './pages/Ques1.js';
import Ques2 from './pages/Ques2.js';
import Ques3 from './pages/Ques3.js';
import { GlobalStateProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalStateProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={banner} className="App-banner" alt="banner" />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ques1" element={<Ques1 />} />
            <Route path="/ques2" element={<Ques2 />} />
            <Route path="/ques3" element={<Ques3 />} />
            {
          /* 다른 라우트도 여기에 추가할 수 있습니다 */
            }
          </Routes>
        </div>
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
