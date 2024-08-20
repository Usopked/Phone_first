import React from 'react';
import mona from '../../Images/Mona.jpeg';
import { useNavigate } from 'react-router-dom';
import { useGlobalDispatch } from '../../context/GlobalState';
import './Ques.css';

const Ques4 = () => {
  const dispatch = useGlobalDispatch();
  const navigate = useNavigate();

  const handleOptionClick = (weight) => {
    dispatch({ type: 'ADD_WEIGHT', payload: weight });
    navigate('/ques5');
  };

  return (
    <div className="ques-container">
      <img src={mona} className="App-mona" alt="mona" />
      <h1 className="ques-content">피곤하다고 느끼거나 기운이 거의 없음	
</h1>
      <div className="button-container">
        <button onClick={() => handleOptionClick(0)} className="custom-button">전혀 방해받지 않았다.</button>
        <button onClick={() => handleOptionClick(1)} className="custom-button">며칠동안 방해받았다.</button>
        <button onClick={() => handleOptionClick(2)} className="custom-button">7일 이상 방해받았다.</button>
        <button onClick={() => handleOptionClick(3)} className="custom-button">거의 매일 방해받았다.</button>
      </div>
    </div>
  );
};

export default Ques4;