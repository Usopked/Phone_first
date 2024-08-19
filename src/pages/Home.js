// src/pages/Home.js

import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../context/GlobalState';

const Home = () => {
  const { weight } = useGlobalState();


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f7fafc', textAlign: 'center' }}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2b6cb0' }}>
        우울증 자가진단 평가
      </h1>
      <p style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#4a5568', marginBottom: '2rem' }}>
        지난 2주일 동안 당신은 다음의 문제들로 인해서 얼마나 자주 방해를 받았습니까?
      </p>
      {/* <p style={{ fontSize: '1.125rem', color: '#4a5568', marginBottom: '2rem' }}>
        Current Weight: {weight}
      </p>
      */}
      {/* <Link to="/about" style={{ color: '#3182ce', textDecoration: 'none', padding: '0.5rem 1rem', border: '1px solid #3182ce', borderRadius: '0.375rem', fontWeight: 'bold', backgroundColor: 'white' }}>
        About me
      </Link> */ }
      <Link to="/ques1" style={{ color: '#3182ce', textDecoration: 'none', padding: '0.5rem 1rem', border: '1px solid #3182ce', borderRadius: '0.375rem', fontWeight: 'bold', backgroundColor: 'white' }}>
        검사 시작
      </Link>
    </div>
  );
};

export default Home;