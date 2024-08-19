import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../context/GlobalState';

const About = () => {
  const { weight } = useGlobalState();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f7fafc', textAlign: 'center' }}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2b6cb0' }}>
        정서검사결과
      </h1>
      <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#4a5568', marginBottom: '2rem' }}>
        내 총점 : {weight}
      </p>
      {weight >= 0 && weight <= 4 && (
        <p style={{ fontSize: '1.125rem', color: '#4a5568', marginBottom: '2rem' }}>
          정상<br />
          (총점 0~4 점)<br />
          적응상의 지장을 초래할만한 우울 관련 증상을 거의 보고하지 않았습니다.
        </p>
      )}
      {weight >= 5 && weight <= 9 && (
        <p style={{ fontSize: '1.125rem', color: '#4a5568', marginBottom: '2rem' }}>
          경미한 수준<br />
          (총점 5~9 점)<br />
          경미한 수준의 우울감이 있으나 일상생활에 지장을 줄 정도는 아닙니다.
        </p>
      )}
      {weight >= 10 && weight <= 14 && (
        <p style={{ fontSize: '1.125rem', color: '#4a5568', marginBottom: '2rem' }}>
          중간 수준<br />
          (총점 10~14 점)<br />
          중간수준의 우울감을 비교적 자주 경험하는 것으로 보고하였습니다.<br />
          직업적, 사회적 적응에 일부 영향을 미칠 수 있어 주의 깊은 관찰과 관심이 필요합니다.
        </p>
      )}
      {weight >= 15 && weight <= 19 && (
        <p style={{ fontSize: '1.125rem', color: '#4a5568', marginBottom: '2rem' }}>
          약간 심한 수준<br />
          (총점 15~19 점)<br />
          약간 심한 수준의 우울감을 자주 경험하는 것으로 보고하였습니다.<br />
          직업적, 사회적 적응에 일부 영향을 미칠 경우, 정신건강 전문가의 도움을 받아 보시기를 권해 드립니다.
        </p>
      )}
      {weight >= 20 && weight <= 27 && (
        <p style={{ fontSize: '1.125rem', color: '#4a5568', marginBottom: '2rem' }}>
          심한 수준<br />
          (총점 20~27 점)<br />
          광범위한 우울 증상을 매우 자주, 심한 수준에서 경험하는 것으로 보고하였습니다.<br />
          일상생활의 다양한 영역에서 어려움이 초래될 경우, 추가적인 평가나 정신건강 전문가의 도움을 받아보시기를 권해 드립니다.
        </p>
      )}
      <Link to="/" style={{ color: '#3182ce', textDecoration: 'none', padding: '0.5rem 1rem', border: '1px solid #3182ce', borderRadius: '0.375rem', fontWeight: 'bold', backgroundColor: 'white' }}>
        돌아가기
      </Link>
    </div>
  );
};

export default About;