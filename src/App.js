import React from 'react';
// import banner from './images/banner.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js'; 
import About from './pages/About.js';
import Ques1 from './pages/Ques/Ques1.js';
import Ques2 from './pages/Ques/Ques2.js';
import Ques3 from './pages/Ques/Ques3.js';
import Ques4 from './pages/Ques/Ques4.js';
import Ques5 from './pages/Ques/Ques5.js';
import Ques6 from './pages/Ques/Ques6.js';
import Ques7 from './pages/Ques/Ques7.js';
import Ques8 from './pages/Ques/Ques8.js';
import Ques9 from './pages/Ques/Ques9.js';
import { GlobalStateProvider } from './context/GlobalState.js';

function App() {
  return (
    <GlobalStateProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            {/*<img src={banner} className="App-banner" alt="banner" /> */}
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ques1" element={<Ques1 />} />
            <Route path="/ques2" element={<Ques2 />} />
            <Route path="/ques3" element={<Ques3 />} />
            <Route path="/ques4" element={<Ques4 />} />
            <Route path="/ques5" element={<Ques5 />} />
            <Route path="/ques6" element={<Ques6 />} />
            <Route path="/ques7" element={<Ques7 />} />
            <Route path="/ques8" element={<Ques8 />} />
            <Route path="/ques9" element={<Ques9 />} />
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
