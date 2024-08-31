// src/pages/Home.js

import React from 'react';
import mona from '../Images/Mona.jpeg';
import { useNavigate } from 'react-router-dom';
import { useGlobalDispatch } from '../context/GlobalState';

const Home = () => {
  const dispatch = useGlobalDispatch();
  const navigate = useNavigate();

  const handleStartExam = () => {
    dispatch({ type: 'RESET_WEIGHT' });
    navigate('/ques1'); // 상태 초기화 후 이동할 페이지로 이동
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f7fafc', textAlign: 'center' }}>
      <img src={mona} className="App-mona" alt="mona" />
      <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2b6cb0' }}>
        우울증 자가진단 평가
      </h1>
      <p style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#4a5568', marginBottom: '2rem' }}>
        지난 2주일 동안 다음 문제들로 인해 얼마나 자주 방해를 받았나요?
      </p>
      <button 
        onClick={handleStartExam} 
        style={{ color: '#3182ce', textDecoration: 'none', padding: '0.5rem 1rem', border: '1px solid #3182ce', borderRadius: '0.375rem', fontWeight: 'bold', backgroundColor: 'white' }}>
        검사 시작
      </button>
    </div>
  );
};

export default Home;