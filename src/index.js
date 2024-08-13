import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

// React 18 방식으로 변경
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 웹 성능 측정 관련 코드 (옵션)
reportWebVitals();