import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { GlobalStateProvider } from './context/GlobalState';
import reportWebVitals from './reportWebVitals';

// React 18 방식으로 전역 상태 관리 추가
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </React.StrictMode>
);

// 웹 성능 측정 관련 코드 (옵션)
reportWebVitals();