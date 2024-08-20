import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../context/GlobalState';

// 이미지 파일 import
import normalImage from '../Images/mona1.jpg';
import mildImage from '../Images/mona2.jpg';
import moderateImage from '../Images/mona3.jpg';
import slightlySevereImage from '../Images/mona4.jpg';
import severeImage from '../Images/mona5.jpg';
import logo from '../Images/logo.svg';

const About = () => {
  const { weight } = useGlobalState();

  // weight 값에 따라 이미지 선택
  const getImage = () => {
    if (weight >= 0 && weight <= 4) {
      return normalImage;
    } else if (weight >= 5 && weight <= 9) {
      return mildImage;
    } else if (weight >= 10 && weight <= 14) {
      return moderateImage;
    } else if (weight >= 15 && weight <= 19) {
      return slightlySevereImage;
    } else if (weight >= 20 && weight <= 27) {
      return severeImage;
    } else {
      return logo; // 기본 로고 이미지 또는 오류 처리 이미지
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f7fafc', textAlign: 'center' }}>
      <img src={getImage()} className="App-mona" alt="logo" />
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